package com.huellitas.veterinaria;

import com.huellitas.veterinaria.entity.*;
import com.huellitas.veterinaria.repository.*;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.*;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.bind.annotation.*;
import java.nio.file.*;
import java.time.*;
import java.util.*;
import java.util.concurrent.*;
import static org.assertj.core.api.Assertions.*;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestBuilders.*;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
@Import({CorreccionesIntegrationTest.RelojDePrueba.class, CorreccionesIntegrationTest.RutasDePrueba.class})
class CorreccionesIntegrationTest {
    @Autowired MockMvc mvc;
    @Autowired RolRepository roles;
    @Autowired UsuarioRepository usuarios;
    @Autowired PropietarioRepository propietarios;
    @Autowired MascotaRepository mascotas;
    @Autowired ServicioRepository servicios;
    @Autowired CitaRepository citas;
    @Autowired ConsultaContactoRepository contactos;
    @Autowired PasswordEncoder encoder;
    Usuario admin, recepcion, vet, vet2;
    Mascota mascota;
    Servicio servicio;
    String clave;

    @TestConfiguration
    static class RelojDePrueba {
        @Bean @Primary Clock relojFijo() {
            return Clock.fixed(Instant.parse("2030-01-01T12:00:00Z"), ZoneId.of("America/Costa_Rica"));
        }
    }
    // Endpoints disponibles únicamente durante estas pruebas; no se incluyen en la aplicación.
    @RestController
    static class RutasDePrueba {
        @GetMapping("/admin/solo-test") String admin() { return "ok"; }
        @GetMapping("/recepcion/solo-test") String recepcion() { return "ok"; }
        @GetMapping("/veterinario/solo-test") String veterinario() { return "ok"; }
    }

    @BeforeEach
    void datos() {
        citas.deleteAll(); contactos.deleteAll(); mascotas.deleteAll(); propietarios.deleteAll(); usuarios.deleteAll(); roles.deleteAll(); servicios.deleteAll();
        clave = UUID.randomUUID().toString();
        admin = cuenta("admin_prueba", "Administrador");
        recepcion = cuenta("recepcion_prueba", "Recepcionista");
        vet = cuenta("vet_prueba", "Veterinario");
        vet2 = cuenta("vet2_prueba", "Veterinario");
        Propietario dueno = new Propietario();
        dueno.setNombre("Persona original"); dueno.setCedula("PRUEBA-EXISTENTE");
        dueno.setCorreo("original@example.com"); dueno.setTelefono("88880000");
        dueno = propietarios.save(dueno);
        mascota = new Mascota(); mascota.setNombre("Luna"); mascota.setTipo("Perro");
        mascota.setIdPropietario(dueno.getIdPropietario()); mascota = mascotas.save(mascota);
        servicio = new Servicio(); servicio.setNombre("Consulta general"); servicio.setActivo(true); servicio = servicios.save(servicio);
    }
    Usuario cuenta(String nombre, String rolNombre) {
        Rol rol = roles.findByNombre(rolNombre).orElseGet(() -> {
            Rol r = new Rol(); r.setNombre(rolNombre); return roles.save(r);
        });
        Usuario u = new Usuario(); u.setNombreCompleto(nombre); u.setUsuario(nombre);
        u.setRol(rol); u.setActivo(true); u.setPasswordHash(encoder.encode(clave));
        return usuarios.save(u);
    }
    String registro(String cedula) {
        return """
                {"propietario":{"nombre":"Nombre enviado","cedula":"%s","telefono":"99990000","correo":"nuevo@example.com"},
                 "mascota":{"nombre":"Milo","tipo":"Gato","edad":2}}
                """.formatted(cedula);
    }
    String cita(Integer vetId, String fecha, String hora, int duracion) {
        return """
                {"id_mascota":%d,"id_servicio":%d,"id_veterinario":%d,
                 "fecha":"%s","hora":"%s","duracion_minutos":%d,"motivo_consulta":"Chequeo"}
                """.formatted(mascota.getIdMascota(), servicio.getIdServicio(), vetId, fecha, hora, duracion);
    }
    int reservar(Integer vetId, String fecha, String hora, int duracion) throws Exception {
        return mvc.perform(post("/api/citas").with(user(recepcion.getUsuario()).roles("RECEPCIONISTA")).with(csrf())
                .contentType(MediaType.APPLICATION_JSON).content(cita(vetId,fecha,hora,duracion)))
                .andReturn().getResponse().getStatus();
    }

