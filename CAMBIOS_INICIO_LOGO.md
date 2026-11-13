# Mejoras de Inicio, logo y favicon — Veterinaria Huellitas

Se conserva íntegro el proyecto Java Spring Boot que venía en el ZIP más reciente; esta entrega añade cambios visuales y traducciones al Inicio.

## Archivos nuevos
- `src/main/resources/static/inicio-modern.css` — diseño moderno de Inicio, responsive.
- `src/main/resources/static/HuellitasLogo.svg` — logo vectorial original: huella y cruz veterinaria.
- `src/main/resources/static/favicon.ico` — favicon clásico.
- `src/main/resources/static/apple-touch-icon.png` — icono de pantalla de inicio.

## Archivos modificados
- `src/main/resources/templates/index.html` — portada moderna, servicios destacados, proceso, beneficios, reseñas ilustrativas y llamado a contactar.
- `src/main/resources/static/Huellitas.png` y `HuellitasIcono.ico` — logo e icono renovados.
- `src/main/resources/static/estilos.css` — ajuste visual de la marca en las páginas públicas.
- `src/main/resources/static/js/script.js` — traducciones español/inglés de los nuevos textos del Inicio.
- Plantillas HTML — nuevo icono mostrado en la navegación; caché renovada con `?v=20261113b`.

## Importante
- No se modifican los controladores, los repositorios, las entidades, las reglas de Spring Security ni la estructura de MySQL.
- Los precios de la página son de **ejemplo académico**; la página los indica como tales.
- Las opiniones del Inicio son **testimonios ficticios** ilustrativos, señalados expresamente; sustituir por reseñas autorizadas y reales antes de publicar.
- El formulario Registro y Citas mantienen las restricciones de seguridad actuales y el envío al backend.
- En IntelliJ, abrir esta carpeta (contiene `pom.xml`) y configurar `DB_PASSWORD` en Environment variables. **Nunca introducir la contraseña en `application.properties` ni subirla a GitHub.**

## Comprobación
1. Abrir la carpeta del proyecto en IntelliJ IDEA.
2. `Run > Edit Configurations`: seleccionar `VeterinariaHuellitasApplication`, revisar variable `DB_PASSWORD`.
3. Ejecutar la clase principal Java y comprobar que conecta a MySQL.
4. Abrir `http://localhost:8080` y probar Inicio / Servicios / Registro / Citas / Contacto / Login / Panel.
5. En Chrome/Firefox presionar Ctrl+F5 si se muestra el logo antiguo.
