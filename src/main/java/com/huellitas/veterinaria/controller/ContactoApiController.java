package com.huellitas.veterinaria.controller;
import com.huellitas.veterinaria.entity.ConsultaContacto;
import com.huellitas.veterinaria.repository.ConsultaContactoRepository;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/contacto")
public class ContactoApiController {
    private final ConsultaContactoRepository consultas;
    public ContactoApiController(ConsultaContactoRepository consultas) { this.consultas = consultas; }
    @PostMapping
    public Map<String,Object> guardarConsulta(@Valid @RequestBody ContactoRequest datos) {
        ConsultaContacto consulta = new ConsultaContacto();
        consulta.setNombre(datos.nombre().trim()); consulta.setCorreo(datos.correo().trim());
        consulta.setTelefono(datos.telefono()); consulta.setMotivo(datos.motivo()); consulta.setMensaje(datos.mensaje().trim());
        consulta = consultas.save(consulta);
        return Map.of("mensaje", "Consulta guardada correctamente.", "id_consulta", consulta.getIdConsulta());
    }
    public record ContactoRequest(@NotBlank @Size(max=100) String nombre,
            @NotBlank @Email @Size(max=100) String correo,
            @Size(max=20) String telefono, @Size(max=100) String motivo,
            @NotBlank @Size(max=5000) String mensaje) {}
}
