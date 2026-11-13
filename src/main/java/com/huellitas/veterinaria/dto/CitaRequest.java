package com.huellitas.veterinaria.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.*;
import java.time.LocalDate;
import java.time.LocalTime;

public record CitaRequest(
        @JsonProperty("id_mascota") @NotNull @Positive Integer idMascota,
        @JsonProperty("id_servicio") @NotNull @Positive Integer idServicio,
        @JsonProperty("id_veterinario") @NotNull @Positive Integer idVeterinario,
        @NotNull LocalDate fecha,
        @NotNull LocalTime hora,
        @JsonProperty("duracion_minutos") @NotNull @Min(1) @Max(1440) Integer duracionMinutos,
        @JsonProperty("motivo_consulta") @NotBlank @Size(max=255) String motivoConsulta,
        @Size(max=5000) String observaciones) {}
