package com.huellitas.veterinaria.repository;

import com.huellitas.veterinaria.entity.Cita;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CitaRepository extends JpaRepository<Cita, Integer> {
}
