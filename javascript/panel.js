/* 
    Script: Alternar visibilidad del panel y cargar informacion luego de buscar por filtros
    Autores: Juan
    Fecha de creacion: 18-01-2024
 */

import { constructorCarreras } from "./marcas.js";
import { constructorAutoridades } from "./marcas.js";
import { UNI_DATA } from "./data/universidadesData.js";
import { crearGrafica } from "./graficos.js";

export { AlternarPanel };
export { mostrarPanel };
export { BotonMostraPanel };



// ---------- FUNCION PARA MOSTRAR PANEL DE INFORMACION ----------
function mostrarPanel(siglas) {
    
    // Mostrar la infomacion de la uni filtrada
    panel_informacion.removeAttribute('hidden')

    // LLenar datos
    panel_nombre.innerHTML = `${UNI_DATA[siglas]["nombre"]} (${UNI_DATA[siglas]["siglas"]})`;
    panel_descripcion.innerHTML = UNI_DATA[siglas]["descripcion"];
    panel_fachada.src = UNI_DATA[siglas]["portada"];
    panel_pagina.setAttribute('href', UNI_DATA[siglas]["pagina"]);
    panel_pagina.innerHTML = UNI_DATA[siglas]["pagina"];
    panel_mision.innerHTML = UNI_DATA[siglas]["mision"];
    panel_vision.innerHTML = UNI_DATA[siglas]["vision"];
    panel_autoridades.appendChild(constructorAutoridades(UNI_DATA[siglas]["autoridades"]));
    panel_carreras.appendChild(constructorCarreras(siglas));
    panel_direccion.innerHTML = UNI_DATA[siglas]["direccion"];
    panel_logo.src = UNI_DATA[siglas]["logo"];

    panel_Graph_estudiantes.innerHTML = ""
    panel_Graph_Transporte.innerHTML = ""
    panel_Graph_Personal.innerHTML = ""
 
    // Creamos graficas en los divs nuevos
    crearGrafica(document.getElementById('panel_Graph_estudiantes'),'Cantidad_estudiantes', ['Nuevo Ingreso', 'Reingresos', 'Egresados'], [406, 508, 670], ['#7448c250', '#21c0d780', '#d99e2b50', '#cd3a8150', '#9c99cc50'], 'pie')
    crearGrafica(document.getElementById('panel_Graph_Transporte'),'Transporte', ['Rutas Sede 1: ', 'Rutas Sede 2: ', 'Rutas Sede 3: ', 'Rutas Sede 4: '], [40, 50, 60, 30], ['#7448c250', '#21c0d780', '#d99e2b50', '#cd3a8150', '#9c99cc50'], 'pie')
    crearGrafica(document.getElementById('panel_Graph_Personal'),'Personal', ['Personal Administrativo', 'Personal de Limpieza', 'Personal Transporte', 'Personal Comedor','Personal Obrero'], [40, 50, 60, 30], ['#7448c250', '#21c0d780', '#d99e2b50', '#cd3a8150', '#9c99cc50'], 'pie')


    // Verificar si el panel esta oculto para mostrarlo
    if(!boton_alternar.checked){
        AlternarPanel(true)
        boton_alternar.checked = true
        contenedor_boton_alternar.removeAttribute('hidden');
    }

    // Si la portada no carga/existe, mostrar una imagen por defectp
    panel_fachada.onerror = function () {panel_fachada.src = './img/no-imagen.png';}
    panel_logo.onerror = function () {panel_logo.src = './img/no-imagen.png';}
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
