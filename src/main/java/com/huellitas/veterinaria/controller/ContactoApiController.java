package com.huellitas.veterinaria.controller;

import com.huellitas.veterinaria.entity.ConsultaContacto;
import com.huellitas.veterinaria.repository.ConsultaContactoRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/contacto")
public class ContactoApiController {

    private final ConsultaContactoRepository consultaRepository;

    public ContactoApiController(
            ConsultaContactoRepository consultaRepository) {

        this.consultaRepository = consultaRepository;
    }

    @PostMapping
    public ResponseEntity<?> guardarConsulta(
            @RequestBody ConsultaContacto consulta) {

        if (vacio(consulta.getNombre())
                || vacio(consulta.getCorreo())
                || vacio(consulta.getMensaje())) {

            return ResponseEntity.badRequest().body(
                    Map.of(
                            "mensaje",
                            "Debe completar el nombre, correo y mensaje."
                    )
            );
        }

        consulta.setIdConsulta(null);

        ConsultaContacto guardada =
                consultaRepository.save(consulta);

        return ResponseEntity.ok(
                Map.of(
                        "mensaje", "Consulta guardada correctamente.",
                        "id_consulta", guardada.getIdConsulta()
                )
        );
    }

    private boolean vacio(String texto) {
        return texto == null || texto.isBlank();
    }
}