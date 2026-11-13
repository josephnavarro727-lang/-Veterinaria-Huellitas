document.addEventListener("DOMContentLoaded", () => {
    const fecha = document.getElementById("panel-fecha");
    if (fecha) {
        fecha.textContent = new Intl.DateTimeFormat("es-CR", {
            weekday: "long", day: "numeric", month: "long", year: "numeric"
        }).format(new Date());
        fecha.textContent = fecha.textContent.charAt(0).toUpperCase() + fecha.textContent.slice(1);
    }
});
