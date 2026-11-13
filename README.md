# Veterinaria Huellitas — correcciones de la revisión

Esta copia corrige los hallazgos de la revisión del Avance 2. Conserva Java 17, Spring Boot 4.1.1, MySQL y el diseño del sitio recibido. No se conectó a la base de datos de tu computadora. Esta versión se propone desde una rama de actualización visual mediante un Pull Request hacia `main`; hasta su fusión, `main` conserva la versión anterior. El Word académico con datos personales queda fuera de esta rama pública.

## Qué se corrigió

- `registro.html` contiene una sola página y un solo formulario. Los formularios bloquean envíos simultáneos.
- El registro público crea propietarios nuevos y sus mascotas. Si la cédula ya existe, no modifica el propietario ni agrega mascotas sin autorización. Administrador y Recepción pueden agregar otra mascota a ese propietario, conservando sus datos originales.
- La búsqueda de mascotas por cédula, el catálogo de veterinarios y la programación de citas requieren Administrador o Recepcionista. `/citas` sigue siendo navegable públicamente y explica cómo contactar con Recepción.
- Las citas guardan veterinario, duración y motivo. El servidor exige mascota existente, servicio activo, veterinario activo con el rol correcto, horario futuro y duración entre 1 y 1440 minutos.
- Se rechazan traslapes de citas pendientes del mismo veterinario, incluso al cruzar medianoche. Se permiten citas contiguas y citas simultáneas con veterinarios diferentes. Un bloqueo del veterinario y una transacción con aislamiento READ_COMMITTED coordinan las reservas concurrentes.
- Todos los formularios usan protección CSRF; los mensajes de error del servidor se muestran sin borrar lo completado.
- Se validan campos obligatorios, correos, longitudes y edad no negativa en el servidor.
- El menú distingue «Iniciar sesión» y «Mi panel» y traduce ambos rótulos. Se quitó el CSS duplicado del botón en Inicio.
- Existe un procedimiento explícito para inicializar las tres cuentas de desarrollo con contraseñas elegidas localmente y BCrypt. No hay contraseñas fijas incluidas.
- Los SQL nuevos no contienen `DROP TABLE`. El script opcional de datos exige tablas vacías antes de insertar los 20 registros ficticios.

## Abrir la copia corregida en Windows

1. Descomprime el ZIP en una carpeta nueva; conserva tu proyecto anterior como respaldo.
2. Abre en IntelliJ IDEA la carpeta que contiene `pom.xml`.
3. Selecciona un **JDK 17 o superior** como SDK del proyecto y como JDK de Maven. La compilación tiene como objetivo Java 17.
4. Recarga el proyecto Maven.
5. Configura en **Run → Edit Configurations → Environment variables** la variable `DB_PASSWORD` con tu contraseña local. No la escribas en `application.properties`.
6. Ejecuta `VeterinariaHuellitasApplication.java` y abre `http://localhost:8080`.

La conexión predeterminada usa MySQL en `127.0.0.1:3306` y la base `veterinaria_huellitas_avance2_entrega_final`. Puedes cambiarla con `DB_URL` y cambiar el usuario con `DB_USER`. La zona para validar citas es `America/Costa_Rica`; puede configurarse mediante `APP_TIME_ZONE`.

### Si ya tienes la base del Avance 2

No vuelvas a importar los datos originales ni ejecutes scripts que borren tablas. Las columnas nuevas del código ya estaban en el SQL recibido: `id_veterinario`, `duracion_minutos` y `motivo_consulta`. Esta corrección no requiere alterar ese esquema.

Si tu base es otra versión, revisa su estructura antes de aplicar cambios. `ddl-auto=none` se conserva: la aplicación no crea ni modifica tablas en MySQL.

### Si preparas una base nueva

En MySQL Workbench:

1. Ejecuta `database/01_esquema_sin_borrado.sql` para crear las siete tablas que no existan.
2. Solo si todas están vacías, puedes ejecutar `database/02_datos_demo_solo_base_vacia.sql`. Inserta los 20 registros ficticios originales, dejando las cuatro cuentas inactivas y sin contraseña utilizable.
3. Inicializa las tres cuentas de desarrollo con el procedimiento siguiente.

El segundo script usa un procedimiento temporal y requiere permiso para crear procedimientos. Si se rechaza porque la base tiene datos, no vacíes las tablas: usa tus registros existentes. Si Workbench detiene la ejecución antes de la última instrucción, puede quedar el procedimiento `huellitas_insertar_demo_v20261113`; puedes eliminar solo ese procedimiento antes de volver a preparar una base vacía.

Los SQL fueron revisados estáticamente. No se ejecutaron contra MySQL en este entorno.

## Preparar el login de desarrollo

Usa este procedimiento únicamente en una **base local de desarrollo**. Requiere que existan los roles Administrador, Recepcionista y Veterinario.

Desde PowerShell, en la carpeta del proyecto:

```powershell
.\scripts\iniciar-demo.ps1
```

El script pide la contraseña de MySQL si no está configurada y tres contraseñas nuevas, ocultando lo que escribes. Cada contraseña de aplicación debe tener al menos 12 caracteres y como máximo 72 bytes en UTF-8. No crea archivos con esos valores.

La aplicación arranca con el perfil `demo`. Este perfil crea o reactiva **únicamente** `admin_demo`, `recepcion_demo` y `veterinaria_demo1`, y establece las contraseñas introducidas usando BCrypt. Si una cuenta de esos nombres tiene otro correo o rol, cancela la operación para no reemplazar una cuenta ajena. El cuarto usuario del SQL permanece inactivo.

