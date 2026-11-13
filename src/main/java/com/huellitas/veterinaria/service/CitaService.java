package com.huellitas.veterinaria.service;

import com.huellitas.veterinaria.dto.CitaRequest;
import com.huellitas.veterinaria.entity.Cita;
import com.huellitas.veterinaria.repository.*;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.web.server.ResponseStatusException;
import java.time.Clock;
import java.time.LocalDateTime;

@Service
public class CitaService {
    private final CitaRepository citas;
    private final UsuarioRepository usuarios;
    private final MascotaRepository mascotas;
    private final ServicioRepository servicios;
    private final Clock reloj;

    public CitaService(CitaRepository citas, UsuarioRepository usuarios, MascotaRepository mascotas,
                       ServicioRepository servicios, Clock reloj) {
        this.citas = citas; this.usuarios = usuarios; this.mascotas = mascotas;
        this.servicios = servicios; this.reloj = reloj;
    }

    @Transactional(isolation = Isolation.READ_COMMITTED)
    public Cita programar(CitaRequest datos) {
        LocalDateTime inicio = datos.fecha().atTime(datos.hora());
        if (!inicio.isAfter(LocalDateTime.now(reloj))) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "La fecha y hora deben ser futuras.");
        }
        if (!mascotas.existsById(datos.idMascota())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "La mascota seleccionada no existe.");
        }
        var servicio = servicios.findById(datos.idServicio())
                .filter(s -> Boolean.TRUE.equals(s.getActivo()))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Selecciona un servicio activo."));
        // Todas las reservas para este veterinario toman el mismo bloqueo antes de consultar su agenda.
        var veterinario = usuarios.bloquearPorId(datos.idVeterinario())
                .filter(u -> Boolean.TRUE.equals(u.getActivo()) && u.getRol() != null
                        && "Veterinario".equals(u.getRol().getNombre()))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Selecciona un veterinario activo."));
        LocalDateTime fin = inicio.plusMinutes(datos.duracionMinutos());
        for (Cita otra : citas.findByIdVeterinarioAndEstado(veterinario.getIdUsuario(), "Pendiente")) {
            LocalDateTime otroInicio = otra.getFecha().atTime(otra.getHora());
            LocalDateTime otroFin = otroInicio.plusMinutes(otra.getDuracionMinutos());
            // Intervalos [inicio, fin): se permiten citas contiguas, incluso al cruzar medianoche.
            if (inicio.isBefore(otroFin) && fin.isAfter(otroInicio)) {
                throw new ResponseStatusException(HttpStatus.CONFLICT, "El veterinario tiene otra cita pendiente en ese horario.");
            }
        }
        Cita cita = new Cita();
        cita.setIdMascota(datos.idMascota()); cita.setIdServicio(servicio.getIdServicio());
        cita.setIdVeterinario(veterinario.getIdUsuario()); cita.setFecha(datos.fecha()); cita.setHora(datos.hora());
        cita.setDuracionMinutos(datos.duracionMinutos()); cita.setMotivoConsulta(datos.motivoConsulta().trim());
        cita.setObservaciones(datos.observaciones()); cita.setEstado("Pendiente");
        return citas.save(cita);
    }
}
