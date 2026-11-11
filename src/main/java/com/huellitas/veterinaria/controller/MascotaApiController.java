package com.huellitas.veterinaria.controller;

import com.huellitas.veterinaria.entity.Mascota;
import com.huellitas.veterinaria.entity.Propietario;
import com.huellitas.veterinaria.repository.MascotaRepository;
import com.huellitas.veterinaria.repository.PropietarioRepository;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class MascotaApiController {

    private final MascotaRepository mascotaRepository;
    private final PropietarioRepository propietarioRepository;

    public MascotaApiController(
            MascotaRepository mascotaRepository,
            PropietarioRepository propietarioRepository) {

        this.mascotaRepository = mascotaRepository;
        this.propietarioRepository = propietarioRepository;
    }

    @GetMapping("/mascotas/{cedula}")
    public Map<String, Object> buscarMascotas(
            @PathVariable String cedula) {

        Optional<Propietario> propietario =
                propietarioRepository.findByCedula(cedula.trim());

        if (propietario.isEmpty()) {
            return Map.of(
                    "ok", true,
                    "mascotas", List.of()
            );
        }

        List<Map<String, Object>> mascotas =
                mascotaRepository
                        .findByIdPropietario(
                                propietario.get().getIdPropietario()
                        )
                        .stream()
                        .map(mascota -> Map.<String, Object>of(
                                "id_mascota", mascota.getIdMascota(),
                                "nombre", mascota.getNombre(),
                                "tipo", mascota.getTipo()
                        ))
                        .toList();

        return Map.of(
                "ok", true,
                "mascotas", mascotas
        );
    }
}
