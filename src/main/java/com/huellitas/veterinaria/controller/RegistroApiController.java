package com.huellitas.veterinaria.controller;

import com.huellitas.veterinaria.entity.Mascota;
import com.huellitas.veterinaria.entity.Propietario;
import com.huellitas.veterinaria.repository.MascotaRepository;
import com.huellitas.veterinaria.repository.PropietarioRepository;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class RegistroApiController {
    private final PropietarioRepository propietarios;
    private final MascotaRepository mascotas;

    public RegistroApiController(PropietarioRepository propietarios, MascotaRepository mascotas) {
        this.propietarios = propietarios;
        this.mascotas = mascotas;
    }

    @PostMapping("/registrar")
    @Transactional
    public ResponseEntity<?> registrar(@Valid @RequestBody RegistroRequest datos, Authentication usuario) {
        var dueno = datos.propietario();
        var animal = datos.mascota();
        var existente = propietarios.findByCedula(dueno.cedula().trim());
        boolean personal = usuario != null && usuario.isAuthenticated() && usuario.getAuthorities().stream()
                .anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN") || a.getAuthority().equals("ROLE_RECEPCIONISTA"));
        if (existente.isPresent() && !personal) {
            throw new ResponseStatusException(HttpStatus.CONFLICT,
                    "No se pudo completar el registro. Si ya estás registrado, contacta con Recepción para agregar una mascota.");
        }
        // El registro de otra mascota nunca reemplaza datos de un propietario existente.
        Propietario propietario = existente.orElseGet(() -> {
            Propietario nuevo = new Propietario();
            nuevo.setNombre(dueno.nombre().trim());
            nuevo.setCedula(dueno.cedula().trim());
            nuevo.setTelefono(opcional(dueno.telefono()));
            nuevo.setCorreo(opcional(dueno.correo()));
            return propietarios.save(nuevo);
        });
        Mascota mascota = new Mascota();
        mascota.setNombre(animal.nombre().trim());
        mascota.setTipo(animal.tipo().trim());
        mascota.setRaza(opcional(animal.raza()));
        mascota.setEdad(animal.edad());
        mascota.setObservaciones(opcional(animal.observaciones()));
        mascota.setIdPropietario(propietario.getIdPropietario());
        mascota = mascotas.save(mascota);
        return ResponseEntity.ok(Map.of("mensaje", "Mascota registrada correctamente.",
                "idMascota", mascota.getIdMascota(), "idPropietario", propietario.getIdPropietario()));
    }

    private String opcional(String valor) { return valor == null || valor.isBlank() ? null : valor.trim(); }

    public record RegistroRequest(@NotNull @Valid PropietarioDatos propietario,
                                  @NotNull @Valid MascotaDatos mascota) {}
    public record PropietarioDatos(
            @NotBlank @Size(max=100) String nombre,
            @NotBlank @Size(max=30) String cedula,
            @Size(max=20) String telefono,
            @Email @Size(max=100) String correo) {}
    public record MascotaDatos(
            @NotBlank @Size(max=100) String nombre,
            @NotBlank @Size(max=50) String tipo,
            @Size(max=100) String raza,
            @PositiveOrZero Integer edad,
            @Size(max=5000) String observaciones) {}
}