    @Test void registroPublicoCreaUnaMascotaYPropietario() throws Exception {
        mvc.perform(post("/api/registrar").with(csrf()).contentType(MediaType.APPLICATION_JSON).content(registro("PRUEBA-NUEVO")))
                .andExpect(status().isOk());
        assertThat(propietarios.count()).isEqualTo(2); assertThat(mascotas.count()).isEqualTo(2);
        assertThat(propietarios.findByCedula("PRUEBA-NUEVO")).isPresent();
    }
    @Test void registroAnonimoNoModificaPropietarioExistenteNiAgregaMascota() throws Exception {
        mvc.perform(post("/api/registrar").with(csrf()).contentType(MediaType.APPLICATION_JSON).content(registro("PRUEBA-EXISTENTE")))
                .andExpect(status().isConflict());
        assertThat(mascotas.count()).isEqualTo(1);
        var dueno = propietarios.findByCedula("PRUEBA-EXISTENTE").orElseThrow();
        assertThat(dueno.getNombre()).isEqualTo("Persona original");
        assertThat(dueno.getCorreo()).isEqualTo("original@example.com");
        assertThat(dueno.getTelefono()).isEqualTo("88880000");
    }
    @Test void recepcionAgregaMascotaSinSobrescribirPropietario() throws Exception {
        mvc.perform(post("/api/registrar").with(user("recepcion").roles("RECEPCIONISTA")).with(csrf())
                .contentType(MediaType.APPLICATION_JSON).content(registro("PRUEBA-EXISTENTE")))
                .andExpect(status().isOk());
        assertThat(propietarios.count()).isEqualTo(1); assertThat(mascotas.count()).isEqualTo(2);
        assertThat(propietarios.findByCedula("PRUEBA-EXISTENTE").orElseThrow().getNombre()).isEqualTo("Persona original");
    }
    @Test void veterinarioNoModificaRegistrosExistentes() throws Exception {
        mvc.perform(post("/api/registrar").with(user("vet").roles("VETERINARIO")).with(csrf())
                .contentType(MediaType.APPLICATION_JSON).content(registro("PRUEBA-EXISTENTE")))
                .andExpect(status().isConflict());
        assertThat(mascotas.count()).isEqualTo(1);
    }
    @Test void registroValidaEdadCorreoLongitudesYObjetosObligatorios() throws Exception {
        for (String datos : List.of("{}", registro("PRUEBA-NUEVO").replace("\"edad\":2", "\"edad\":-1"),
                registro("PRUEBA-NUEVO").replace("nuevo@example.com", "correo-invalido"),
                registro("x".repeat(31)))) {
            mvc.perform(post("/api/registrar").with(csrf()).contentType(MediaType.APPLICATION_JSON).content(datos))
                    .andExpect(status().isBadRequest());
        }
        assertThat(propietarios.count()).isEqualTo(1); assertThat(mascotas.count()).isEqualTo(1);
    }
    @Test void csrfProtegeTodosLosFormularios() throws Exception {
        for (String ruta : List.of("/api/registrar","/api/contacto","/api/citas")) {
            mvc.perform(post(ruta).contentType(MediaType.APPLICATION_JSON).content("{}"))
                    .andExpect(status().isForbidden()).andExpect(content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON));
        }
    }
    @Test void consultaDeMascotasYVeterinariosRequierePersonalAutorizado() throws Exception {
        for (String ruta : List.of("/api/mascotas/PRUEBA-EXISTENTE", "/api/veterinarios")) {
            mvc.perform(get(ruta)).andExpect(status().isUnauthorized());
            mvc.perform(get(ruta).with(user("vet").roles("VETERINARIO"))).andExpect(status().isForbidden());
            mvc.perform(get(ruta).with(user("recepcion").roles("RECEPCIONISTA"))).andExpect(status().isOk());
            mvc.perform(get(ruta).with(user("admin").roles("ADMIN"))).andExpect(status().isOk());
        }
    }
    @Test void catalogoNoExponeHashYExcluyeVeterinariosInactivos() throws Exception {
        vet2.setActivo(false); usuarios.save(vet2);
        mvc.perform(get("/api/veterinarios").with(user("recepcion").roles("RECEPCIONISTA")))
                .andExpect(status().isOk()).andExpect(jsonPath("$.veterinarios.length()").value(1))
                .andExpect(jsonPath("$.veterinarios[0].id_veterinario").value(vet.getIdUsuario()))
                .andExpect(jsonPath("$..passwordHash").doesNotExist());
    }
    @Test void citaGuardaVeterinarioDuracionMotivoYEstadoPendiente() throws Exception {
        assertThat(reservar(vet.getIdUsuario(),"2030-01-02","09:00",45)).isEqualTo(200);
        var guardada = citas.findAll().get(0);
        assertThat(guardada.getIdVeterinario()).isEqualTo(vet.getIdUsuario());
        assertThat(guardada.getDuracionMinutos()).isEqualTo(45);
        assertThat(guardada.getMotivoConsulta()).isEqualTo("Chequeo");
        assertThat(guardada.getEstado()).isEqualTo("Pendiente");
    }
    @Test void citaNoAceptaCambioDeEstadoOIdDesdeCliente() throws Exception {
        String datos = cita(vet.getIdUsuario(),"2030-01-02","09:00",30).trim();
        datos = datos.substring(0,datos.length()-1) + ",\"estado\":\"Atendida\",\"idCita\":999}";
        mvc.perform(post("/api/citas").with(user("admin").roles("ADMIN")).with(csrf())
                .contentType(MediaType.APPLICATION_JSON).content(datos)).andExpect(status().isOk());
        var guardada = citas.findAll().get(0);
        assertThat(guardada.getEstado()).isEqualTo("Pendiente"); assertThat(guardada.getIdCita()).isNotEqualTo(999);
    }
    @Test void citasRechazanAnonimosYVeterinarios() throws Exception {
        String datos = cita(vet.getIdUsuario(),"2030-01-02","09:00",30);
        mvc.perform(post("/api/citas").with(csrf()).contentType(MediaType.APPLICATION_JSON).content(datos)).andExpect(status().isUnauthorized());
        mvc.perform(post("/api/citas").with(user("vet").roles("VETERINARIO")).with(csrf())
                .contentType(MediaType.APPLICATION_JSON).content(datos)).andExpect(status().isForbidden());
        assertThat(citas.count()).isZero();
    }
    @Test void citaRechazaFechaPasadaDuracionInvalidaYMotivoVacio() throws Exception {
        assertThat(reservar(vet.getIdUsuario(),"2029-12-31","09:00",30)).isEqualTo(400);
        assertThat(reservar(vet.getIdUsuario(),"2030-01-02","09:00",0)).isEqualTo(400);
        assertThat(reservar(vet.getIdUsuario(),"2030-01-02","09:00",1441)).isEqualTo(400);
        mvc.perform(post("/api/citas").with(user("admin").roles("ADMIN")).with(csrf())
                .contentType(MediaType.APPLICATION_JSON).content(cita(vet.getIdUsuario(),"2030-01-02","09:00",30).replace("Chequeo"," ")))
                .andExpect(status().isBadRequest());
        assertThat(citas.count()).isZero();
    }
    @Test void citaRechazaMascotaInexistenteServicioInactivoYRolIncorrecto() throws Exception {
        assertThat(reservar(admin.getIdUsuario(),"2030-01-02","09:00",30)).isEqualTo(400);
        mvc.perform(post("/api/citas").with(user("admin").roles("ADMIN")).with(csrf())
                .contentType(MediaType.APPLICATION_JSON).content(cita(vet.getIdUsuario(),"2030-01-02","09:00",30)
                        .replace("\"id_mascota\":"+mascota.getIdMascota(),"\"id_mascota\":99999")))
                .andExpect(status().isBadRequest());
        servicio.setActivo(false); servicios.save(servicio);
        assertThat(reservar(vet.getIdUsuario(),"2030-01-02","09:00",30)).isEqualTo(400);
        assertThat(citas.count()).isZero();
    }
    @Test void citaRechazaVeterinarioInactivo() throws Exception {
        vet.setActivo(false); usuarios.save(vet);
        assertThat(reservar(vet.getIdUsuario(),"2030-01-02","09:00",30)).isEqualTo(400);
    }
    @Test void rechazaTraslapesDelMismoVeterinarioYPermiteCitasContiguas() throws Exception {
        assertThat(reservar(vet.getIdUsuario(),"2030-01-02","09:00",30)).isEqualTo(200);
        assertThat(reservar(vet.getIdUsuario(),"2030-01-02","09:15",30)).isEqualTo(409);
        assertThat(reservar(vet.getIdUsuario(),"2030-01-02","08:45",60)).isEqualTo(409);
        assertThat(reservar(vet.getIdUsuario(),"2030-01-02","09:00",30)).isEqualTo(409);
        assertThat(reservar(vet.getIdUsuario(),"2030-01-02","09:30",30)).isEqualTo(200);
        assertThat(reservar(vet.getIdUsuario(),"2030-01-02","08:30",30)).isEqualTo(200);
        assertThat(citas.count()).isEqualTo(3);
    }
    @Test void permiteMismaHoraConOtroVeterinario() throws Exception {
        assertThat(reservar(vet.getIdUsuario(),"2030-01-02","09:00",30)).isEqualTo(200);
        assertThat(reservar(vet2.getIdUsuario(),"2030-01-02","09:00",30)).isEqualTo(200);
    }
    @Test void detectaTraslapeQueCruzaMedianoche() throws Exception {
        assertThat(reservar(vet.getIdUsuario(),"2030-01-02","23:45",45)).isEqualTo(200);
        assertThat(reservar(vet.getIdUsuario(),"2030-01-03","00:00",30)).isEqualTo(409);
        assertThat(reservar(vet.getIdUsuario(),"2030-01-03","00:30",30)).isEqualTo(200);
    }
    @Test void citaCanceladaNoBloqueaHorario() throws Exception {
        assertThat(reservar(vet.getIdUsuario(),"2030-01-02","09:00",30)).isEqualTo(200);
        var otra = citas.findAll().get(0); otra.setEstado("Cancelada"); citas.save(otra);
        assertThat(reservar(vet.getIdUsuario(),"2030-01-02","09:00",30)).isEqualTo(200);
    }
    @Test void reservasSimultaneasNoDuplicanElHorario() throws Exception {
        var ejecutor = Executors.newFixedThreadPool(2);
        var salida = new CountDownLatch(1);
        Callable<Integer> tarea = () -> { salida.await(); return reservar(vet.getIdUsuario(),"2030-01-02","09:00",30); };
        try {
            var a = ejecutor.submit(tarea); var b = ejecutor.submit(tarea); salida.countDown();
            assertThat(List.of(a.get(15,TimeUnit.SECONDS),b.get(15,TimeUnit.SECONDS))).containsExactlyInAnyOrder(200,409);
            assertThat(citas.count()).isEqualTo(1);
        } finally { ejecutor.shutdownNow(); }
    }
    @Test void loginFuncionaParaLosTresRoles() throws Exception {
        for (Usuario u : List.of(admin,recepcion,vet)) {
            mvc.perform(formLogin().user(u.getUsuario()).password(clave)).andExpect(status().isFound())
                    .andExpect(redirectedUrl("/panel"));
        }
    }
    @Test void mismaClaveValidaDejaDeFuncionarAlDesactivarCuenta() throws Exception {
        mvc.perform(formLogin().user(vet.getUsuario()).password(clave)).andExpect(redirectedUrl("/panel"));
        vet.setActivo(false); usuarios.save(vet);
        mvc.perform(formLogin().user(vet.getUsuario()).password(clave)).andExpect(redirectedUrl("/login?error"));
    }
    @Test void logoutInvalidaSesionYPanelRequiereNuevoLogin() throws Exception {
        MockHttpSession sesion = (MockHttpSession)mvc.perform(formLogin().user(admin.getUsuario()).password(clave))
                .andReturn().getRequest().getSession(false);
        mvc.perform(get("/panel").session(sesion)).andExpect(status().isOk());
        mvc.perform(post("/logout").session(sesion).with(csrf())).andExpect(redirectedUrl("/login?logout"));
        assertThat(sesion.isInvalid()).isTrue();
        mvc.perform(get("/panel")).andExpect(status().isFound()).andExpect(redirectedUrl("/login"));
    }
    @Test void rutasPorRolTienenPermisosEnServidor() throws Exception {
        for (String rol : List.of("ADMIN","RECEPCIONISTA","VETERINARIO")) {
            for (String area : List.of("admin","recepcion","veterinario")) {
                boolean permitido = rol.equals("ADMIN") || rol.equals("RECEPCIONISTA") && area.equals("recepcion")
                        || rol.equals("VETERINARIO") && area.equals("veterinario");
                mvc.perform(get("/"+area+"/solo-test").with(user("persona").roles(rol)))
                        .andExpect(permitido ? status().isOk() : status().isForbidden());
            }
        }
    }
    @Test void paginasPublicasRenderizanYRegistroTieneUnSoloFormulario() throws Exception {
        Path carpeta = Path.of("target/revision"); Files.createDirectories(carpeta);
        for (String ruta : List.of("/","/servicios","/registro","/citas","/contacto","/login")) {
            String html = mvc.perform(get(ruta)).andExpect(status().isOk()).andReturn().getResponse().getContentAsString();
            if (ruta.equals("/registro")) {
                assertThat(html.split("id=\"formRegistro\"",-1)).hasSize(2);
                assertThat(html.split("src=\"/js/script.js\"",-1)).hasSize(2);
                assertThat(html).contains("name=\"_csrf\" content=\"").doesNotContain("th:content");
            }
            if (ruta.equals("/citas")) assertThat(html).doesNotContain("id=\"formCita\"");
            Files.writeString(carpeta.resolve(ruta.equals("/")?"index.html":ruta.substring(1)+".html"),html);
        }
        String internas = mvc.perform(get("/citas").with(user("recepcion").roles("RECEPCIONISTA")))
                .andExpect(status().isOk()).andReturn().getResponse().getContentAsString();
        assertThat(internas).contains("id=\"formCita\"","id=\"veterinarioCita\"","id=\"duracionCita\"","id=\"motivoCita\"");
        Files.writeString(carpeta.resolve("citas-personal.html"),internas);
    }
    @Test void panelSoloMuestraTarjetasDelRolActual() throws Exception {
        String html = mvc.perform(get("/panel").with(user("vet").roles("VETERINARIO")))
                .andExpect(status().isOk()).andReturn().getResponse().getContentAsString();
        assertThat(html).contains("Panel veterinario").doesNotContain("Panel de administración","Panel de recepción","Registrar mascota");
    }
    @Test void contactoSeGuardaYRechazaCorreoInvalido() throws Exception {
        String datos = "{\"nombre\":\"Persona\",\"correo\":\"persona@example.com\",\"mensaje\":\"Consulta\"}";
        mvc.perform(post("/api/contacto").with(csrf()).contentType(MediaType.APPLICATION_JSON).content(datos)).andExpect(status().isOk());
        mvc.perform(post("/api/contacto").with(csrf()).contentType(MediaType.APPLICATION_JSON).content(datos.replace("persona@example.com","invalido")))
                .andExpect(status().isBadRequest());
        assertThat(contactos.count()).isEqualTo(1);
    }
}