Al finalizar las pruebas, detén la aplicación. Luego puedes arrancarla normalmente desde IntelliJ, sin el perfil `demo`; las cuentas se conservan. Ejecutar de nuevo el script vuelve a establecer las contraseñas de esas tres cuentas. El perfil demo no se ejecuta en un arranque normal.

Si PowerShell bloquea los scripts, puedes establecer las variables `HUELLITAS_ADMIN_PASSWORD`, `HUELLITAS_RECEPCION_PASSWORD` y `HUELLITAS_VETERINARIO_PASSWORD` mediante el editor de variables de IntelliJ y seleccionar el perfil `demo` para ese arranque. No escribas sus valores en comandos guardados, capturas o commits.

## Usar el flujo corregido

- **Visitante:** puede leer las páginas públicas, enviar contacto y registrar un propietario nuevo con su mascota.
- **Administrador / Recepcionista:** inicia sesión, abre **Programar cita** desde el panel, busca por cédula, selecciona mascota, servicio y veterinario, y completa fecha, hora, duración y motivo. Puede agregar otra mascota mediante Registro sin reemplazar los datos del propietario.
- **Veterinario:** mantiene su panel por rol; el módulo de citas asignadas aún está pendiente.

Para modificar los datos de un propietario existente hace falta completar el módulo interno de edición. El registro público ya no realiza esa modificación implícita.

## Pruebas repetibles

Las pruebas del servidor usan una base **H2 efímera**, sin `DB_PASSWORD` y sin conectarse a MySQL:

```powershell
.\mvnw.cmd clean test
```

Se verificaron **31 pruebas, sin fallos ni errores**: registro, permisos, CSRF, validaciones, persistencia de citas, conflictos de horario, concurrencia, login de tres roles, cuenta inactiva con contraseña previamente válida, cierre de sesión e inicialización de cuentas demo.

La prueba opcional del navegador usa el HTML real renderizado durante las pruebas de Spring y respuestas API simuladas:

```powershell
python -m pip install playwright
python -m playwright install chromium
python .\scripts\verificar_navegador.py
```

Comprueba un solo envío ante dos eventos simultáneos, cabecera CSRF, traducción del login, formulario completo de citas, mensajes de conflicto, contacto y seis pantallas a 375 px sin desbordamiento horizontal. No guarda datos en MySQL.

Para generar el ejecutable:

```powershell
.\mvnw.cmd clean package
```

El JAR se genera en `target`. Las dependencias se descargan mediante Maven en la primera ejecución.

## Lo que sigue pendiente

Esta entrega corrige los problemas identificados; no declara terminados módulos nuevos: administración completa de usuarios, edición/listados internos de propietarios y mascotas, consulta/reprogramación/cancelación de citas, atención por veterinario, historial y reportes. Las tarjetas correspondientes conservan la indicación «Módulo pendiente».

Las pruebas con H2 y el navegador no sustituyen una prueba final en tu MySQL local. No se efectuaron mediciones con 100 registros ni una auditoría para despliegue público.


## Actualización visual de Servicios (13/11/2026)

Se mejoró solamente la ruta `/servicios` para aproximarla al diseño aprobado: cabecera verde con mascotas, filtros redondeados, seis tarjetas horizontales en escritorio, precios visibles, seis servicios complementarios y adaptación para teléfono.

Archivos editados: `src/main/resources/templates/servicios.html`, `src/main/resources/static/servicios-modern.css`, `src/main/resources/static/mascotas-servicios.png` y `src/main/resources/static/js/script.js` (traducciones de la cabecera, nota de precios y accesibilidad de filtros).

**Precios:** son ejemplos ilustrativos del proyecto académico y NO se deben presentar como tarifas reales de una veterinaria sin confirmarlos. Estos valores siguen escritos en las traducciones de `script.js`, tarjetas de `servicios.html` y el modal. No se alteraron los datos de MySQL ni las API.

**Al probar en Firefox:** abre `http://localhost:8080/servicios` y usa `Ctrl+F5` para evitar CSS almacenado en caché. Inicia la aplicación desde IntelliJ con la variable `DB_PASSWORD` configurada (nunca guardes la contraseña dentro del proyecto).

## Actualización visual de Registrar mascota (13/11/2026)

Se rediseñó **solo la pantalla `/registro`** para combinarla visualmente con Servicios. La página ahora tiene encabezado verde menta con perro y gato, formulario organizado en dos secciones, etiquetas para campos opcionales, botones más visibles, cuadro lateral de ayuda y adaptación a móviles.

Archivos modificados: `src/main/resources/templates/registro.html`, nuevo `src/main/resources/static/registro-modern.css`, y traducciones/mensajes de estado en `src/main/resources/static/js/script.js`.

**Sin cambios de lógica de negocio:** se conservaron `id=formRegistro`, los nombres de todos los campos y el endpoint `POST /api/registrar`; no se modificaron Java, las tablas ni la configuración de MySQL. El backend seguirá rechazando que un visitante agregue una mascota a un propietario previamente registrado.

Si el diseño no cambia en Firefox, abre `http://localhost:8080/registro` y usa `Ctrl + F5`. Configura `DB_PASSWORD` en IntelliJ sin publicarla en archivos o capturas.
