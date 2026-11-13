package com.huellitas.veterinaria.repository;
import com.huellitas.veterinaria.entity.Cita;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CitaRepository extends JpaRepository<Cita, Integer> {
    List<Cita> findByIdVeterinarioAndEstado(Integer idVeterinario, String estado);
}
