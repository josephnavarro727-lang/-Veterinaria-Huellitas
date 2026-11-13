"""Regresión de interfaz con HTML renderizado por MockMvc; API simulada, sin tocar MySQL.
Ejecutar primero: ./mvnw test
Requiere: python -m pip install playwright; python -m playwright install chromium
"""
from pathlib import Path
from playwright.sync_api import sync_playwright
import json
import shutil

ROOT = Path(__file__).resolve().parents[1]
RENDER = ROOT / 'target/revision'
STATIC = ROOT / 'src/main/resources/static'
ORIGEN = 'http://huellitas.test'
solicitudes = []
errores = []
conflicto = False

def responder(route):
    global conflicto
    path = route.request.url.removeprefix(ORIGEN)
    if path.startswith('/api/'):
        if route.request.method == 'POST':
            solicitudes.append((path, route.request.post_data_json, route.request.headers))
            estado = 409 if conflicto else 200
            contenido = {'mensaje': 'El veterinario tiene otra cita pendiente en ese horario.'} if conflicto else {'mensaje': 'Guardado'}
        else:
            estado = 200
            if path == '/api/servicios': contenido = {'ok':True,'servicios':[{'id_servicio':1,'nombre':'Consulta general'}]}
            elif path == '/api/veterinarios': contenido = {'ok':True,'veterinarios':[{'id_veterinario':3,'nombre':'Veterinaria de prueba'}]}
            elif path.startswith('/api/mascotas/'): contenido = {'ok':True,'mascotas':[{'id_mascota':1,'nombre':'Luna','tipo':'Perro'}]}
            else: contenido = {}
        route.fulfill(status=estado,content_type='application/json',body=json.dumps(contenido))
    elif path in ['/','/registro','/citas','/contacto','/servicios','/login']:
        nombre = 'index' if path == '/' else 'citas-personal' if path == '/citas' else path[1:]
        route.fulfill(path=str(RENDER / (nombre+'.html')),content_type='text/html; charset=utf-8')
    elif path.startswith('/') and (STATIC / path[1:]).is_file():
        route.fulfill(path=str(STATIC / path[1:]))
    else:
        route.fulfill(status=404,body='')

def ir(page,path):
    page.goto(ORIGEN+path)
    page.wait_for_load_state('networkidle')

with sync_playwright() as p:
    ejecutable = shutil.which('chromium')
    opciones = {'headless':True}
    if ejecutable: opciones['executable_path'] = ejecutable
    browser = p.chromium.launch(**opciones)
    page = browser.new_page(locale='es-CR',viewport={'width':1366,'height':900})
    page.on('pageerror',lambda error: errores.append(str(error)))
    page.route('**/*',responder)
    ir(page,'/registro')
    assert page.locator('#formRegistro').count() == 1
    for nombre,valor in [('dueno','Persona de prueba'),('cedula','PRUEBA-NUEVO'),('telefono','88880000'),('correo','persona@example.com'),('mascota','Milo')]:
        page.locator('[name="'+nombre+'"]').fill(valor)
    page.locator('[name="tipo"]').select_option(index=1)
    # Dos eventos simultáneos solo pueden producir una solicitud.
    page.evaluate("""() => { const f=document.getElementById('formRegistro'); f.dispatchEvent(new Event('submit',{cancelable:true})); f.dispatchEvent(new Event('submit',{cancelable:true})); }""")
    page.wait_for_function("document.querySelector('.mensaje-formulario')?.textContent.includes('✓')")
    assert len(solicitudes)==1
    assert solicitudes[0][2].get('x-csrf-token')
    assert solicitudes[0][1]['mascota']['nombre']=='Milo'
    print('OK: un formulario, un POST ante doble envío y cabecera CSRF presente.')
    page.select_option('#selectorIdioma','en')
    assert page.locator('a.boton-login').inner_text()=='Sign in'
    print('OK: enlace de login traducido.')

    ir(page,'/citas')
    page.fill('#cedulaCita','PRUEBA-EXISTENTE');page.click('#btnBuscarMascotas')
    page.wait_for_function("document.querySelector('#mascotaCita').options.length > 1")
    page.select_option('#mascotaCita','1');page.select_option('#servicioCita','1');page.select_option('#veterinarioCita','3')
    page.select_option('#selectorIdioma','es')
    assert page.locator('#servicioCita').input_value()=='1'
    assert page.locator('#veterinarioCita').input_value()=='3'
    page.fill('#fechaCita','2030-01-02');page.fill('#horaCita','09:00');page.fill('#duracionCita','45');page.fill('#motivoCita','Chequeo')
    conflicto = True
    page.locator('#formCita button[type="submit"]').click()
    page.wait_for_function("document.querySelector('.mensaje-formulario')?.textContent.includes('otra cita')")
    assert page.locator('#motivoCita').input_value()=='Chequeo'
    assert page.locator('#formCita button[type="submit"]').is_enabled()
    conflicto = False
    page.locator('#formCita button[type="submit"]').click()
    page.wait_for_function("document.querySelector('.mensaje-formulario')?.textContent.includes('✓')")
    cita = solicitudes[-1][1]
    assert cita['id_veterinario']==3 and cita['duracion_minutos']==45 and cita['motivo_consulta']=='Chequeo'
    print('OK: datos completos de cita, selección conservada al traducir y conflicto visible sin borrar campos.')

    ir(page,'/contacto')
    page.fill('#nombre','Persona de prueba');page.fill('#correo','persona@example.com');page.fill('#mensaje','Consulta de prueba');page.select_option('#motivo',index=1)
    page.locator('#formContacto button[type="submit"]').click()
    page.wait_for_function("document.querySelector('.mensaje-formulario')?.textContent.includes('✓')")
    assert solicitudes[-1][0]=='/api/contacto'
    print('OK: formulario de contacto.')

    page.set_viewport_size({'width':375,'height':812})
    for ruta in ['/','/servicios','/registro','/citas','/contacto','/login']:
        ir(page,ruta)
        assert page.evaluate('document.documentElement.scrollWidth <= window.innerWidth + 1'), 'Desbordamiento horizontal: '+ruta
    ir(page,'/servicios')
    page.locator('.servicio-click').first.click()
    assert 'mostrar' in page.locator('#modalServicio').get_attribute('class')
    page.keyboard.press('Escape')
    assert 'mostrar' not in page.locator('#modalServicio').get_attribute('class')
    print('OK: modal de servicios conservado.')
    assert not errores, errores
    print('OK: seis pantallas a 375 px sin desbordamiento horizontal ni errores JavaScript.')
    browser.close()
