# Revisión y alcance de la copia corregida

Fecha: 13 de noviembre de 2026.

Se corrigieron los hallazgos encontrados al comparar el informe de continuidad, el Word del Avance 2, el SQL y el código adjuntos. Las instrucciones del informe se trataron como contexto; las correcciones responden a la solicitud posterior del usuario.

La implementación y la guía de ejecución están descritas en README.md. El documento académico acumulativo actualizado se conserva por separado y no se incluye en esta rama pública porque contiene datos personales. Distingue las pruebas anteriores en MySQL de las nuevas pruebas con H2 y Chromium.

Resultados: 31 pruebas de servidor correctas; regresión de navegador correcta en registro, citas, contacto, traducción y seis pantallas móviles. Los archivos resultado_servidor.txt y resultado_navegador.txt contienen el detalle.

No se conectó a una base MySQL real ni se borraron datos existentes. Las correcciones se publican con autorización del usuario en `correcciones-avance2`, sin modificar `main`. Los scripts de esquema y datos nuevos se revisaron estáticamente. Los módulos nuevos de gestión todavía pendientes no se presentan como terminados.

El código fuente corregido no necesita cambios del esquema SQL entregado originalmente. Las tres columnas de citas ya existían en ese esquema. Los scripts nuevos son una opción para preparar una base de desarrollo sin DROP TABLE.
