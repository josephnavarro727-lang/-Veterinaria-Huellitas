package com.huellitas.veterinaria.repository;

import com.huellitas.veterinaria.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.List;
import jakarta.persistence.LockModeType;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

    Optional<Usuario> findByUsuario(String usuario);
    List<Usuario> findByActivoTrueAndRolNombre(String nombre);

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("select u from Usuario u where u.idUsuario = :id")
    Optional<Usuario> bloquearPorId(@Param("id") Integer id);

}