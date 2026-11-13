-- OPCIONAL: únicamente en una base de desarrollo con las siete tablas VACÍAS.
-- Rechaza una base con cualquier registro. No elimina ni actualiza datos existentes.
-- Las cuentas quedan INACTIVAS y sin contraseña utilizable. Usa scripts/iniciar-demo.ps1.
USE `veterinaria_huellitas_avance2_entrega_final`;
DELIMITER $$
CREATE PROCEDURE huellitas_insertar_demo_v20261113()
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;
    IF EXISTS (SELECT 1 FROM `roles`) OR
       EXISTS (SELECT 1 FROM `usuarios`) OR
       EXISTS (SELECT 1 FROM `propietarios`) OR
       EXISTS (SELECT 1 FROM `mascotas`) OR
       EXISTS (SELECT 1 FROM `servicios`) OR
       EXISTS (SELECT 1 FROM `citas`) OR
       EXISTS (SELECT 1 FROM `consultas_contacto`) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La base no esta vacia. No se insertaron datos de demostracion.';
    END IF;
    START TRANSACTION;
    INSERT INTO `roles` (`id_rol`, `nombre`) VALUES
(1, 'Administrador'),
(2, 'Recepcionista'),
(3, 'Veterinario');
    INSERT INTO `usuarios` (`id_usuario`, `nombre_completo`, `usuario`, `correo`, `password_hash`, `id_rol`, `activo`) VALUES
(1, 'Administrador Demo', 'admin_demo', 'admin.demo@example.com', 'NO_INICIALIZADO', 1, 0),
(2, 'Recepcionista Demo', 'recepcion_demo', 'recepcion.demo@example.com', 'NO_INICIALIZADO', 2, 0),
(3, 'Veterinaria Demo Uno', 'veterinaria_demo1', 'vet1.demo@example.com', 'NO_INICIALIZADO', 3, 0),
(4, 'Veterinario Demo Dos', 'veterinario_demo2', 'vet2.demo@example.com', 'NO_INICIALIZADO', 3, 0);
    INSERT INTO `propietarios` (`id_propietario`, `nombre`, `cedula`, `telefono`, `correo`) VALUES
(1, 'Andrea Ejemplo', 'DEMO-0001', '88880001', 'andrea.demo@example.com'),
(2, 'Carlos Ejemplo', 'DEMO-0002', '88880002', 'carlos.demo@example.com');
    INSERT INTO `mascotas` (`id_mascota`, `nombre`, `tipo`, `raza`, `edad`, `observaciones`, `id_propietario`) VALUES
(1, 'Luna', 'Perro', 'Mestiza', 3, 'Sin observaciones', 1),
(2, 'Milo', 'Gato', 'Domestico', 2, 'Visita de rutina', 1),
(3, 'Toby', 'Perro', 'Labrador', 5, NULL, 2);
    INSERT INTO `servicios` (`id_servicio`, `nombre`, `descripcion`, `precio`, `activo`) VALUES
(1, 'Consulta general', 'Revisión veterinaria general', 12000.00, 1),
(2, 'Vacunación', 'Aplicación de vacunas', 15000.00, 1),
(3, 'Control', 'Cita de seguimiento', 10000.00, 1);
    INSERT INTO `citas` (`id_cita`, `id_mascota`, `id_servicio`, `id_veterinario`, `fecha`, `hora`, `duracion_minutos`, `motivo_consulta`, `estado`, `observaciones`) VALUES
(1, 1, 1, 3, '2026-12-02', '09:00:00', 30, 'Chequeo general', 'Pendiente', 'Registro ficticio'),
(2, 2, 2, 3, '2026-12-02', '10:00:00', 30, 'Vacuna anual', 'Pendiente', NULL),
(3, 3, 3, 4, '2026-12-02', '09:00:00', 45, 'Seguimiento', 'Pendiente', NULL),
(4, 1, 1, 3, '2026-11-01', '11:00:00', 30, 'Revisión de control', 'Atendida', NULL);
    INSERT INTO `consultas_contacto` (`id_consulta`, `nombre`, `correo`, `telefono`, `motivo`, `mensaje`) VALUES
(1, 'Persona de prueba', 'consulta.demo@example.com', NULL, 'Horario', 'Me gustaría conocer el horario de atención.');
    COMMIT;
END$$
DELIMITER ;
CALL huellitas_insertar_demo_v20261113();
DROP PROCEDURE huellitas_insertar_demo_v20261113;
