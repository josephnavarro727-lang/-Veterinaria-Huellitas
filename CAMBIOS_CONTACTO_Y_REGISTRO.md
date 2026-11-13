# Veterinaria Huellitas — Contacto y avisos del registro

Actualización de interfaz basada en la versión más reciente del proyecto entregada en este chat.

## 1. Diseño

- `contacto.html`: nuevo encabezado verde menta, tarjetas para contacto, mapa, sección de ayuda y formulario más claro.
- `contacto-modern.css`: estilos exclusivos de Contacto para no cambiar Servicios, Registro, Citas ni Panel.
- Estilos adaptables a celulares y pantallas de computadora.
- La imagen del encabezado ya estaba en el proyecto (`mascotas-servicios.png`).
- Se conservaron los nombres de todos los campos del formulario Contacto y su endpoint `/api/contacto`.
- No se modificaron las imágenes ni los enlaces de las otras páginas.

## 2. Registro de mascota — mejora al detectar errores

Se revisó `RegistroApiController.java`. **El código original bloquea intencionalmente la cédula de un propietario existente si intenta agregar otra mascota alguien que no tenga rol Administrador o Recepcionista.** Esto evita modificar datos de terceros. No se modificó esa regla.

- `registro.html`: se reservó un espacio visible al inicio del formulario para los mensajes.
- `script.js`: si el servidor rechaza el registro, muestra la explicación arriba del formulario y desplaza la pantalla al aviso cuando es necesario.
- `script.js`: si Spring Boot está detenido o hay un error del servidor, aparece un mensaje más útil.
- Se conservó el envío a `/api/registrar`, el cuerpo JSON y el token CSRF.
- No se modificaron las tablas ni los controladores Java.

### Qué revisar si vuelve a salir «No se pudo registrar»

1. Con **cédula nueva**, completar nombre de propietario, cédula, nombre de mascota y tipo. Luego presionar Registrar mascota.
2. Si la **cédula ya existe** en MySQL, iniciar sesión con **Administrador o Recepcionista** para agregar otra mascota; desde una sesión sin permisos se rechaza por seguridad.
3. En Firefox presionar **F12 → Red (Network) → Fetch/XHR**. Intentar el registro, elegir la petición `registrar` y revisar **Estado** y **Respuesta**. Ocultar datos personales antes de compartir una captura.
4. Interpretación habitual: `200` guardado; `400` error de validación; `403` posible CSRF/sesión vencida; `409` cédula existente/conflicto; `500` error de servidor o base de datos. Para errores `500`, revisar la consola de IntelliJ.
5. Si aparece error de conexión, confirmar que Spring Boot **sigue ejecutándose** y que MySQL está disponible.
6. **No borres ni recrees** la base de datos para resolver esto sin conocer primero el error.

## 3. Nota sobre Contacto

- El envío a `/api/contacto` **guarda la consulta en MySQL**, no envía un correo electrónico real. La página ahora lo explica.
- El teléfono `8888-8888`, el correo `veterinaria@huellitas.com` y el mapa son datos de ejemplo que deben confirmarse antes de una publicación real.

## 4. Cómo instalar la actualización

**Opción recomendada:** usar `Huellitas_Solo_Cambios_Contacto_Registro.zip`.

1. Hacer una copia de seguridad de la carpeta que ya funciona en IntelliJ.
2. Extraer el ZIP pequeño.
3. Copiar los archivos a la **raíz del proyecto**, la carpeta que contiene `pom.xml`, conservando las rutas `src/main/resources/...`.
4. Autorizar reemplazo de `contacto.html`, `registro.html` y `js/script.js`. Se agrega `contacto-modern.css`.
5. Ejecutar la aplicación, abrir `http://localhost:8080/contacto` y `http://localhost:8080/registro` en Firefox y presionar Ctrl+F5 si el navegador conserva la versión anterior.

La alternativa es descomprimir el ZIP completo en una carpeta nueva y abrir esa carpeta desde IntelliJ.

## 5. Configuración de Spring Boot y MySQL

En `application.properties` está `spring.datasource.password=${DB_PASSWORD}`. No hay contraseña dentro del código. `DB_PASSWORD` debe llegar a Spring desde las variables del entorno de la configuración Run/Debug de IntelliJ, o desde una variable de usuario de Windows.

- **Misma carpeta de proyecto:** IntelliJ normalmente conserva la configuración después de guardar con Apply y OK. No es necesario reconfigurarla en cada ejecución.
- **Nueva carpeta copiada desde ZIP:** IntelliJ puede tratarla como un proyecto nuevo y solicitar crear una configuración Run/Debug y volver a establecer la variable.
- **Opción persistente en Windows:** buscar «Editar las variables de entorno de esta cuenta», crear la variable de usuario `DB_PASSWORD` con la contraseña MySQL y **reiniciar IntelliJ**. No subir contraseñas a GitHub ni marcarlas como archivo de configuración del proyecto.
- Como ya se mostró una contraseña en una captura durante esta conversación, conviene cambiarla en MySQL y actualizar el valor en el entorno.

## 6. Alcance de la verificación

Se comprobaron las rutas de los recursos HTML/CSS, los IDs de los campos, las claves de traducción ES/EN, y la sintaxis de JavaScript. Los cambios **no** se conectaron a la instancia local de MySQL del estudiante; las pruebas reales de inserción deben hacerse en su computadora. El error exacto que apareció durante su intento de registro no se proporcionó en una captura, por lo que la causa individual aún requiere verificar el estado HTTP de `/api/registrar`.
