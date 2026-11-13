package com.huellitas.veterinaria.service;

import com.huellitas.veterinaria.entity.Usuario;
import com.huellitas.veterinaria.repository.UsuarioRepository;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import org.springframework.stereotype.Service;

@Service
public class UsuarioDetailsService implements UserDetailsService {

    private final UsuarioRepository usuarioRepository;

    public UsuarioDetailsService(
            UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {

        Usuario usuario = usuarioRepository
                .findByUsuario(username)
                .orElseThrow(() ->
                        new UsernameNotFoundException(
                                "Usuario no encontrado"
                        )
                );

        if (usuario.getRol() == null) {
            throw new UsernameNotFoundException(
                    "El usuario no tiene un rol asignado"
            );
        }

        String rol = switch (usuario.getRol().getNombre()) {
            case "Administrador" -> "ADMIN";
            case "Recepcionista" -> "RECEPCIONISTA";
            case "Veterinario" -> "VETERINARIO";
            default -> throw new UsernameNotFoundException(
                    "Rol no válido"
            );
        };

        return User.withUsername(usuario.getUsuario())
                .password(usuario.getPasswordHash())
                .roles(rol)
                .disabled(!Boolean.TRUE.equals(usuario.getActivo()))
                .build();
    }
}
