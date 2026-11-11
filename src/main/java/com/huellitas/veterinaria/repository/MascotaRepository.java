package com.huellitas.veterinaria.repository;

import com.huellitas.veterinaria.entity.Mascota;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MascotaRepository
        extends JpaRepository<Mascota, Integer> {

    List<Mascota> findByIdPropietario(Integer idPropietario);
}