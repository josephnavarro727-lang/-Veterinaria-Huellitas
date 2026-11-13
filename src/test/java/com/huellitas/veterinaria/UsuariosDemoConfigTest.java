package com.huellitas.veterinaria;

import com.huellitas.veterinaria.config.UsuariosDemoConfig;
import com.huellitas.veterinaria.entity.*;
import com.huellitas.veterinaria.repository.*;
import org.junit.jupiter.api.*;
import org.mockito.ArgumentCaptor;
import org.springframework.mock.env.MockEnvironment;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import java.util.*;
import static org.assertj.core.api.Assertions.*;
import static org.mockito.Mockito.*;

class UsuariosDemoConfigTest {
    UsuarioRepository usuarios;
    RolRepository roles;
    MockEnvironment entorno;
    BCryptPasswordEncoder encoder;
    String clave;
    @BeforeEach void preparar() {
        usuarios = mock(UsuarioRepository.class); roles = mock(RolRepository.class);
        entorno = new MockEnvironment(); encoder = new BCryptPasswordEncoder(); clave = UUID.randomUUID().toString();
        for (String variable : List.of("HUELLITAS_ADMIN_PASSWORD","HUELLITAS_RECEPCION_PASSWORD","HUELLITAS_VETERINARIO_PASSWORD")) {
            entorno.setProperty(variable,clave);
        }
        when(usuarios.findByUsuario(anyString())).thenReturn(Optional.empty());
        when(roles.findByNombre(anyString())).thenAnswer(invocacion -> {
            Rol rol = new Rol(); rol.setNombre(invocacion.getArgument(0)); return Optional.of(rol);
        });
    }
    UsuariosDemoConfig inicializador() { return new UsuariosDemoConfig(usuarios,roles,encoder,entorno); }
    @Test void creaTresCuentasConBCryptSinContraseñasFijas() {
        inicializador().run();
        var captor = ArgumentCaptor.forClass(Usuario.class);
        verify(usuarios,times(3)).save(captor.capture());
        assertThat(captor.getAllValues()).extracting(Usuario::getUsuario)
                .containsExactly("admin_demo","recepcion_demo","veterinaria_demo1");
        for (Usuario usuario : captor.getAllValues()) {
            assertThat(usuario.getActivo()).isTrue();
            assertThat(usuario.getPasswordHash()).isNotEqualTo(clave);
            assertThat(encoder.matches(clave,usuario.getPasswordHash())).isTrue();
        }
    }
    @Test void faltaUnaClaveCancelaAntesDeGuardarCualquierCuenta() {
        entorno.setProperty("HUELLITAS_VETERINARIO_PASSWORD","");
        assertThatThrownBy(() -> inicializador().run()).isInstanceOf(IllegalStateException.class);
        verify(usuarios,never()).save(any());
    }
    @Test void colisionConCuentaAjenaCancelaSinModificarla() {
        Usuario ajeno = new Usuario(); ajeno.setCorreo("ajeno@example.com");
        when(usuarios.findByUsuario("recepcion_demo")).thenReturn(Optional.of(ajeno));
        assertThatThrownBy(() -> inicializador().run()).isInstanceOf(IllegalStateException.class);
        verify(usuarios,never()).save(any());
        assertThat(ajeno.getCorreo()).isEqualTo("ajeno@example.com");
    }
    @Test void rechazaMasDe72BytesAntesDeBCrypt() {
        entorno.setProperty("HUELLITAS_ADMIN_PASSWORD","á".repeat(40));
        assertThatThrownBy(() -> inicializador().run()).isInstanceOf(IllegalStateException.class);
        verify(usuarios,never()).save(any());
    }
}
