// Resumen visual de la cita. No envía datos ni modifica la lógica de MySQL.
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formCita");
    if (!formulario) return; // Los visitantes sin permiso no reciben el formulario.
    const porId = id => document.getElementById(id);
    const textoSeleccionado = id => {
        const select = porId(id);
        return select?.value ? select.selectedOptions[0]?.textContent.trim() : "";
    };
    const idioma = () => document.documentElement.lang === "en" ? "en" : "es";
    const vacio = () => idioma() === "en" ? "Not selected" : "Sin seleccionar";
    function actualizar() {
        const mostrar = (destino, valor) => { if (porId(destino)) porId(destino).textContent = valor || vacio(); };
        mostrar("resumen-cedula", porId("cedulaCita")?.value.trim());
        mostrar("resumen-mascota", textoSeleccionado("mascotaCita"));
        mostrar("resumen-servicio", textoSeleccionado("servicioCita"));
        mostrar("resumen-veterinario", textoSeleccionado("veterinarioCita"));
        const fecha = porId("fechaCita")?.value;
        mostrar("resumen-fecha", fecha ? new Intl.DateTimeFormat(idioma() === "en" ? "en-US" : "es-CR", {day:"numeric",month:"short",year:"numeric"}).format(new Date(fecha + "T12:00:00")) : "");
        mostrar("resumen-hora", porId("horaCita")?.value);
        const duracion = porId("duracionCita")?.value;
        mostrar("resumen-duracion", duracion ? duracion + " min" : "");
    }
    formulario.addEventListener("input", actualizar);
    formulario.addEventListener("change", actualizar);
    formulario.addEventListener("reset", () => setTimeout(actualizar, 0));
    // Los selectores se completan al consultar la API: reflejar sus cambios sin tocar sus opciones.
    for (const id of ["mascotaCita", "servicioCita", "veterinarioCita"]) {
        const selector = porId(id);
        if (selector) new MutationObserver(actualizar).observe(selector, {childList: true});
    }
    porId("selectorIdioma")?.addEventListener("change", () => setTimeout(actualizar, 0));
    actualizar();
});
