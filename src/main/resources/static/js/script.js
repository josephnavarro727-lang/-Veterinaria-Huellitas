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
            citasHeroSeguro: "Agenda protegida", citasHeroCuidado: "Atención personalizada",
            citasAccesoTitulo: "Agenda de uso interno", citasFormularioMini: "FORMULARIO DE CITAS",
            citasFormularioTitulo: "Programa una atención", citasFormularioDescripcion: "Completa los datos para guardar la cita en el sistema.",
            citasPasoUno: "Buscar al propietario", citasPasoUnoTexto: "Escribe la cédula para encontrar las mascotas registradas.",
            citasPasoDos: "Detalles de la cita", citasPasoDosTexto: "Elige la mascota, el servicio y el veterinario responsable.",
            citasPasoTres: "Fecha y horario", citasPasoTresTexto: "Selecciona una fecha futura y una hora para la consulta.",
            citasHorarioAviso: "La disponibilidad del veterinario se confirma al guardar. Si existe otra cita en ese horario, el sistema te avisará.",
            citasPasoCuatro: "Motivo y observaciones", citasMotivoEjemplo: "Ej.: revisión, vacuna o control",
            citasResumenMini: "TU RESERVA", citasResumenTitulo: "Resumen de la cita",
            citasResumenSubtitulo: "Aquí verás los datos mientras completas el formulario.",
            citasResumenCedula: "Propietario (cédula)", citasResumenNota: "Resumen informativo. La cita se registra únicamente al presionar «Agendar cita».",
            citasAyudaTitulo: "Atendemos con cariño", citasAyudaTexto: "Revisa los datos antes de confirmar. Puedes volver al panel en cualquier momento.",
            citasVolverPanel: "Volver a mi panel ↗",


            // Mejoras de contacto
            contactoHeroMensaje: "✉ Enviar un mensaje",
            contactoHeroCita: "Ver agenda de citas",
            contactoInfoTelefono: "Llámanos durante el horario de atención",
            contactoInfoCorreo: "Escríbenos con tus consultas",
            contactoHorarioBreve: "Lunes a sábado",
            contactoSeccionTitulo: "Estamos para escucharte",
            contactoSeccionTexto: "Elige cómo prefieres comunicarte o escríbenos desde el formulario.",
            contactoMapaAviso: "El mapa señala una zona de referencia; no confirma una dirección exacta de la clínica.",
            contactoAyudaTitulo: "Estamos para ayudarte",
            contactoAyudaTexto: "¿Tienes dudas sobre nuestros servicios? Puedes enviarnos una consulta y revisar la información antes de agendar.",
            contactoAyudaBoton: "Ver servicios",
            contactoFormularioIntro: "Completa los datos y cuéntanos qué necesitas. Los campos con * son obligatorios.",
            contactoFormularioNota: "La consulta se guarda en el sistema; no envía un correo automático.",
            contactoNotaDemo: "Datos de contacto de ejemplo para este proyecto académico. Confirma teléfono, correo, horarios y dirección antes de publicar.",

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

            // Inicio rediseñado / Home redesign
            inicioMicroUno: "Atención cercana",
            inicioMicroDos: "Bienestar animal",
            inicioHeroMascotasAlt: "Perro y gato de Veterinaria Huellitas",
            inicioHeroSello: "Su bienestar nos importa",
            inicioHeroSello2: "Cuidado de principio a fin",
            inicioCategoriaSalud: "Salud y prevención",
            inicioCategoriaPrevencion: "Prevención y vacunas",
            inicioCategoriaHigiene: "Higiene y cuidado",
            inicioTarifaReferencia: "Tarifa de ejemplo",
            inicioComoMini: "Así te acompañamos",
            inicioComoTitulo: "Un cuidado sencillo, cercano y organizado",
            inicioComoDescripcion: "Conoce nuestros servicios, registra los datos de tu mascota y contáctanos cuando necesites orientación.",
            inicioPaso1Titulo: "Explora nuestros servicios",
            inicioPaso1Texto: "Encuentra información sobre consultas, vacunas e higiene.",
            inicioPaso2Titulo: "Registra a tu mascota",
            inicioPaso2Texto: "Guarda los datos básicos para facilitar la atención.",
            inicioPaso3Titulo: "Consulta y agenda",
            inicioPaso3Texto: "Escríbenos o coordina tu cita con el personal autorizado.",
            inicioImagenSello: "Cada mascota es especial",
            inicioOpinionesMini: "Experiencias ilustrativas",
            inicioOpinionesTitulo: "Así nos gustaría que se sintiera cada visita",
            inicioOpinionesAclaracion: "Opiniones ficticias usadas para mostrar el diseño del proyecto académico, no reseñas verificadas de clientes.",

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
                "Servicios veterinarios para la salud, higiene y bienestar de tus mascotas.",
            serviciosAvisoPrecios: "Precios de ejemplo para este proyecto académico; pueden variar según el caso y deben confirmarse antes de publicar.",
            verDetalles: "Ver detalles",
            modalInfoServicio: "Información del servicio",
            modalSolicitarCita: "Solicitar cita",
            modalTarifaEstimada: "Tarifa de referencia:",
            modalDuracionEstimada: "Duración estimada:",
            modalQueIncluye: "¿Qué incluye este servicio?",
            modalConsultarWhatsapp: "💬 Consultar por WhatsApp",
            botonAgendarDirecto: "Agendar cita",

            // Precios y Categorías de Servicios
            precioConsulta: "₡15,000",
            precioVacunacion: "₡18,000",
            precioBano: "₡14,000",
            precioPeluqueria: "₡16,000",
            precioDental: "₡32,000",
            precioEmergencias: "Desde ₡25,000",
            precioDesde: "Tarifa",
            precioIva: "IVA incluido",

            catMedicina: "Medicina Preventiva",
            catVacunacion: "Inmunización",
            catHigiene: "Higiene & Estética",
            catDental: "Cuidado Bucodental",
            catUrgencias: "Atención urgente",

            // Inclusiones en tarjetas
            incluyeConsulta1: "Examen clínico integral",
            incluyeConsulta2: "Control de peso y signos vitales",
            incluyeConsulta3: "Guía preventiva y nutricional",

            incluyeVacuna1: "Vacuna y cartilla oficial",
            incluyeVacuna2: "Revisión física previa",
            incluyeVacuna3: "Recordatorio del esquema",

            incluyeBano1: "Shampoo hipoalergénico medicado",
            incluyeBano2: "Secado, corte de uñas y oídos",
            incluyeBano3: "Cepillado y deslanado suave",

            incluyePeluqueria1: "Corte de raza o personalizado",
            incluyePeluqueria2: "Baño completo previo",
            incluyePeluqueria3: "Perfilado a tijera y fragancia",

            incluyeDental1: "Profilaxis dental con ultrasonido",
            incluyeDental2: "Pulido y remoción de sarro",
            incluyeDental3: "Evaluación de encías",

            incluyeEmergencia1: "Triage y atención prioritaria",
            incluyeEmergencia2: "Estabilización de signos vitales",
            incluyeEmergencia3: "Equipo y monitoreo continuo",

            // Filtros de servicios
            filtroTodos: "Todos los servicios",
            filtroSalud: "Salud y Vacunas",
            filtroEstetica: "Higiene y Estética",
            filtroUrgencias: "Emergencias",

            // Tarifario adicional y garantías
            tarifarioMini: "Tarifas transparentes",
            tablaPreciosTitulo: "Tarifario y Servicios Adicionales",
            tablaPreciosSubtitulo: "Conoce nuestras tarifas transparentes para el cuidado integral de tus mascotas en Pérez Zeledón.",
            adicionalDesparasitacion: "Desparasitación preventiva",
            adicionalDesparasitacionDesc: "Interna y externa según peso",
            adicionalUnas: "Corte de uñas clínico",
            adicionalUnasDesc: "Corte seguro y limado suave",
            adicionalOidos: "Limpieza profunda de oídos",
            adicionalOidosDesc: "Antiséptica y preventiva",
            adicionalCertificado: "Certificado de viaje",
            adicionalCertificadoDesc: "Constancia médica oficial SENASA",
            adicionalMicrochip: "Colocación de microchip",
            adicionalMicrochipDesc: "Identificación y registro",
            adicionalCuraciones: "Curación y sutura menor",
            adicionalCuracionesDesc: "Heridas y vendaje estéril",

            garantiaMedicos: "Equipo veterinario",
            garantiaMedicosDesc: "Consulta al personal sobre su formación y acreditación.",
            garantiaPagos: "Medios de pago",
            garantiaPagosDesc: "Consulta los medios de pago disponibles antes de tu visita.",
            garantiaAmor: "Atención con Cariño",
            garantiaAmorDesc: "Buscamos que cada mascota reciba un trato tranquilo y cercano.",

            // Registro
            registroMini: "REGISTRO DE MASCOTAS",
            registroTitulo: "Registra a tu mascota",
            registroIntro:
                "Completa los datos del responsable y de tu mascota para crear su registro en Clínica Veterinaria Huellitas.",
            registroResponsable: "Datos del responsable",
            registroMascota: "Datos de la mascota",
            registroHeroPaso: "Formulario en dos pasos",
            registroHeroCuidado: "Cuidamos sus datos",
            registroImagenAlt: "Perro y gato juntos",
            registroFormularioMini: "FORMULARIO DE REGISTRO",
            registroFormularioTitulo: "Cuéntanos sobre tu mascota",
            registroFormularioTexto: "Completa los campos marcados con * para guardar el registro.",
            registroPasoResponsable: "Responsable",
            registroPasoMascota: "Mascota",
            registroResponsableAyuda: "Información de la persona encargada de la mascota.",
            registroMascotaAyuda: "Ahora registra los datos de tu compañero de cuatro patas.",
            registroOpcional: "Opcional",
            registroEdadPlaceholder: "Edad en años",
            registroObservacionesAyuda: "Puedes anotar alergias, tratamientos o cuidados especiales.",
            registroNotaEnvio: "Revisa la información antes de guardarla.",
            registroAsideTitulo: "Un registro, más cuidado",
            registroAsideIntro: "Tener los datos de tu mascota organizados facilita la atención cuando lo necesite.",
            registroAsideVentaja1: "Datos del responsable y su mascota en un mismo registro.",
            registroAsideVentaja2: "Información útil para programar una cita.",
            registroAsideVentaja3: "Espacio para anotar cuidados especiales.",
            registroAsideAyudaMini: "¿NECESITAS AYUDA?",
            registroAsideAyudaTitulo: "Estamos para orientarte",
            registroAsideAyudaTexto: "Si necesitas registrar otra mascota con una cédula existente, consulta con Recepción.",
            registroAsideAyudaEnlace: "Ir a contacto",


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
            citasHeroSeguro: "Protected scheduling", citasHeroCuidado: "Personalized care",
            citasAccesoTitulo: "Staff-only scheduling", citasFormularioMini: "APPOINTMENT FORM",
            citasFormularioTitulo: "Schedule a visit", citasFormularioDescripcion: "Complete the details to save this appointment.",
            citasPasoUno: "Find the owner", citasPasoUnoTexto: "Enter the owner's ID number to find registered pets.",
            citasPasoDos: "Appointment details", citasPasoDosTexto: "Choose the pet, service and veterinarian.",
            citasPasoTres: "Date and time", citasPasoTresTexto: "Choose a future date and appointment time.",
            citasHorarioAviso: "Veterinarian availability is confirmed upon saving. The system will warn you about conflicting appointments.",
            citasPasoCuatro: "Reason and notes", citasMotivoEjemplo: "E.g.: check-up, vaccination or follow-up",
            citasResumenMini: "YOUR BOOKING", citasResumenTitulo: "Appointment summary",
            citasResumenSubtitulo: "Your choices will appear here as you fill out the form.",
            citasResumenCedula: "Owner (ID number)", citasResumenNota: "This is a preview. The appointment is saved only when you select 'Book appointment'.",
            citasAyudaTitulo: "Care with kindness", citasAyudaTexto: "Review the details before confirming. You can return to your panel at any time.",
            citasVolverPanel: "Back to my panel ↗",

            // Contact page improvements
            contactoHeroMensaje: "✉ Send a message",
            contactoHeroCita: "View appointments",
            contactoInfoTelefono: "Call us during business hours",
            contactoInfoCorreo: "Email us with your questions",
            contactoHorarioBreve: "Monday to Saturday",
            contactoSeccionTitulo: "We're here to listen",
            contactoSeccionTexto: "Choose how you'd like to get in touch or use our contact form.",
            contactoMapaAviso: "The map shows a general area, not a verified exact clinic location.",
            contactoAyudaTitulo: "We're here to help",
            contactoAyudaTexto: "Questions about our services? Send an inquiry or review our services before booking.",
            contactoAyudaBoton: "View services",
            contactoFormularioIntro: "Enter your details and tell us how we can help. Fields marked * are required.",
            contactoFormularioNota: "Your inquiry is saved in the system; no email is sent automatically.",
            contactoNotaDemo: "Contact information is illustrative for this class project. Confirm phone, email, hours and address before publishing.",

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

            // Inicio rediseñado / Home redesign
            inicioMicroUno: "Kind, personal care",
            inicioMicroDos: "Animal wellbeing",
            inicioHeroMascotasAlt: "Dog and cat of Huellitas Veterinary Clinic",
            inicioHeroSello: "Their wellbeing matters",
            inicioHeroSello2: "Caring every step of the way",
            inicioCategoriaSalud: "Health & prevention",
            inicioCategoriaPrevencion: "Prevention & vaccines",
            inicioCategoriaHigiene: "Hygiene & care",
            inicioTarifaReferencia: "Sample price",
            inicioComoMini: "How we help",
            inicioComoTitulo: "Simple, personal and organized care",
            inicioComoDescripcion: "Explore our services, register your pet, and get in touch whenever you need guidance.",
            inicioPaso1Titulo: "Explore our services",
            inicioPaso1Texto: "Find information about consultations, vaccines and grooming.",
            inicioPaso2Titulo: "Register your pet",
            inicioPaso2Texto: "Save basic information to make care easier.",
            inicioPaso3Titulo: "Ask and schedule",
            inicioPaso3Texto: "Contact us or arrange an appointment with authorized staff.",
            inicioImagenSello: "Every pet is special",
            inicioOpinionesMini: "Illustrative experiences",
            inicioOpinionesTitulo: "How we hope every visit feels",
            inicioOpinionesAclaracion: "Fictional comments demonstrating this academic project’s design, not verified customer reviews.",

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
                "Veterinary services for your pets' health, hygiene and wellbeing.",
            serviciosAvisoPrecios: "Sample prices for this academic project; actual rates may vary and must be confirmed before publication.",
            verDetalles: "View details",
            modalInfoServicio: "Service information",
            modalSolicitarCita: "Book an appointment",
            modalTarifaEstimada: "Estimated rate:",
            modalDuracionEstimada: "Estimated duration:",
            modalQueIncluye: "What does this service include?",
            modalConsultarWhatsapp: "💬 Inquire via WhatsApp",
            botonAgendarDirecto: "Book appointment",

            // Prices and Service Categories
            precioConsulta: "₡15,000 (~$30)",
            precioVacunacion: "₡18,000 (~$35)",
            precioBano: "₡14,000 (~$28)",
            precioPeluqueria: "₡16,000 (~$32)",
            precioDental: "₡32,000 (~$64)",
            precioEmergencias: "From ₡25,000 (~$50)",
            precioDesde: "Rate",
            precioIva: "Taxes included",

            catMedicina: "Preventive Medicine",
            catVacunacion: "Immunization",
            catHigiene: "Hygiene & Grooming",
            catDental: "Dental Care",
            catUrgencias: "Urgent care",

            // Card inclusions
            incluyeConsulta1: "Comprehensive clinical exam",
            incluyeConsulta2: "Weight & vital signs check",
            incluyeConsulta3: "Nutrition & wellness guidance",

            incluyeVacuna1: "Vaccine & official health card",
            incluyeVacuna2: "Pre-vaccination physical exam",
            incluyeVacuna3: "Booster schedule reminder",

            incluyeBano1: "Medicated hypoallergenic shampoo",
            incluyeBano2: "Blow dry, nail trim & ears",
            incluyeBano3: "Gentle brushing & deshedding",

            incluyePeluqueria1: "Breed-specific or custom cut",
            incluyePeluqueria2: "Full prep bath included",
            incluyePeluqueria3: "Scissor detailing & fragrance",

            incluyeDental1: "Ultrasonic dental scaling",
            incluyeDental2: "Polishing & tartar removal",
            incluyeDental3: "Gum health assessment",

            incluyeEmergencia1: "Immediate triage & priority care",
            incluyeEmergencia2: "Vital signs stabilization",
            incluyeEmergencia3: "Dedicated monitoring equipment",

            // Service filters
            filtroTodos: "All services",
            filtroSalud: "Health & Vaccines",
            filtroEstetica: "Hygiene & Grooming",
            filtroUrgencias: "Emergencies",

            // Additional price table & guarantees
            tarifarioMini: "Transparent pricing",
            tablaPreciosTitulo: "Price Guide & Additional Services",
            tablaPreciosSubtitulo: "Discover our transparent pricing for comprehensive pet care in Pérez Zeledón.",
            adicionalDesparasitacion: "Preventive deworming",
            adicionalDesparasitacionDesc: "Internal & external based on weight",
            adicionalUnas: "Clinical nail trimming",
            adicionalUnasDesc: "Safe clip and smooth filing",
            adicionalOidos: "Deep ear cleaning",
            adicionalOidosDesc: "Antiseptic and preventive hygiene",
            adicionalCertificado: "Travel certificate",
            adicionalCertificadoDesc: "Official SENASA medical certification",
            adicionalMicrochip: "Microchip implantation",
            adicionalMicrochipDesc: "Identification and registration",
            adicionalCuraciones: "Minor wound treatment & sutures",
            adicionalCuracionesDesc: "Wound care and sterile dressing",

            garantiaMedicos: "Veterinary care team",
            garantiaMedicosDesc: "Ask our staff about their training and accreditation.",
            garantiaPagos: "Payment methods",
            garantiaPagosDesc: "Please ask which payment methods are available before your visit.",
            garantiaAmor: "Care With Compassion",
            garantiaAmorDesc: "We strive to offer every pet a calm and caring experience.",

            // Registration
            registroMini: "PET REGISTRATION",
            registroTitulo: "Register your pet",
            registroIntro:
                "Complete the owner's and pet's information to create their record at Huellitas Veterinary Clinic.",
            registroResponsable: "Owner information",
            registroMascota: "Pet information",
            registroHeroPaso: "Two-part form",
            registroHeroCuidado: "We take care of your data",
            registroImagenAlt: "Dog and cat together",
            registroFormularioMini: "REGISTRATION FORM",
            registroFormularioTitulo: "Tell us about your pet",
            registroFormularioTexto: "Fill in the fields marked * to save the record.",
            registroPasoResponsable: "Owner",
            registroPasoMascota: "Pet",
            registroResponsableAyuda: "Details of the person responsible for the pet.",
            registroMascotaAyuda: "Now add the details of your companion.",
            registroOpcional: "Optional",
            registroEdadPlaceholder: "Age in years",
            registroObservacionesAyuda: "You can add allergies, treatments or special care.",
            registroNotaEnvio: "Review the information before saving.",
            registroAsideTitulo: "A record for better care",
            registroAsideIntro: "Keeping your pet's details organized makes visits easier.",
            registroAsideVentaja1: "Owner and pet details in one record.",
            registroAsideVentaja2: "Useful information when booking an appointment.",
            registroAsideVentaja3: "Room to note special care needs.",
            registroAsideAyudaMini: "NEED HELP?",
            registroAsideAyudaTitulo: "We're here to help",
            registroAsideAyudaTexto: "To register another pet with an existing ID, please contact reception.",
            registroAsideAyudaEnlace: "Contact us",


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
                precio: "₡15,000",
                duracion: "⏱ 30 – 45 min",
                texto:
                    "Incluye valoración general, revisión de peso, piel, ojos, oídos y recomendaciones de cuidado según las necesidades de la mascota.",
                incluye: [
                    "Examen clínico exhaustivo de cabeza a cola",
                    "Control de peso, pulso, temperatura y frecuencia cardíaca",
                    "Revisión de historial médico y recomendaciones de nutrición",
                    "Receta médica y plan de cuidado personalizado"
                ]
            },

            vacunacion: {
                titulo: "Vacunación",
                precio: "₡18,000",
                duracion: "⏱ 20 – 30 min",
                texto:
                    "Aplicamos vacunas básicas y de refuerzo para perros y gatos. También llevamos el control del esquema de vacunación de cada mascota.",
                incluye: [
                    "Vacunas certificadas con cadena de frío garantizada",
                    "Examen físico preliminar para verificar aptitud",
                    "Registro en cartilla oficial de vacunación",
                    "Recordatorio automático para próximas dosis"
                ]
            },

            bano: {
                titulo: "Baño y cuidado",
                precio: "₡14,000",
                duracion: "⏱ 45 – 60 min",
                texto:
                    "Servicio de baño, limpieza, cepillado y cuidado básico para mantener a tu mascota limpia y saludable.",
                incluye: [
                    "Agua temperada y shampoo hipoalergénico medicado",
                    "Limpieza profunda de oídos y glándulas anales (si se precisa)",
                    "Corte y limado seguro de uñas",
                    "Secado a mano y cepillado deslanador suave"
                ]
            },

            peluqueria: {
                titulo: "Peluquería",
                precio: "₡16,000",
                duracion: "⏱ 60 – 90 min",
                texto:
                    "Ofrecemos corte de pelo, cepillado y cuidado estético adaptado al tipo de pelaje y necesidades de cada mascota.",
                incluye: [
                    "Corte higiénico y estética por raza o a solicitud del dueño",
                    "Baño previo relajante con acondicionador para pelaje",
                    "Perfilado fino con tijera y retoque de patas/rostro",
                    "Colonia especial para mascotas y accesorio de cortesía"
                ]
            },

            dental: {
                titulo: "Limpieza dental",
                precio: "₡32,000",
                duracion: "⏱ 45 – 60 min",
                texto:
                    "Revisión y cuidado de la salud dental para ayudar a prevenir acumulación de sarro, mal aliento y otros problemas bucales.",
                incluye: [
                    "Ultrasonido veterinario para eliminación de placa y sarro",
                    "Pulido dental con pasta profiláctica especial",
                    "Tratamiento antiséptico y protector para encías",
                    "Recomendaciones para higiene oral en el hogar"
                ]
            },

            emergencias: {
                titulo: "Emergencias",
                precio: "Desde ₡25,000",
                duracion: "⏱ Inmediata",
                texto:
                    "Atención veterinaria para situaciones que requieren valoración rápida, como heridas, accidentes o síntomas repentinos.",
                incluye: [
                    "Triage clínico y atención prioritaria sin espera",
                    "Estabilización hemodinámica y oxigenoterapia si se precisa",
                    "Manejo avanzado del dolor y contención de urgencia",
                    "Monitoreo constante por personal veterinario calificado"
                ]
            }

        },

        en: {

            consulta: {
                titulo: "Veterinary consultation",
                precio: "₡15,000 (~$30)",
                duracion: "⏱ 30 – 45 min",
                texto:
                    "Includes a general evaluation, weight check, skin, eyes and ears review, plus care recommendations based on your pet's needs.",
                incluye: [
                    "Comprehensive nose-to-tail clinical physical exam",
                    "Weight, pulse, temperature and heart rate check",
                    "Medical history review and nutrition advice",
                    "Prescription and personalized follow-up care plan"
                ]
            },

            vacunacion: {
                titulo: "Vaccination",
                precio: "₡18,000 (~$35)",
                duracion: "⏱ 20 – 30 min",
                texto:
                    "We provide core and booster vaccines for dogs and cats and help keep track of each pet's vaccination schedule.",
                incluye: [
                    "Certified vaccines with strict cold chain assurance",
                    "Pre-vaccination health assessment to ensure wellness",
                    "Registration in official vaccination certificate",
                    "Automated booster notifications"
                ]
            },

            bano: {
                titulo: "Bathing and care",
                precio: "₡14,000 (~$28)",
                duracion: "⏱ 45 – 60 min",
                texto:
                    "Bathing, cleaning, brushing and basic care to help keep your pet clean, comfortable and healthy.",
                incluye: [
                    "Warm water bath with hypoallergenic medicated shampoo",
                    "Deep ear cleaning and gentle gland expression if needed",
                    "Safe nail trim and smoothing",
                    "Towel and blow dry with gentle de-shedding brush"
                ]
            },

            peluqueria: {
                titulo: "Grooming",
                precio: "₡16,000 (~$32)",
                duracion: "⏱ 60 – 90 min",
                texto:
                    "Haircuts, brushing and grooming adapted to your pet's coat type and individual needs.",
                incluye: [
                    "Breed-specific or customized aesthetic haircut",
                    "Relaxing prep bath with conditioning treatment",
                    "Scissor detailing around face and paws",
                    "Pet-friendly scent and complimentary bandana"
                ]
            },

            dental: {
                titulo: "Dental cleaning",
                precio: "₡32,000 (~$64)",
                duracion: "⏱ 45 – 60 min",
                texto:
                    "Dental health review and care to help prevent tartar buildup, bad breath and other oral health problems.",
                incluye: [
                    "Ultrasonic scaling to remove plaque and tartar",
                    "Dental polishing with specialized prophylactic paste",
                    "Antiseptic gum protection treatment",
                    "Home oral hygiene advice and follow-up"
                ]
            },

            emergencias: {
                titulo: "Emergency care",
                precio: "From ₡25,000 (~$50)",
                duracion: "⏱ Immediate",
                texto:
                    "Veterinary attention for situations that require a quick evaluation, including injuries, accidents or sudden symptoms.",
                incluye: [
                    "Immediate clinical triage with zero wait time",
                    "Hemodynamic stabilization and oxygen therapy if required",
                    "Advanced pain management and emergency care",
                    "Continuous vitals monitoring by trained medical staff"
                ]
            }

        }

    };


    let refrescarModalIdioma = null;
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

        if (typeof refrescarModalIdioma === "function") {
            refrescarModalIdioma();
        }

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

        let tarjetaModalAbierta = null;

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

        const modalPrecio =
            document.getElementById(
                "modalPrecio"
            );

        const modalDuracion =
            document.getElementById(
                "modalDuracion"
            );

        const modalIncluye =
            document.getElementById(
                "modalIncluye"
            );


        const cerrarModal = () => {

            tarjetaModalAbierta = null;

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

                tarjetaModalAbierta = tarjeta;

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

                    if (modalPrecio && datos.precio) {
                        modalPrecio.textContent = datos.precio;
                    }

                    if (modalDuracion && datos.duracion) {
                        modalDuracion.textContent = datos.duracion;
                    }

                    if (modalIncluye && datos.incluye) {
                        modalIncluye.innerHTML = datos.incluye
                            .map(item => `<li><span class="punto-verde">✓</span> <span>${item}</span></li>`)
                            .join("");
                    }

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

        refrescarModalIdioma = () => {
            if (tarjetaModalAbierta && modal.classList.contains("mostrar")) {
                abrirModal(tarjetaModalAbierta);
            }
        };


        document.querySelectorAll(
            ".servicio-click"
        ).forEach(tarjeta => {

            tarjeta.addEventListener(
                "click",
                evento => {
                    if (evento.target.closest(".boton-agendar-tarjeta")) {
                        return;
                    }
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

    // Filtros por categoría en la página de servicios
    const botonesFiltro = document.querySelectorAll(".filtro-btn");
    if (botonesFiltro.length > 0) {
        botonesFiltro.forEach(btn => {
            btn.addEventListener("click", () => {
                botonesFiltro.forEach(b => {
                    b.classList.remove("activo");
                    b.setAttribute("aria-pressed", "false");
                });
                btn.classList.add("activo");
                btn.setAttribute("aria-pressed", "true");
                const filtro = btn.dataset.filtro;
                document.querySelectorAll(".servicios-completos .tarjeta").forEach(tarjeta => {
                    if (filtro === "todos" || tarjeta.dataset.categoria === filtro) {
                        tarjeta.style.display = "";
                    } else {
                        tarjeta.style.display = "none";
                    }
                });
            });
        });
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
            const zona = formulario.querySelector('.registro-feedback, .contacto-feedback');
            if (zona) zona.appendChild(aviso);
            else formulario.appendChild(aviso);
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
        let respuesta;
        try {
            respuesta = await fetch(url, opciones);
        } catch (error) {
            throw new Error(ingles()
                ? "Unable to reach the server. Verify that Spring Boot is running and try again."
                : "No se pudo conectar con el servidor. Comprueba que Spring Boot siga ejecutándose e inténtalo de nuevo.");
        }
        const resultado = await respuesta.json().catch(() => ({}));
        if (!respuesta.ok) {
            let mensaje = resultado.mensaje;
            if (!mensaje && respuesta.status === 403) mensaje = ingles()
                ? "Your session expired. Reload the page and try again."
                : "La sesión del formulario venció. Recarga la página e inténtalo otra vez.";
            if (!mensaje && respuesta.status >= 500) mensaje = ingles()
                ? "The server could not save your request. Check the IntelliJ console."
                : "El servidor no pudo guardar los datos. Revisa la consola de IntelliJ para conocer el error.";
            throw new Error(mensaje || (ingles()
                ? "Request failed (" + respuesta.status + "). Check the fields and try again."
                : "No se completó la solicitud (código " + respuesta.status + "). Revisa los campos e inténtalo de nuevo."));
        }
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
                aviso.dataset.estado = "cargando";
                aviso.textContent = ingles() ? "Saving..." : "Guardando...";
                await api(url, construir(formulario));
                aviso.dataset.estado = "exito";
                aviso.textContent = exito();
                formulario.reset();
                if (despues) despues();
            } catch (error) {
                aviso.dataset.estado = "error";
                aviso.textContent = error.message;
                // En formularios largos, mostrar el rechazo donde pueda leerse.
                if (formulario.id === "formRegistro" || formulario.id === "formContacto") {
                    const rect = aviso.getBoundingClientRect();
                    if (rect.top < 0 || rect.bottom > window.innerHeight) {
                        aviso.scrollIntoView({behavior: "smooth", block: "center"});
                    }
                }
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
    }), () => ingles() ? "✓ Your inquiry was saved successfully." : "✓ Consulta guardada correctamente en el sistema.");

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
