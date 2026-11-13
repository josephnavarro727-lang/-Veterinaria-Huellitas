package com.huellitas.veterinaria.controller;
import com.huellitas.veterinaria.dto.CitaRequest;
import com.huellitas.veterinaria.service.CitaService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/citas")
public class CitaApiController {
    private final CitaService citas;
    public CitaApiController(CitaService citas) { this.citas = citas; }

    @PostMapping
    public Map<String,Object> guardarCita(@Valid @RequestBody CitaRequest datos) {
        var cita = citas.programar(datos);
        return Map.of("mensaje", "Cita registrada correctamente.", "id_cita", cita.getIdCita());
    }
}
