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
            menuLogin: "Iniciar sesión", menuPanel: "Mi panel",
            registroAviso: "Si ya estás registrado, contacta con Recepción para agregar otra mascota. Este formulario no modifica registros existentes.",
            citasAcceso: "Las citas se programan con el personal de Recepción. Inicia sesión con una cuenta autorizada o contacta con la clínica.",
            citasVeterinario: "Veterinario", citasSeleccioneVeterinario: "Seleccione un veterinario",
            citasDuracion: "Duración (minutos)", citasMotivo: "Motivo de consulta",

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
            menuLogin: "Sign in", menuPanel: "My dashboard",
            registroAviso: "Already registered? Contact reception to add another pet. This form does not change existing records.",
            citasAcceso: "Reception staff schedule appointments. Sign in with an authorized account or contact the clinic.",
            citasVeterinario: "Veterinarian", citasSeleccioneVeterinario: "Select a veterinarian",
            citasDuracion: "Duration (minutes)", citasMotivo: "Reason for visit",
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


    const actual = window.location.pathname;


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



    // Cada formulario tiene un solo manejador y bloquea envíos mientras espera respuesta.
    const ingles = () => idiomaActual === "en";
    const avisoDe = formulario => {
        let aviso = formulario.querySelector(".mensaje-formulario");
        if (!aviso) {
            aviso = document.createElement("p");
            aviso.className = "mensaje-formulario";
            aviso.setAttribute("role", "status");
            aviso.setAttribute("aria-live", "polite");
            formulario.appendChild(aviso);
        }
        return aviso;
    };
    async function api(url, datos) {
        const opciones = {headers: {"Accept": "application/json"}};
        if (datos !== undefined) {
            opciones.method = "POST";
            opciones.headers["Content-Type"] = "application/json";
            const token = document.querySelector('meta[name="_csrf"]')?.content;
            const cabecera = document.querySelector('meta[name="_csrf_header"]')?.content;
            if (token && cabecera) opciones.headers[cabecera] = token;
            opciones.body = JSON.stringify(datos);
        }
        const respuesta = await fetch(url, opciones);
        const resultado = await respuesta.json().catch(() => ({}));
        if (!respuesta.ok) throw new Error(resultado.mensaje || (ingles()
            ? "Unable to complete the request. Reload the page and try again."
            : "No se pudo completar la solicitud. Recarga la página e inténtalo de nuevo."));
        return resultado;
    }
    function conectarFormulario(formulario, url, construir, exito, despues) {
        if (!formulario || formulario.dataset.conectado) return;
        formulario.dataset.conectado = "true";
        let enviando = false;
        formulario.addEventListener("submit", async evento => {
            evento.preventDefault();
            if (enviando || !formulario.reportValidity()) return;
            enviando = true;
            const boton = formulario.querySelector('button[type="submit"]');
            const aviso = avisoDe(formulario);
            if (boton) boton.disabled = true;
            try {
                aviso.textContent = ingles() ? "Saving..." : "Guardando...";
                await api(url, construir(formulario));
                aviso.textContent = exito();
                formulario.reset();
                if (despues) despues();
            } catch (error) {
                aviso.textContent = error.message;
            } finally {
                enviando = false;
                if (boton) boton.disabled = false;
            }
        });
    }
    conectarFormulario(document.getElementById("formRegistro"), "/api/registrar", f => ({
        propietario: {
            nombre: f.elements.dueno.value.trim(), cedula: f.elements.cedula.value.trim(),
            telefono: f.elements.telefono.value.trim(), correo: f.elements.correo.value.trim()
        },
        mascota: {
            nombre: f.elements.mascota.value.trim(), tipo: f.elements.tipo.value,
            raza: f.elements.raza.value.trim(), edad: f.elements.edad.value ? Number(f.elements.edad.value) : null,
            observaciones: f.elements.observaciones.value.trim()
        }
    }), () => ingles() ? "✓ Pet registered successfully." : "✓ Mascota registrada correctamente.");
    conectarFormulario(document.getElementById("formContacto"), "/api/contacto", f => ({
        nombre: f.elements.nombre.value.trim(), correo: f.elements.correo.value.trim(),
        telefono: f.elements.telefono.value.trim(), motivo: f.elements.motivo.value,
        mensaje: f.elements.mensaje.value.trim()
    }), () => ingles() ? "✓ Message sent successfully." : "✓ Mensaje enviado correctamente.");

    const formularioCita = document.getElementById("formCita");
    if (formularioCita) {
        const mascotas = document.getElementById("mascotaCita");
        const servicios = document.getElementById("servicioCita");
        const veterinarios = document.getElementById("veterinarioCita");
        const buscar = document.getElementById("btnBuscarMascotas");
        const limpiarMascotas = () => {
            mascotas.replaceChildren(new Option(ingles() ? "Search by ID first" : "Primero busque por cédula", ""));
        };
        const nombresServicios = {
            "Consulta veterinaria": "Veterinary consultation", "Consulta general": "General consultation",
            "Vacunación": "Vaccination", "Control": "Follow-up", "Baño y cuidado": "Bathing and care",
            "Peluquería": "Grooming", "Limpieza dental": "Dental cleaning", "Emergencias": "Emergency care"
        };
        let catalogos = null;
        const mostrarCatalogos = () => {
            if (!catalogos) return;
            const servicioPrevio = servicios.value;
            const vetPrevio = veterinarios.value;
            servicios.replaceChildren(new Option(ingles() ? "Select a service" : "Seleccione un servicio", ""));
            for (const servicio of catalogos.servicios) {
                servicios.add(new Option(ingles() ? (nombresServicios[servicio.nombre] || servicio.nombre) : servicio.nombre, servicio.id_servicio));
            }
            veterinarios.replaceChildren(new Option(ingles() ? "Select a veterinarian" : "Seleccione un veterinario", ""));
            for (const vet of catalogos.veterinarios) veterinarios.add(new Option(vet.nombre, vet.id_veterinario));
            servicios.value = servicioPrevio;
            veterinarios.value = vetPrevio;
        };
        Promise.all([api("/api/servicios"), api("/api/veterinarios")]).then(([s, v]) => {
            catalogos = {servicios: s.servicios, veterinarios: v.veterinarios};
            mostrarCatalogos();
            if (!catalogos.veterinarios.length) avisoDe(formularioCita).textContent = ingles()
                ? "No active veterinarians are available. Contact the administrator."
                : "No hay veterinarios activos disponibles. Consulta con Administración.";
        }).catch(error => { avisoDe(formularioCita).textContent = error.message; });
        selectorIdioma?.addEventListener("change", mostrarCatalogos);
        document.getElementById("cedulaCita").addEventListener("input", limpiarMascotas);
        buscar.addEventListener("click", async () => {
            const cedula = document.getElementById("cedulaCita").value.trim();
            limpiarMascotas();
            if (!cedula) {
                avisoDe(formularioCita).textContent = ingles() ? "Enter the owner's ID number." : "Digite la cédula del propietario.";
                return;
            }
            buscar.disabled = true;
            try {
                const datos = await api("/api/mascotas/" + encodeURIComponent(cedula));
                // Ignora una respuesta si la cédula cambió durante la búsqueda.
                if (cedula !== document.getElementById("cedulaCita").value.trim()) return;
                mascotas.replaceChildren(new Option(ingles() ? "Select your pet" : "Seleccione su mascota", ""));
                for (const m of datos.mascotas) mascotas.add(new Option(m.nombre + " - " + m.tipo, m.id_mascota));
                avisoDe(formularioCita).textContent = datos.mascotas.length ? "" :
                    (ingles() ? "No pets found." : "No se encontraron mascotas.");
            } catch (error) { avisoDe(formularioCita).textContent = error.message; }
            finally { buscar.disabled = false; }
        });
        formularioCita.addEventListener("reset", () => { limpiarMascotas(); });
        conectarFormulario(formularioCita, "/api/citas", f => ({
            id_mascota: Number(mascotas.value), id_servicio: Number(servicios.value),
            id_veterinario: Number(veterinarios.value), fecha: f.elements.fecha.value, hora: f.elements.hora.value,
            duracion_minutos: Number(f.elements.duracion_minutos.value),
            motivo_consulta: f.elements.motivo_consulta.value.trim(), observaciones: f.elements.observaciones.value.trim()
        }), () => ingles() ? "✓ Appointment scheduled successfully." : "✓ Cita agendada correctamente.");
    }
});
