/* 
    Script: Alternar visibilidad del panel y cargar informacion luego de buscar por filtros
    Autores: Juan
    Fecha de creacion: 18-01-2024
 */

import { constructorCarreras } from "./marcas.js";
import { constructorAutoridades } from "./marcas.js";
// import { UNI_DATA } from "./data/universidadesData.js";
// import { crearGrafica } from "./graficos.js";

export { AlternarPanel };
export { mostrarPanel };
export { BotonMostraPanel };



// ---------- FUNCION PARA MOSTRAR PANEL DE INFORMACION ----------
function mostrarPanel(siglas) {
    // let universidad = UNI_DATA[siglas]
    
    // Mostrar la infomacion de la uni filtrada
    panel_informacion.removeAttribute('hidden')
    fetch('./javascript/consulta_panel_informacion.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'siglas=' + siglas
    }).then(res => {
        if (!res.ok) {
            throw new Error('Hubo un error en la respuesta');
        }
        return res.json();
    })
    .then(data => {
        console.log('Datos recibidos:', data);
        let nombre_uni = data[0][0][0].nombre
        console.log(nombre_uni);
        panel_nombre.innerHTML = data[0][0][0].nombre+' - ('+data[0][0][0].siglas+')';
        panel_descripcion.innerHTML = data[0][0][0].descripcion;
        panel_fachada.src = data[0][0][0].portada;
        panel_pagina.setAttribute('href', data[0][0][0].pagina);
        panel_pagina.innerHTML = data[0][0][0].pagina;
        panel_mision.innerHTML = data[0][0][0].mision;
        panel_vision.innerHTML = data[0][0][0].vision;
        panel_autoridades.appendChild(constructorAutoridades(data[0][1]));
        panel_carreras.appendChild(constructorCarreras(data[0][0][0].siglas));
        panel_direccion.innerHTML = data[0][0][0].direccion;
        panel_logo.src = data[0][0][0].logo;

        // Verificar si el panel esta oculto para mostrarlo
    if(!boton_alternar.checked){
        AlternarPanel(true)
        boton_alternar.checked = true
        contenedor_boton_alternar.removeAttribute('hidden');
    }

    // Si la portada no carga/existe, mostrar una imagen por defectp
    panel_fachada.onerror = function () {panel_fachada.src = './img/no-imagen.png';}
    panel_logo.onerror = function () {panel_logo.src = './img/no-imagen.png';}


    }).catch(error => console.log(error));

    // // LLenar datos
    // panel_nombre.innerHTML = `${UNI_DATA[siglas]["nombre"]} (${universidad["siglas"]})`;
    // panel_descripcion.innerHTML = universidad["descripcion"];
    // panel_fachada.src = universidad["portada"];
    // panel_pagina.setAttribute('href', universidad["pagina"]);
    // panel_pagina.innerHTML = universidad["pagina"];
    // panel_mision.innerHTML = universidad["mision"];
    // panel_vision.innerHTML = universidad["vision"];
    // panel_autoridades.appendChild(constructorAutoridades(universidad["autoridades"]));
    // panel_carreras.appendChild(constructorCarreras(siglas));
    // panel_direccion.innerHTML = universidad["direccion"];
    // panel_logo.src = universidad["logo"];

    // panel_Graph_estudiantes.innerHTML = ""
    // panel_Graph_Transporte.innerHTML = ""
    // panel_Graph_Personal.innerHTML = ""
 
    // // Creamos graficas en los divs nuevos
    // crearGrafica(document.getElementById('panel_Graph_estudiantes'),'Cantidad_estudiantes', ['Nuevo Ingreso', 'Reingresos', 'Egresados'], [406, 508, 670], ['#7448c250', '#21c0d780', '#d99e2b50', '#cd3a8150', '#9c99cc50'], 'pie')
    // crearGrafica(document.getElementById('panel_Graph_Transporte'),'Transporte', ['Rutas Sede 1: ', 'Rutas Sede 2: ', 'Rutas Sede 3: ', 'Rutas Sede 4: '], [40, 50, 60, 30], ['#7448c250', '#21c0d780', '#d99e2b50', '#cd3a8150', '#9c99cc50'], 'pie')
    // crearGrafica(document.getElementById('panel_Graph_Personal'),'Personal', ['Personal Administrativo', 'Personal de Limpieza', 'Personal Transporte', 'Personal Comedor','Personal Obrero'], [40, 50, 60, 30], ['#7448c250', '#21c0d780', '#d99e2b50', '#cd3a8150', '#9c99cc50'], 'pie')


    
}



// ---------- BOTON ALTERNAR PANEL ----------
const BotonMostraPanel = L.Control.extend({
    options: {
        position: 'bottomright'
    },

    onAdd: function (map) {

        // Crear estructura HTML del boton
        var contenedorBoton = L.DomUtil.create('div');
        contenedorBoton.setAttribute('id', 'contenedor_boton_alternar');
        contenedorBoton.setAttribute('hidden', 'true');

        var input = L.DomUtil.create('input', '', contenedorBoton);
        input.setAttribute('type', 'checkbox');
        input.setAttribute('id', 'boton_alternar');
        input.setAttribute('hidden', 'true');

        var label = L.DomUtil.create('label', '', contenedorBoton);
        label.setAttribute('for', 'boton_alternar');
        
        var img = L.DomUtil.create('img', 'boton-alternar-icono', label);
        img.setAttribute('id', 'boton_alternar_icono');
        img.setAttribute('src', './icon/panel-on.png');   

        // Evento change para el checkbox
        input.addEventListener('change', function () {
            if (input.checked) {
                AlternarPanel(true)
            } else {
                AlternarPanel(false)
            }
        }); 
        return contenedorBoton;
    }
})

// Funcion para hacer aparecer u ocultar el boton
function AlternarPanel(mostrar){
    if(mostrar){
        panel_columna.classList.add('col-4');
        panel_columna.removeAttribute('hidden');
        
        mapa_columna.classList.remove('col-12');
        mapa_columna.classList.add('col-8');
    }else{
        panel_columna.classList.remove('col-4');
        panel_columna.setAttribute('hidden', 'true');

        mapa_columna.classList.remove('col-8');
        mapa_columna.classList.add('col-12');
    }
}
