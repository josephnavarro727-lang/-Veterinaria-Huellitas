package com.huellitas.veterinaria.controller;

import com.huellitas.veterinaria.entity.Servicio;
import com.huellitas.veterinaria.repository.ServicioRepository;

import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
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
                        .map(servicio -> {
                            Map<String, Object> map = new LinkedHashMap<>();
                            map.put("id_servicio", servicio.getIdServicio());
                            map.put("nombre", servicio.getNombre());
                            if (servicio.getPrecio() != null) {
                                map.put("precio", servicio.getPrecio());
                            }
                            if (servicio.getDescripcion() != null) {
                                map.put("descripcion", servicio.getDescripcion());
                            }
                            return map;
                        })
                        .toList();

        return Map.of(
                "ok", true,
                "servicios", servicios
        );
    }
}