package com.huellitas.veterinaria.controller;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.PessimisticLockingFailureException;
import org.springframework.http.*;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import java.util.Map;

@RestControllerAdvice(annotations = RestController.class)
public class ApiErrores {
    @ExceptionHandler(ResponseStatusException.class)
    public ResponseEntity<?> regla(ResponseStatusException ex) {
        return ResponseEntity.status(ex.getStatusCode()).body(Map.of("mensaje",
                ex.getReason() == null ? "No se pudo completar la operación." : ex.getReason()));
    }
    @ExceptionHandler({MethodArgumentNotValidException.class, HttpMessageNotReadableException.class})
    public ResponseEntity<?> datos(Exception ex) {
        return ResponseEntity.badRequest().body(Map.of("mensaje",
                "Revisa los campos obligatorios, sus formatos y longitudes. No se guardaron los datos."));
    }
    @ExceptionHandler({DataIntegrityViolationException.class, PessimisticLockingFailureException.class})
    public ResponseEntity<?> conflicto(Exception ex) {
        return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of("mensaje",
                "Los datos entran en conflicto con un registro existente. Consulta de nuevo antes de continuar."));
    }
}
