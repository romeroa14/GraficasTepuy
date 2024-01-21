/* 
    Script: Alternar visibilidad del panel y mostrar informacion al buscar por filtros
    Autores: Juan
    Fecha de creacion: 18-01-2024
 */

import { constructorCarreras } from "./marcas.js";
import { constructorAutoridades } from "./marcas.js";
import { universidadesData } from "./data/universidadesData.js";



// ---------- FUNCION PARA MOSTRAR PANEL DE INFORMACION ----------

function mostrarPanel(siglas) {
    // Mostrar la infomacion de la uni filtrada
    panel_informacion.classList.remove("hide");

    // LLenar datos
    panel_nombre.innerHTML = `${universidadesData[siglas]["nombre"]} (${universidadesData[siglas]["siglas"]})`;
    panel_descripcion.innerHTML = universidadesData[siglas]["descripcion"];
    panel_portada.src = universidadesData[siglas]["portada"];
    panel_pagina.setAttribute('href', universidadesData[siglas]["pagina"]);
    panel_pagina.innerHTML = universidadesData[siglas]["pagina"];
    panel_mision.innerHTML = universidadesData[siglas]["mision"];
    panel_vision.innerHTML = universidadesData[siglas]["vision"];
    panel_autoridades.appendChild(constructorAutoridades(universidadesData[siglas]["autoridades"]))
    panel_carreras.appendChild(constructorCarreras(siglas))
    panel_direccion.innerHTML = universidadesData[siglas]["direccion"];
    panel_logo.src = universidadesData[siglas]["logo"];

    // Si la portada no carga/existe, mostrar una imagen por defecto (bug)
    console.log(panel_portada.onerror);
    panel_portada.onerror = function () {panel_portada.src  = './img/no-imagen.png'; }
    panel_logo.onerror = function () {panel_logo.src  = './img/no-imagen.png'; }

    // Verificar si el panel esta oculto para mostrarlo
    if(!panel_boton.checked){
        AlternarPanel(true)
        panel_boton.checked = true
        contenedor_panel_boton.classList.remove('hide');
    }
}


// ---------- BOTON LATERAL PARA ALTERNAR PANEL ----------
const BotonMostraPanel = L.Control.extend({
    options: {
        position: 'bottomright'
    },

    onAdd: function (map) {
        var div = L.DomUtil.create('div', 'hide');
        div.setAttribute('id', 'contenedor_panel_boton');

        var input = L.DomUtil.create('input', 'hide', div);
        input.setAttribute('type', 'checkbox');
        input.setAttribute('id', 'panel_boton');

        var label = L.DomUtil.create('label', '', div);
        label.setAttribute('for', 'panel_boton');
        
        var img = L.DomUtil.create('img', 'panel-boton-icono', label);
        img.setAttribute('id', 'panel_boton_icono');
        img.setAttribute('src', './icon/panel-on.png');   

        // Evento change para el checkbox
        input.addEventListener('change', function () {
            if (input.checked) {
                AlternarPanel(true)
            } else {
                AlternarPanel(false)
            }
        }); 
        return div;
    }
})

function AlternarPanel(mostrar){
    if(mostrar){
        panel_columna.classList.add('col-4');
        panel_columna.classList.remove('hide');
        
        mapa_columna.classList.remove('col-12');
        mapa_columna.classList.add('col-8');
    }else{
        panel_columna.classList.remove('col-4');
        panel_columna.classList.add('hide');

        mapa_columna.classList.remove('col-8');
        mapa_columna.classList.add('col-12');
    }
}



// ---------- EXPORTAR FUNCIONES Y ARCHIVOS ----------
export { AlternarPanel };
export { mostrarPanel };
export { BotonMostraPanel };
