package com.huellitas.veterinaria.controller;
import com.huellitas.veterinaria.repository.UsuarioRepository;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/veterinarios")
public class VeterinarioApiController {
    private final UsuarioRepository usuarios;
    public VeterinarioApiController(UsuarioRepository usuarios) { this.usuarios = usuarios; }
    @GetMapping
    public Map<String,Object> listar() {
        var lista = usuarios.findByActivoTrueAndRolNombre("Veterinario").stream()
                .map(u -> Map.<String,Object>of("id_veterinario", u.getIdUsuario(), "nombre", u.getNombreCompleto()))
                .toList();
        return Map.of("ok",true,"veterinarios",lista);
    }
}
