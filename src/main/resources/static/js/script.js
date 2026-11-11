document.addEventListener("DOMContentLoaded", () => {

    const traducciones = {

        es: {

            // Barra superior y marca
            topTelefono: " 8888-8888",
            topHorario: " Lun–Sáb · 8:00 a. m. – 6:00 p. m.",
            topUbicacion: " Pérez Zeledón, Costa Rica",
            marcaNombre: "Veterinaria Huellitas",
            marcaSubtitulo: "Salud y bienestar animal",

            // Menú
            menuInicio: "Inicio",
            menuServicios: "Servicios",
            menuRegistro: "Registrar mascota",
            menuCitas: "Agendar cita",
            menuContacto: "Contacto",

            // Footer
            footerTitulo: "🐾 Veterinaria Huellitas",
            footerDescripcion:
                "Cuidamos a tu mascota con atención cercana, prevención y bienestar.",
            footerExplorar: "Explorar",
            footerContacto: "Contacto",
            footerTelefono: " 8888-8888",
            footerCorreo: " veterinaria@huellitas.com",
            footerUbicacion: " Pérez Zeledón, Costa Rica",
            footerCopy: "© 2026 Clínica Veterinaria Huellitas",
            footerCreditos: "Diseño y desarrollo web por Joseph Navarro",

            // Inicio - hero
            heroEtiqueta: "Cuidado veterinario con corazón",
            heroTitulo1: "Cuidamos a quienes",
            heroTitulo2: "más quieres",
            heroTexto:
                "Atención preventiva, consultas, vacunación y bienestar para acompañar a tu mascota en cada etapa.",
            heroCita: "Solicitar cita",
            heroServicios: "Ver servicios",
            heroImagenAlt: "Fachada de Veterinaria Huellitas",

            // Confianza
            confServiciosNumero: "6+",
            confServicios: "Servicios principales",
            confAtencionTitulo: "Atención",
            confAtencionTexto: "Personalizada",
            confBienestarTitulo: "Bienestar",
            confBienestarTexto: "Como prioridad",

            // Inicio servicios
            inicioMiniServicios: "Lo que hacemos",
            inicioTituloServicios: "Servicios para cada etapa de tu mascota",
            inicioTextoServicios:
                "Desde una revisión preventiva hasta cuidados de higiene y atención urgente.",
            inicioTodosServicios: "Conocer todos los servicios",

            // Servicios comunes
            servicioConsultaTitulo: "Consulta veterinaria",
            servicioConsultaResumen:
                "Valoración general y recomendaciones de cuidado.",
            servicioConsultaCorto: "Revisión general de tu mascota.",
            servicioConsultaAlt: "Consulta veterinaria",

            servicioVacunacionTitulo: "Vacunación",
            servicioVacunacionResumen:
                "Control del esquema de vacunas y refuerzos.",
            servicioVacunacionCorto:
                "Aplicación y control de vacunas.",
            servicioVacunacionAlt:
                "Vacunación de mascota",

            servicioBanoTitulo: "Baño y cuidado",
            servicioBanoResumen:
                "Higiene y bienestar para perros y gatos.",
            servicioBanoCorto:
                "Higiene para perros y gatos.",
            servicioBanoAlt:
                "Baño y cuidado de mascota",

            servicioPeluqueriaTitulo: "Peluquería",
            servicioPeluqueriaCorto:
                "Corte y cuidado estético.",
            servicioPeluqueriaAlt:
                "Peluquería para mascotas",

            servicioDentalTitulo: "Limpieza dental",
            servicioDentalCorto:
                "Cuidado de dientes y encías.",
            servicioDentalAlt:
                "Cuidado dental veterinario",

            servicioEmergenciasTitulo: "Emergencias",
            servicioEmergenciasCorto:
                "Atención para situaciones urgentes.",
            servicioEmergenciasAlt:
                "Atención veterinaria de emergencia",

            // Por qué elegirnos
            porqueMini: "¿Por qué Huellitas?",
            porqueTitulo: "Un espacio pensado para ellos",

            beneficioTratoTitulo: "Trato cercano",
            beneficioTratoTexto:
                "Escuchamos tus dudas y cuidamos a tu mascota con paciencia.",

            beneficioPrevencionTitulo: "Prevención primero",
            beneficioPrevencionTexto:
                "Promovemos revisiones y cuidados para prevenir problemas.",

            beneficioSeguimientoTitulo: "Seguimiento",
            beneficioSeguimientoTexto:
                "El registro de tu mascota ayuda a mantener su información organizada.",

            beneficioContactoTitulo: "Contacto sencillo",
            beneficioContactoTexto:
                "Puedes escribirnos por WhatsApp o mediante nuestro formulario.",

            // Testimonios
            testimonio1:
                "“Excelente atención. Revisaron a mi perro con mucha paciencia y me explicaron claramente todos los cuidados que debía seguir.”",

            testimonioAutor1:
                "— María R. · Dueña de Max",

            testimonio2:
                "“Llevé a mi gata para su vacunación y el trato fue excelente. El personal fue muy amable y cuidadoso con ella.”",

            testimonioAutor2:
                "— Carlos M. · Dueño de Luna",

            testimonio3:
                "“Me gustó mucho el servicio de baño y cuidado. Mi mascota quedó muy limpia y se nota que trabajan con cariño y dedicación.”",

            testimonioAutor3:
                "— Andrea S. · Dueña de Toby",

            testimonio4:
                "“La página me permitió encontrar rápidamente la información que necesitaba y contactar con la veterinaria sin complicaciones.”",

            testimonioAutor4:
                "— Daniel V. · Dueño de Rocky",

            // CTA
            ctaMini: "Estamos para ayudarte",
            ctaTitulo: "¿Tu mascota necesita atención?",
            ctaTexto:
                "Cuéntanos qué necesitas y te orientamos.",
            ctaBoton: "Contactarnos",

            // Servicios page
            serviciosMini: "Cuidado integral",
            serviciosTitulo: "Nuestros servicios",
            serviciosIntro:
                "Selecciona una tarjeta para ver la imagen y una explicación más completa del servicio.",
            verDetalles: "Ver detalles",
            modalInfoServicio: "Información del servicio",
            modalSolicitarCita: "Solicitar cita",

            // Registro
            registroMini: "REGISTRO DE MASCOTAS",
            registroTitulo: "Registra a tu mascota",
            registroIntro:
                "Completa los datos del responsable y de tu mascota para crear su registro en Clínica Veterinaria Huellitas.",
            registroResponsable: "Datos del responsable",
            registroMascota: "Datos de la mascota",

            labelDueno: "Nombre del dueño",
            labelCedula: "Cédula",
            labelTelefono: "Teléfono",
            labelCorreo: "Correo electrónico",
            labelMascota: "Nombre de la mascota",
            labelTipo: "Tipo de mascota",
            labelRaza: "Raza",
            labelEdad: "Edad",
            labelObservaciones: "Observaciones",
            labelNombre: "Nombre",

            phDueno: "Digite el nombre",
            phCedula: "Digite la cédula",
            phCorreo: "ejemplo@correo.com",
            phMascota: "Nombre de la mascota",
            phRaza: "Ejemplo: Labrador",
            phEdad: "Edad",
            phObservaciones:
                "Alergias, cuidados especiales u otra información",
            phNombre: "Digite su nombre",
            phMensaje: "Escriba aquí su consulta...",

            opSeleccione: "Seleccione",
            opPerro: "Perro",
            opGato: "Gato",
            opAve: "Ave",
            opOtro: "Otro",

            botonLimpiar: "Limpiar",
            botonRegistrar: "Registrar mascota",
            // Citas
            citasMini: "CITAS",
            citasTitulo: "Agenda una cita para tu mascota",
            citasIntro:
                "Selecciona la mascota, el servicio, la fecha y la hora de atención.",

            citasPropietario: "Datos del propietario",
            citasCedula: "Cédula del propietario",
            citasBuscar: "Buscar mascotas",

            citasDatos: "Datos de la cita",
            citasMascota: "Mascota",
            citasServicio: "Servicio",
            citasFecha: "Fecha",
            citasHora: "Hora",
            citasObservaciones: "Observaciones",

            citasPrimeroCedula: "Primero busque por cédula",
            citasSeleccioneServicio: "Seleccione un servicio",
            citasPlaceholderCedula: "Digite la cédula",
            citasPlaceholderObservaciones:
                "Indique cualquier detalle importante",

            citasLimpiar: "Limpiar",
            citasAgendar: "Agendar cita",
            // Contacto
            contactoMini: "Hablemos",
            contactoTitulo: "Contacto",
            contactoIntro:
                "Escríbenos, revisa nuestro horario o abre la ubicación directamente en Google Maps.",
            contactoHorarioTitulo: "Horario",
            contactoHorarioTexto:
                "Lunes a sábado · 8:00 a. m. – 6:00 p. m.",
            contactoWhatsapp: "Contactar por WhatsApp",
            contactoVisitanos: "Visítanos",
            contactoUbicacionTitulo: " Nuestra ubicación",
            contactoUbicacionTexto:
                "San Isidro de El General, Pérez Zeledón, Costa Rica.",
            contactoAbrirMaps: "Abrir en Google Maps",
            contactoConsultaMini: "Consulta",
            contactoFormularioTitulo: "Envíanos un mensaje",
            contactoMotivo: "Motivo de la consulta",
            contactoSeleccione: "Seleccione una opción",
            contactoMensaje: "Mensaje",
            contactoEnviar: "Enviar consulta",

            // Mensajes de formulario
            msgContacto:
                "✓ Consulta preparada correctamente. En la siguiente etapa podemos conectarla a una base de datos o enviarla por WhatsApp.",
            msgRegistro:
                "✓ Mascota registrada de forma demostrativa. El siguiente paso será guardar estos datos en SQL."

        },

        en: {

            // Top bar and brand
            topTelefono: " 8888-8888",
            topHorario: " Mon–Sat · 8:00 a.m. – 6:00 p.m.",
            topUbicacion: " Pérez Zeledón, Costa Rica",
            marcaNombre: "Huellitas Veterinary Clinic",
            marcaSubtitulo: "Animal health and wellness",

            // Menu
            menuInicio: "Home",
            menuServicios: "Services",
            menuRegistro: "Register pet",
            menuCitas: "Book appointment",
            menuContacto: "Contact",
            // Footer
            footerTitulo: "🐾 Huellitas Veterinary Clinic",
            footerDescripcion:
                "We care for your pet with personal attention, prevention and wellness.",
            footerExplorar: "Explore",
            footerContacto: "Contact",
            footerTelefono: " 8888-8888",
            footerCorreo: " veterinaria@huellitas.com",
            footerUbicacion: " Pérez Zeledón, Costa Rica",
            footerCopy: "© 2026 Huellitas Veterinary Clinic",
            footerCreditos: "Web design and development by Joseph Navarro",

            // Home hero
            heroEtiqueta: "Veterinary care with heart",
            heroTitulo1: "We care for those",
            heroTitulo2: "you love most",
            heroTexto:
                "Preventive care, consultations, vaccinations and wellness to support your pet at every stage.",
            heroCita: "Book an appointment",
            heroServicios: "View services",
            heroImagenAlt: "Huellitas Veterinary Clinic exterior",

            // Trust strip
            confServiciosNumero: "6+",
            confServicios: "Main services",
            confAtencionTitulo: "Care",
            confAtencionTexto: "Personalized",
            confBienestarTitulo: "Wellness",
            confBienestarTexto: "Our priority",

            // Home services
            inicioMiniServicios: "What we do",
            inicioTituloServicios:
                "Services for every stage of your pet's life",
            inicioTextoServicios:
                "From preventive checkups to grooming and urgent care.",
            inicioTodosServicios: "See all services",

            // Services common
            servicioConsultaTitulo: "Veterinary consultation",
            servicioConsultaResumen:
                "General evaluation and care recommendations.",
            servicioConsultaCorto:
                "A general checkup for your pet.",
            servicioConsultaAlt:
                "Veterinary consultation",

            servicioVacunacionTitulo: "Vaccination",
            servicioVacunacionResumen:
                "Vaccination schedule and booster management.",
            servicioVacunacionCorto:
                "Vaccinations and follow-up.",
            servicioVacunacionAlt:
                "Pet vaccination",

            servicioBanoTitulo: "Bathing and care",
            servicioBanoResumen:
                "Hygiene and wellness for dogs and cats.",
            servicioBanoCorto:
                "Hygiene for dogs and cats.",
            servicioBanoAlt:
                "Pet bathing and care",

            servicioPeluqueriaTitulo: "Grooming",
            servicioPeluqueriaCorto:
                "Haircuts and aesthetic care.",
            servicioPeluqueriaAlt:
                "Pet grooming",

            servicioDentalTitulo: "Dental cleaning",
            servicioDentalCorto:
                "Teeth and gum care.",
            servicioDentalAlt:
                "Veterinary dental care",

            servicioEmergenciasTitulo: "Emergency care",
            servicioEmergenciasCorto:
                "Care for urgent situations.",
            servicioEmergenciasAlt:
                "Veterinary emergency care",

            // Why choose us
            porqueMini: "Why Huellitas?",
            porqueTitulo: "A space designed for them",

            beneficioTratoTitulo: "Personal care",
            beneficioTratoTexto:
                "We listen to your concerns and care for your pet with patience.",

            beneficioPrevencionTitulo: "Prevention first",
            beneficioPrevencionTexto:
                "We encourage checkups and care to help prevent problems.",

            beneficioSeguimientoTitulo: "Follow-up",
            beneficioSeguimientoTexto:
                "Your pet's registration helps keep important information organized.",

            beneficioContactoTitulo: "Easy contact",
            beneficioContactoTexto:
                "You can message us on WhatsApp or use our contact form.",

            // Testimonials
            testimonio1:
                "“Excellent service. They examined my dog very patiently and clearly explained all the care I needed to follow.”",

            testimonioAutor1:
                "— María R. · Max's owner",

            testimonio2:
                "“I took my cat in for her vaccination and the service was excellent. The staff was very friendly and careful with her.”",

            testimonioAutor2:
                "— Carlos M. · Luna's owner",

            testimonio3:
                "“I really liked the grooming and care service. My pet came out very clean, and you can tell they work with care and dedication.”",

            testimonioAutor3:
                "— Andrea S. · Toby's owner",

            testimonio4:
                "“The website helped me quickly find the information I needed and contact the veterinary clinic without any complications.”",

            testimonioAutor4:
                "— Daniel V. · Rocky's owner",

            // CTA
            ctaMini: "We're here to help",
            ctaTitulo: "Does your pet need care?",
            ctaTexto:
                "Tell us what you need and we'll guide you.",
            ctaBoton: "Contact us",

            // Services page
            serviciosMini: "Complete care",
            serviciosTitulo: "Our services",
            serviciosIntro:
                "Select a card to view an image and more information about the service.",
            verDetalles: "View details",
            modalInfoServicio: "Service information",
            modalSolicitarCita: "Book an appointment",

            // Registration
            registroMini: "PET REGISTRATION",
            registroTitulo: "Register your pet",
            registroIntro:
                "Complete the owner's and pet's information to create their record at Huellitas Veterinary Clinic.",
            registroResponsable: "Owner information",
            registroMascota: "Pet information",

            labelDueno: "Owner's name",
            labelCedula: "ID number",
            labelTelefono: "Phone",
            labelCorreo: "Email address",
            labelMascota: "Pet's name",
            labelTipo: "Pet type",
            labelRaza: "Breed",
            labelEdad: "Age",
            labelObservaciones: "Notes",
            labelNombre: "Name",

            phDueno: "Enter the owner's name",
            phCedula: "Enter the ID number",
            phCorreo: "example@email.com",
            phMascota: "Pet's name",
            phRaza: "Example: Labrador",
            phEdad: "Age",
            phObservaciones:
                "Allergies, special care or other information",
            phNombre: "Enter your name",
            phMensaje: "Write your message here...",

            opSeleccione: "Select",
            opPerro: "Dog",
            opGato: "Cat",
            opAve: "Bird",
            opOtro: "Other",

            botonLimpiar: "Clear",
            botonRegistrar: "Register pet",
            // Appointments
            citasMini: "APPOINTMENTS",
            citasTitulo: "Book an appointment for your pet",
            citasIntro:
                "Select your pet, the service, date and appointment time.",

            citasPropietario: "Owner information",
            citasCedula: "Owner ID number",
            citasBuscar: "Search pets",

            citasDatos: "Appointment details",
            citasMascota: "Pet",
            citasServicio: "Service",
            citasFecha: "Date",
            citasHora: "Time",
            citasObservaciones: "Notes",

            citasPrimeroCedula: "Search by ID first",
            citasSeleccioneServicio: "Select a service",
            citasPlaceholderCedula: "Enter the ID number",
            citasPlaceholderObservaciones:
                "Enter any important details",

            citasLimpiar: "Clear",
            citasAgendar: "Book appointment",
            // Contact
            contactoMini: "Let's talk",
            contactoTitulo: "Contact",
            contactoIntro:
                "Message us, check our hours or open our location directly in Google Maps.",
            contactoHorarioTitulo: "Hours",
            contactoHorarioTexto:
                "Monday to Saturday · 8:00 a.m. – 6:00 p.m.",
            contactoWhatsapp: "Contact us on WhatsApp",
            contactoVisitanos: "Visit us",
            contactoUbicacionTitulo: "Our location",
            contactoUbicacionTexto:
                "San Isidro de El General, Pérez Zeledón, Costa Rica.",
            contactoAbrirMaps: "Open in Google Maps",
            contactoConsultaMini: "Inquiry",
            contactoFormularioTitulo: "Send us a message",
            contactoMotivo: "Reason for your inquiry",
            contactoSeleccione: "Select an option",
            contactoMensaje: "Message",
            contactoEnviar: "Send inquiry",

            // Form messages
            msgContacto:
                "✓ Your inquiry was prepared successfully. In the next stage we can connect it to a database or send it through WhatsApp.",
            msgRegistro:
                "✓ Pet registration completed as a demonstration. The next step will be saving this information in SQL."

        }

    };


    const serviciosModal = {

        es: {

            consulta: {
                titulo: "Consulta veterinaria",
                texto:
                    "Incluye valoración general, revisión de peso, piel, ojos, oídos y recomendaciones de cuidado según las necesidades de la mascota."
            },

            vacunacion: {
                titulo: "Vacunación",
                texto:
                    "Aplicamos vacunas básicas y de refuerzo para perros y gatos. También llevamos el control del esquema de vacunación de cada mascota."
            },

            bano: {
                titulo: "Baño y cuidado",
                texto:
                    "Servicio de baño, limpieza, cepillado y cuidado básico para mantener a tu mascota limpia y saludable."
            },

            peluqueria: {
                titulo: "Peluquería",
                texto:
                    "Ofrecemos corte de pelo, cepillado y cuidado estético adaptado al tipo de pelaje y necesidades de cada mascota."
            },

            dental: {
                titulo: "Limpieza dental",
                texto:
                    "Revisión y cuidado de la salud dental para ayudar a prevenir acumulación de sarro, mal aliento y otros problemas bucales."
            },

            emergencias: {
                titulo: "Emergencias",
                texto:
                    "Atención veterinaria para situaciones que requieren valoración rápida, como heridas, accidentes o síntomas repentinos."
            }

        },

        en: {

            consulta: {
                titulo: "Veterinary consultation",
                texto:
                    "Includes a general evaluation, weight check, skin, eyes and ears review, plus care recommendations based on your pet's needs."
            },

            vacunacion: {
                titulo: "Vaccination",
                texto:
                    "We provide core and booster vaccines for dogs and cats and help keep track of each pet's vaccination schedule."
            },

            bano: {
                titulo: "Bathing and care",
                texto:
                    "Bathing, cleaning, brushing and basic care to help keep your pet clean, comfortable and healthy."
            },

            peluqueria: {
                titulo: "Grooming",
                texto:
                    "Haircuts, brushing and grooming adapted to your pet's coat type and individual needs."
            },

            dental: {
                titulo: "Dental cleaning",
                texto:
                    "Dental health review and care to help prevent tartar buildup, bad breath and other oral health problems."
            },

            emergencias: {
                titulo: "Emergency care",
                texto:
                    "Veterinary attention for situations that require a quick evaluation, including injuries, accidents or sudden symptoms."
            }

        }

    };


    let idiomaActual = "es";


    function traducirPagina(idioma) {

        if (!traducciones[idioma]) {
            idioma = "es";
        }

        idiomaActual = idioma;

        document.documentElement.lang =
            idioma;

        document.querySelectorAll("[data-i18n]")
            .forEach(elemento => {

                const clave =
                    elemento.dataset.i18n;

                if (
                    traducciones[idioma][clave] !== undefined
                ) {

                    elemento.textContent =
                        traducciones[idioma][clave];

                }

            });


        document.querySelectorAll(
            "[data-i18n-placeholder]"
        ).forEach(elemento => {

            const clave =
                elemento.dataset.i18nPlaceholder;

            if (
                traducciones[idioma][clave] !== undefined
            ) {

                elemento.placeholder =
                    traducciones[idioma][clave];

            }

        });


        document.querySelectorAll(
            "[data-i18n-alt]"
        ).forEach(elemento => {

            const clave =
                elemento.dataset.i18nAlt;

            if (
                traducciones[idioma][clave] !== undefined
            ) {

                elemento.alt =
                    traducciones[idioma][clave];

            }

        });


        const selector =
            document.getElementById(
                "selectorIdioma"
            );

        if (selector) {
            selector.value = idioma;
        }
        localStorage.setItem(
            "idioma",
            idioma
        );

    }


    function obtenerIdiomaInicial() {

        const guardado =
            localStorage.getItem("idioma");

        if (
            guardado === "es" ||
            guardado === "en"
        ) {

            return guardado;

        }


        const navegador =
            (
                navigator.language ||
                navigator.userLanguage ||
                "es"
            ).toLowerCase();


        return navegador.startsWith("en")
            ? "en"
            : "es";

    }


    traducirPagina(
        obtenerIdiomaInicial()
    );


    const selectorIdioma =
        document.getElementById(
            "selectorIdioma"
        );

    if (selectorIdioma) {

        selectorIdioma.addEventListener(
            "change",
            () => {

                traducirPagina(
                    selectorIdioma.value
                );

            }
        );

    }


    const actual =
        window.location.pathname
            .split("/")
            .pop() || "/";


    document.querySelectorAll(
        ".menu-principal a"
    ).forEach(enlace => {

        if (
            enlace.getAttribute("href") === actual
        ) {

            enlace.classList.add(
                "activo"
            );

        }

    });


    const menuBtn =
        document.querySelector(".menu-btn");

    const menu =
        document.querySelector(
            ".menu-principal"
        );


    if (menuBtn && menu) {

        menuBtn.addEventListener(
            "click",
            () => {

                const abierto =
                    menu.classList.toggle(
                        "abierto"
                    );

                menuBtn.setAttribute(
                    "aria-expanded",
                    abierto
                        ? "true"
                        : "false"
                );

                menuBtn.textContent =
                    abierto
                        ? "✕"
                        : "☰";

            }
        );


        menu.querySelectorAll("a")
            .forEach(enlace => {

                enlace.addEventListener(
                    "click",
                    () => {

                        menu.classList.remove(
                            "abierto"
                        );

                        menuBtn.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                        menuBtn.textContent =
                            "☰";

                    }
                );

            });

    }



    const elementos =
        document.querySelectorAll(
            ".revelar"
        );


    if (
        "IntersectionObserver" in window
    ) {

        const observador =
            new IntersectionObserver(
                entradas => {

                    entradas.forEach(
                        entrada => {

                            if (
                                entrada.isIntersecting
                            ) {

                                entrada.target
                                    .classList
                                    .add("visible");

                                observador
                                    .unobserve(
                                        entrada.target
                                    );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        elementos.forEach(
            elemento => {

                observador.observe(
                    elemento
                );

            }
        );

    } else {

        elementos.forEach(
            elemento => {

                elemento.classList.add(
                    "visible"
                );

            }
        );

    }



    const arriba =
        document.querySelector(".arriba");


    if (arriba) {

        window.addEventListener(
            "scroll",
            () => {

                arriba.style.display =
                    window.scrollY > 450
                        ? "grid"
                        : "none";

            }
        );


        arriba.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    const modal =
        document.getElementById(
            "modalServicio"
        );


    if (modal) {

        const titulo =
            document.getElementById(
                "modalTitulo"
            );

        const texto =
            document.getElementById(
                "modalTexto"
            );

        const imagen =
            document.getElementById(
                "modalImagen"
            );

        const icono =
            document.getElementById(
                "modalIcono"
            );

        const cerrar =
            document.getElementById(
                "cerrarModal"
            );


        const cerrarModal = () => {

            modal.classList.remove(
                "mostrar"
            );

            modal.setAttribute(
                "aria-hidden",
                "true"
            );

            document.body.classList.remove(
                "sin-scroll"
            );

        };


        const abrirModal =
            tarjeta => {

                const servicio =
                    tarjeta.dataset.servicio;

                const datos =
                    serviciosModal[
                        idiomaActual
                        ][servicio];

                const imagenServicio =
                    tarjeta.dataset.imagen;

                const iconoServicio =
                    tarjeta.dataset.icono;


                if (datos) {

                    titulo.textContent =
                        datos.titulo;

                    texto.textContent =
                        datos.texto;

                }


                if (
                    imagen &&
                    imagenServicio
                ) {

                    imagen.src =
                        imagenServicio;

                    imagen.alt =
                        datos
                            ? datos.titulo
                            : "";

                    imagen.style.display =
                        "block";

                }

                if (
                    icono &&
                    iconoServicio
                ) {

                    icono.src =
                        iconoServicio;

                    icono.alt =
                        datos
                            ? datos.titulo
                            : "";

                    icono.style.display =
                        "block";

                } else if (icono) {

                    icono.style.display =
                        "none";

                }


                modal.classList.add(
                    "mostrar"
                );

                modal.setAttribute(
                    "aria-hidden",
                    "false"
                );

                document.body.classList.add(
                    "sin-scroll"
                );

            };


        document.querySelectorAll(
            ".servicio-click"
        ).forEach(tarjeta => {

            tarjeta.addEventListener(
                "click",
                () => {
                    abrirModal(tarjeta);
                }
            );


            tarjeta.addEventListener(
                "keydown",
                evento => {

                    if (
                        evento.key === "Enter" ||
                        evento.key === " "
                    ) {

                        evento.preventDefault();

                        abrirModal(tarjeta);

                    }

                }
            );

        });


        if (cerrar) {

            cerrar.addEventListener(
                "click",
                cerrarModal
            );

        }


        modal.addEventListener(
            "click",
            evento => {

                if (
                    evento.target === modal
                ) {

                    cerrarModal();

                }

            }
        );


        document.addEventListener(
            "keydown",
            evento => {

                if (
                    evento.key === "Escape" &&
                    modal.classList.contains(
                        "mostrar"
                    )
                ) {

                    cerrarModal();

                }

            }
        );

    }


    const formularioRegistro =
        document.getElementById("formRegistro");


    if (formularioRegistro) {

        formularioRegistro.addEventListener(
            "submit",
            async evento => {

                evento.preventDefault();

                const boton =
                    formularioRegistro.querySelector(
                        'button[type="submit"]'
                    );

                let aviso =
                    formularioRegistro.querySelector(
                        ".mensaje-formulario"
                    );

                if (!aviso) {

                    aviso =
                        document.createElement("p");

                    aviso.className =
                        "mensaje-formulario";

                    formularioRegistro.appendChild(
                        aviso
                    );

                }


                const datos = {
                    propietario: {
                        nombre: formularioRegistro.elements["dueno"].value.trim(),
                        cedula: formularioRegistro.elements["cedula"].value.trim(),
                        telefono: formularioRegistro.elements["telefono"].value.trim(),
                        correo: formularioRegistro.elements["correo"].value.trim()
                    },
                    mascota: {
                        nombre: formularioRegistro.elements["mascota"].value.trim(),
                        tipo: formularioRegistro.elements["tipo"].value,
                        raza: formularioRegistro.elements["raza"].value.trim(),
                        edad: formularioRegistro.elements["edad"].value
                            ? Number(formularioRegistro.elements["edad"].value)
                            : null,
                        observaciones: formularioRegistro.elements["observaciones"].value.trim()
                    }
                };


                try {

                    if (boton) {
                        boton.disabled = true;
                    }

                    aviso.textContent =
                        idiomaActual === "en"
                            ? "Saving..."
                            : "Guardando...";


                    const respuesta =
                        await fetch("/api/registrar", {

                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body:
                                JSON.stringify(datos)

                        });


                    const resultado =
                        await respuesta.json();


                    if (!respuesta.ok) {

                        throw new Error(
                            resultado.mensaje ||
                            "Error"
                        );

                    }


                    aviso.textContent =
                        idiomaActual === "en"
                            ? "✓ Registration completed! Your pet was successfully registered at Huellitas Veterinary Clinic."
                            : "✓ ¡Registro completado! Tu mascota fue registrada correctamente en Clínica Veterinaria Huellitas.";


                    formularioRegistro.reset();

                } catch (error) {

                    console.error(error);

                    aviso.textContent =
                        idiomaActual === "en"
                            ? "✗ The information could not be saved."
                            : "✗ No se pudo guardar la información.";

                } finally {

                    if (boton) {
                        boton.disabled = false;
                    }

                }

            }
        );

    }


    const formularioContacto =
        document.getElementById("formContacto");


    if (formularioContacto) {

        formularioContacto.addEventListener(
            "submit",
            async evento => {

                evento.preventDefault();

                const boton =
                    formularioContacto.querySelector(
                        'button[type="submit"]'
                    );

                let aviso =
                    formularioContacto.querySelector(
                        ".mensaje-formulario"
                    );

                if (!aviso) {

                    aviso =
                        document.createElement("p");

                    aviso.className =
                        "mensaje-formulario";

                    formularioContacto.appendChild(
                        aviso
                    );

                }


                const datos = {

                    nombre:
                        formularioContacto.nombre.value.trim(),

                    correo:
                        formularioContacto.correo.value.trim(),

                    telefono:
                        formularioContacto.telefono.value.trim(),

                    motivo:
                    formularioContacto.motivo.value,

                    mensaje:
                        formularioContacto.mensaje.value.trim()

                };


                try {

                    if (boton) {
                        boton.disabled = true;
                    }

                    aviso.textContent =
                        idiomaActual === "en"
                            ? "Sending..."
                            : "Enviando...";


                    const respuesta =
                        await fetch("/api/contacto", {

                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body:
                                JSON.stringify(datos)

                        });


                    const resultado =
                        await respuesta.json();


                    if (!respuesta.ok) {

                        throw new Error(
                            resultado.mensaje ||
                            "Error"
                        );

                    }


                    aviso.textContent =
                        idiomaActual === "en"
                            ? "✓  Message sent successfully! We will contact you soon."
                            : "✓ ¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.";


                    formularioContacto.reset();

                } catch (error) {

                    console.error(error);

                    aviso.textContent =
                        idiomaActual === "en"
                            ? "✗ The inquiry could not be saved."
                            : "✗ No se pudo guardar la consulta.";

                } finally {

                    if (boton) {
                        boton.disabled = false;
                    }

                }

            }
        );

    }


    const btnBuscarMascotas =
        document.getElementById(
            "btnBuscarMascotas"
        );

    const cedulaCita =
        document.getElementById(
            "cedulaCita"
        );

    const mascotaCita =
        document.getElementById(
            "mascotaCita"
        );

    const servicioCita =
        document.getElementById(
            "servicioCita"
        );

    const formularioCita =
        document.getElementById(
            "formCita"
        );



    async function cargarServicios() {

        if (!servicioCita) {
            return;
        }

        try {

            const respuesta =
                await fetch(
                    "/api/servicios"
                );

            const resultado =
                await respuesta.json();


            servicioCita.innerHTML =
                idiomaActual === "en"
                    ? '<option value="">Select a service</option>'
                    : '<option value="">Seleccione un servicio</option>';


            if (
                resultado.ok &&
                resultado.servicios
            ) {

                resultado.servicios
                    .forEach(servicio => {

                        const opcion =
                            document.createElement(
                                "option"
                            );

                        opcion.value =
                            servicio.id_servicio;

                        const nombresServicios = {
                            "Consulta veterinaria": "Veterinary consultation",
                            "Vacunación": "Vaccination",
                            "Baño y cuidado": "Bathing and care",
                            "Peluquería": "Grooming",
                            "Limpieza dental": "Dental cleaning",
                            "Emergencias": "Emergency care"
                        };

                        opcion.textContent =
                            idiomaActual === "en"
                                ? (nombresServicios[servicio.nombre] || servicio.nombre)
                                : servicio.nombre;

                        servicioCita.appendChild(
                            opcion
                        );

                    });

            }

        } catch (error) {

            console.error(
                "Error cargando servicios:",
                error
            );

        }

    }


    if (servicioCita) {

        cargarServicios();

    }


    if (selectorIdioma) {

        selectorIdioma.addEventListener(
            "change",
            () => {

                if (
                    mascotaCita &&
                    !mascotaCita.value
                ) {

                    mascotaCita.innerHTML =
                        idiomaActual === "en"
                            ? '<option value="">Search by ID first</option>'
                            : '<option value="">Primero busque por cédula</option>';

                }

                if (servicioCita) {

                    cargarServicios();

                }

            }
        );

    }


    if (
        btnBuscarMascotas &&
        cedulaCita &&
        mascotaCita
    ) {

        btnBuscarMascotas.addEventListener(
            "click",
            async () => {

                const cedula =
                    cedulaCita.value.trim();


                if (!cedula) {

                    alert(
                        idiomaActual === "en"
                            ? "Enter the owner's ID number."
                            : "Digite la cédula del propietario."
                    );

                    return;

                }


                mascotaCita.innerHTML =
                    idiomaActual === "en"
                        ? '<option value="">Searching...</option>'
                        : '<option value="">Buscando...</option>';


                try {

                    const respuesta =
                        await fetch(
                            "/api/mascotas/" +
                            encodeURIComponent(
                                cedula
                            )
                        );


                    const resultado =
                        await respuesta.json();


                    mascotaCita.innerHTML = "";


                    if (
                        resultado.ok &&
                        resultado.mascotas.length > 0
                    ) {

                        const inicial =
                            document.createElement(
                                "option"
                            );

                        inicial.value = "";

                        inicial.textContent =
                            idiomaActual === "en"
                                ? "Select your pet"
                                : "Seleccione su mascota";

                        mascotaCita.appendChild(
                            inicial
                        );


                        resultado.mascotas
                            .forEach(mascota => {

                                const opcion =
                                    document.createElement(
                                        "option"
                                    );

                                opcion.value =
                                    mascota.id_mascota;

                                opcion.textContent =
                                    mascota.nombre +
                                    " - " +
                                    mascota.tipo;

                                mascotaCita.appendChild(
                                    opcion
                                );

                            });

                    } else {

                        mascotaCita.innerHTML =
                            idiomaActual === "en"
                                ? '<option value="">No pets found</option>'
                                : '<option value="">No se encontraron mascotas</option>';

                    }

                } catch (error) {

                    console.error(error);

                    mascotaCita.innerHTML =
                        idiomaActual === "en"
                            ? '<option value="">Search error</option>'
                            : '<option value="">Error en la búsqueda</option>';

                }

            }
        );

    }


    if (formularioCita) {

        formularioCita.addEventListener(
            "submit",
            async evento => {

                evento.preventDefault();


                const datos = {

                    id_mascota:
                    mascotaCita.value,

                    id_servicio:
                    servicioCita.value,

                    fecha:
                    document.getElementById(
                        "fechaCita"
                    ).value,

                    hora:
                    document.getElementById(
                        "horaCita"
                    ).value,

                    observaciones:
                        document.getElementById(
                            "observacionesCita"
                        ).value.trim()

                };


                let aviso =
                    formularioCita.querySelector(
                        ".mensaje-formulario"
                    );


                if (!aviso) {

                    aviso =
                        document.createElement(
                            "p"
                        );

                    aviso.className =
                        "mensaje-formulario";

                    formularioCita.appendChild(
                        aviso
                    );

                }


                try {

                    aviso.textContent =
                        idiomaActual === "en"
                            ? "Scheduling appointment..."
                            : "Agendando cita...";


                    const respuesta =
                        await fetch(
                            "/api/citas",
                            {

                                method: "POST",

                                headers: {

                                    "Content-Type":
                                        "application/json"

                                },

                                body:
                                    JSON.stringify(
                                        datos
                                    )

                            }
                        );


                    const resultado =
                        await respuesta.json();


                    if (!respuesta.ok) {

                        throw new Error(
                            resultado.mensaje
                        );

                    }


                    aviso.textContent =
                        idiomaActual === "en"
                            ? "✓ Appointment scheduled successfully! We look forward to seeing you at Huellitas Veterinary Clinic."
                            : "✓ ¡Cita agendada correctamente! Te esperamos en Clínica Veterinaria Huellitas.";


                    formularioCita.reset();


                    mascotaCita.innerHTML =
                        idiomaActual === "en"
                            ? '<option value="">Search by ID first</option>'
                            : '<option value="">Primero busque por cédula</option>';


                    cargarServicios();

                } catch (error) {

                    console.error(error);

                    aviso.textContent =
                        idiomaActual === "en"
                            ? "✗ The appointment could not be scheduled."
                            : "✗ No se pudo agendar la cita.";

                }

            }
        );

    }

});
