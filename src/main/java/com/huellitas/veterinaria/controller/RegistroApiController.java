package com.huellitas.veterinaria.controller;

import com.huellitas.veterinaria.entity.Mascota;
import com.huellitas.veterinaria.entity.Propietario;
import com.huellitas.veterinaria.repository.MascotaRepository;
import com.huellitas.veterinaria.repository.PropietarioRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class RegistroApiController {

    private final PropietarioRepository propietarioRepository;
    private final MascotaRepository mascotaRepository;

    public RegistroApiController(
            PropietarioRepository propietarioRepository,
            MascotaRepository mascotaRepository) {

        this.propietarioRepository = propietarioRepository;
        this.mascotaRepository = mascotaRepository;
    }

    @PostMapping("/registrar")
    @Transactional
    public ResponseEntity<?> registrar(
            @RequestBody RegistroRequest datos) {

        if (datos.propietario() == null || datos.mascota() == null) {
            return ResponseEntity.badRequest()
                    .body(Map.of("mensaje", "Faltan datos del registro."));
        }

        var propietarioDatos = datos.propietario();
        var mascotaDatos = datos.mascota();

        if (vacio(propietarioDatos.nombre())
                || vacio(propietarioDatos.cedula())
                || vacio(mascotaDatos.nombre())
                || vacio(mascotaDatos.tipo())) {

            return ResponseEntity.badRequest()
                    .body(Map.of("mensaje", "Complete los campos obligatorios."));
        }

        Propietario propietario = propietarioRepository
                .findByCedula(propietarioDatos.cedula().trim())
                .orElseGet(Propietario::new);

        propietario.setNombre(propietarioDatos.nombre().trim());
        propietario.setCedula(propietarioDatos.cedula().trim());
        propietario.setTelefono(propietarioDatos.telefono());
        propietario.setCorreo(propietarioDatos.correo());

        propietario = propietarioRepository.save(propietario);

        Mascota mascota = new Mascota();

        mascota.setNombre(mascotaDatos.nombre().trim());
        mascota.setTipo(mascotaDatos.tipo().trim());
        mascota.setRaza(mascotaDatos.raza());
        mascota.setEdad(mascotaDatos.edad());
        mascota.setObservaciones(mascotaDatos.observaciones());
        mascota.setIdPropietario(propietario.getIdPropietario());

        mascota = mascotaRepository.save(mascota);

        return ResponseEntity.ok(Map.of(
                "mensaje", "Mascota registrada correctamente.",
                "idMascota", mascota.getIdMascota(),
                "idPropietario", propietario.getIdPropietario()
        ));
    }

    private boolean vacio(String texto) {
        return texto == null || texto.isBlank();
    }

    public record RegistroRequest(
            PropietarioDatos propietario,
            MascotaDatos mascota
    ) {}

    public record PropietarioDatos(
            String nombre,
            String cedula,
            String telefono,
            String correo
    ) {}

    public record MascotaDatos(
            String nombre,
            String tipo,
            String raza,
            Integer edad,
            String observaciones
    ) {}
}