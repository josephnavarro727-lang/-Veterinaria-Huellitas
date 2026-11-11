package com.huellitas.veterinaria.repository;

import com.huellitas.veterinaria.entity.Servicio;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ServicioRepository
        extends JpaRepository<Servicio, Integer> {

    List<Servicio> findByActivoTrue();
}