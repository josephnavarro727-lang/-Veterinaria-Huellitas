package com.huellitas.veterinaria.controller;

import com.huellitas.veterinaria.entity.Cita;
import com.huellitas.veterinaria.repository.CitaRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/citas")
public class CitaApiController {

    private final CitaRepository citaRepository;

    public CitaApiController(CitaRepository citaRepository) {
        this.citaRepository = citaRepository;
    }

    @PostMapping
    public ResponseEntity<?> guardarCita(@RequestBody Cita cita) {

        if (cita.getIdMascota() == null ||
                cita.getIdServicio() == null ||
                cita.getFecha() == null ||
                cita.getHora() == null) {

            return ResponseEntity.badRequest().body(
                    Map.of(
                            "mensaje",
                            "Debe completar la mascota, el servicio, la fecha y la hora."
                    )
            );
        }

        cita.setIdCita(null);
        cita.setEstado("Pendiente");

        Cita guardada = citaRepository.save(cita);

        return ResponseEntity.ok(
                Map.of(
                        "mensaje", "Cita registrada correctamente.",
                        "id_cita", guardada.getIdCita()
                )
        );
    }
}