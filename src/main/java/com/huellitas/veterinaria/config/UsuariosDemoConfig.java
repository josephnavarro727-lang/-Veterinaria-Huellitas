package com.huellitas.veterinaria.config;

import com.huellitas.veterinaria.entity.*;
import com.huellitas.veterinaria.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.core.env.Environment;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import java.nio.charset.StandardCharsets;

/** Solo se ejecuta al elegir explícitamente el perfil demo y proporcionar tres contraseñas locales. */
@Component
@Profile("demo")
public class UsuariosDemoConfig implements CommandLineRunner {
    private final UsuarioRepository usuarios;
    private final RolRepository roles;
    private final PasswordEncoder encoder;
    private final Environment entorno;
    public UsuariosDemoConfig(UsuarioRepository usuarios, RolRepository roles, PasswordEncoder encoder, Environment entorno) {
        this.usuarios = usuarios; this.roles = roles; this.encoder = encoder; this.entorno = entorno;
    }
    @Override
    @Transactional
    public void run(String... args) {
        String[][] cuentas = {
                {"admin_demo", "Administrador Demo", "admin.demo@example.com", "Administrador", "HUELLITAS_ADMIN_PASSWORD"},
                {"recepcion_demo", "Recepcionista Demo", "recepcion.demo@example.com", "Recepcionista", "HUELLITAS_RECEPCION_PASSWORD"},
                {"veterinaria_demo1", "Veterinaria Demo Uno", "vet1.demo@example.com", "Veterinario", "HUELLITAS_VETERINARIO_PASSWORD"}
        };
        // Valida las tres cuentas antes de cambiar cualquiera. Una colisión no modifica cuentas ajenas.
        for (String[] cuenta : cuentas) {
            String clave = entorno.getProperty(cuenta[4]);
            if (clave == null || clave.isBlank() || clave.length() < 12 || clave.getBytes(StandardCharsets.UTF_8).length > 72) {
                throw new IllegalStateException("El perfil demo necesita " + cuenta[4] + " con 12 caracteres como mínimo y 72 bytes como máximo.");
            }
            roles.findByNombre(cuenta[3]).orElseThrow(() -> new IllegalStateException("Importa primero el esquema y los roles de desarrollo."));
            usuarios.findByUsuario(cuenta[0]).ifPresent(u -> {
                if (!cuenta[2].equals(u.getCorreo()) || u.getRol() == null || !cuenta[3].equals(u.getRol().getNombre())) {
                    throw new IllegalStateException("La cuenta demo coincide con otro registro. Inicialización cancelada.");
                }
            });
        }
        for (String[] cuenta : cuentas) {
            Usuario u = usuarios.findByUsuario(cuenta[0]).orElseGet(Usuario::new);
            u.setUsuario(cuenta[0]); u.setNombreCompleto(cuenta[1]); u.setCorreo(cuenta[2]);
            u.setRol(roles.findByNombre(cuenta[3]).orElseThrow());
            u.setPasswordHash(encoder.encode(entorno.getProperty(cuenta[4]))); u.setActivo(true);
            usuarios.save(u);
        }
    }
}
