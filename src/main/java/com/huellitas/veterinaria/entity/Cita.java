package com.huellitas.veterinaria.entity;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.LocalDateTime;

@Entity
@Table(name = "citas")
public class Cita {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cita")
    private Integer idCita;

    @JsonProperty("id_mascota")
    @Column(name = "id_mascota", nullable = false)
    private Integer idMascota;

    @JsonProperty("id_servicio")
    @Column(name = "id_servicio", nullable = false)
    private Integer idServicio;

    @JsonProperty("id_veterinario")
    @Column(name = "id_veterinario")
    private Integer idVeterinario;

    @JsonProperty("duracion_minutos")
    @Column(name = "duracion_minutos", nullable = false)
    private Integer duracionMinutos = 30;

    @JsonProperty("motivo_consulta")
    @Column(name = "motivo_consulta", length = 255)
    private String motivoConsulta;

    public Integer getIdVeterinario() { return idVeterinario; }
    public void setIdVeterinario(Integer valor) { this.idVeterinario = valor; }
    public Integer getDuracionMinutos() { return duracionMinutos; }
    public void setDuracionMinutos(Integer valor) { this.duracionMinutos = valor; }
    public String getMotivoConsulta() { return motivoConsulta; }
    public void setMotivoConsulta(String valor) { this.motivoConsulta = valor; }

    @Column(name = "fecha", nullable = false)
    private LocalDate fecha;

    @Column(name = "hora", nullable = false)
    private LocalTime hora;

    @Column(name = "estado")
    private String estado = "Pendiente";

    @Column(name = "observaciones")
    private String observaciones;

    @Column(name = "fecha_registro", insertable = false, updatable = false)
    private LocalDateTime fechaRegistro;

    public Integer getIdCita() {
        return idCita;
    }

    public void setIdCita(Integer idCita) {
        this.idCita = idCita;
    }

    public Integer getIdMascota() {
        return idMascota;
    }

    public void setIdMascota(Integer idMascota) {
        this.idMascota = idMascota;
    }

    public Integer getIdServicio() {
        return idServicio;
    }

    public void setIdServicio(Integer idServicio) {
        this.idServicio = idServicio;
    }

    public LocalDate getFecha() {
        return fecha;
    }

    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }

    public LocalTime getHora() {
        return hora;
    }

    public void setHora(LocalTime hora) {
        this.hora = hora;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getObservaciones() {
        return observaciones;
    }

    public void setObservaciones(String observaciones) {
        this.observaciones = observaciones;
    }

    public LocalDateTime getFechaRegistro() {
        return fechaRegistro;
    }
}