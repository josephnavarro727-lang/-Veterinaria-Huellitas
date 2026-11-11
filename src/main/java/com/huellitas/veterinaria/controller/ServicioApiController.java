package com.huellitas.veterinaria.controller;

import com.huellitas.veterinaria.entity.Servicio;
import com.huellitas.veterinaria.repository.ServicioRepository;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ServicioApiController {

    private final ServicioRepository servicioRepository;

    public ServicioApiController(
            ServicioRepository servicioRepository) {

        this.servicioRepository = servicioRepository;
    }

    @GetMapping("/servicios")
    public Map<String, Object> obtenerServicios() {

        List<Map<String, Object>> servicios =
                servicioRepository.findByActivoTrue()
                        .stream()
                        .map(servicio -> Map.<String, Object>of(
                                "id_servicio", servicio.getIdServicio(),
                                "nombre", servicio.getNombre()
                        ))
                        .toList();

        return Map.of(
                "ok", true,
                "servicios", servicios
        );
    }
}