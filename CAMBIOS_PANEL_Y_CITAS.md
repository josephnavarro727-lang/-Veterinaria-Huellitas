# Veterinaria Huellitas — Panel y Agendar cita actualizados

Esta carpeta es un proyecto **Spring Boot completo** para abrir desde `pom.xml` en IntelliJ IDEA. Parte del ZIP «Servicios y Registro Mejorado» y conserva todo lo anterior.

## Qué cambió

- `src/main/resources/templates/panel.html`: panel moderno con encabezado, sesión, rol, fecha, módulos pendientes y accesos reales. Los permisos se aplican con Spring Security (`sec:authorize`). Los módulos en desarrollo se muestran como pendientes y no presentan botones engañosos.
- `src/main/resources/static/panel-modern.css`: diseño responsive del panel.
- `src/main/resources/static/panel-modern.js`: fecha del dispositivo.
- `src/main/resources/templates/citas.html`: formulario dividido visualmente en cuatro pasos, con resumen lateral y mensajes explicativos. Mantiene todos los `id` y `name` que usa JavaScript y el servidor. Solo Admin y Recepción pueden acceder al formulario.
- `src/main/resources/static/citas-modern.css`: estilos adaptables para escritorio y celular.
- `src/main/resources/static/js/citas-resumen.js`: resumen en vivo, solo informativo; no guarda ni consulta la base.
- `src/main/resources/static/js/script.js`: textos ES/EN de las nuevas etiquetas. Se mantienen las funciones API y las validaciones.

## Funciones que se mantienen

- Login con BCrypt, roles ADMIN / RECEPCIONISTA / VETERINARIO y logout POST.
- Registro de propietarios y mascotas y página de Servicios.
- Programación real mediante `/api/citas`, búsqueda `/api/mascotas/{cedula}`, veterinarios activos `/api/veterinarios`, servicios `/api/servicios` y protección CSRF.
- La disponibilidad de veterinarios se valida en el **servidor al guardar**, no con el resumen del navegador.
- El formulario de citas permanece restringido a Admin/Recepción y el panel veterinario solo muestra funciones sin terminar.

## Cómo abrirlo

1. Descomprime el ZIP en una carpeta nueva y abre en IntelliJ IDEA **la carpeta que contiene `pom.xml`**.
2. Carga Maven y ejecuta `VeterinariaHuellitasApplication`.
3. En Run → Edit Configurations, añade `DB_PASSWORD` con tu contraseña **sin mostrarla en capturas ni guardarla en Git**.
4. Utiliza tu base `veterinaria_huellitas_avance2_entrega_final`, que ya debe contener sus siete tablas. No es necesario importar SQL de nuevo.
5. Prueba `http://localhost:8080/panel` con cada rol y `http://localhost:8080/citas` con Administrador o Recepcionista.
6. Si Firefox muestra CSS viejo, presiona Ctrl+F5.

**Nota:** no se incluyeron estadísticas falsas ni se realizaron cambios de tablas o API. El estilo y la lectura en el navegador pueden comprobarse por separado, pero el funcionamiento con MySQL exige tu configuración local.
