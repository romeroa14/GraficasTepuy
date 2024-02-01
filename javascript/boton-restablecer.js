/* 
    Script: Alternar visibilidad del panel y mostrar informacion al buscar por filtros
    Autores: Juan
    Fecha de creacion: 18-01-2024
 */

import { getGlobal, setGlobal } from "./funciones/variablesGlobales.js"; 
import { AlternarPanel } from "./panel.js";
import { resetLayer } from './mapa.js';

export { botonRestablecer };



// ---------- BOTON PARA RESTABLECER ----------
const botonRestablecer = L.Control.extend({
    options: {
        position: 'topleft'
    },

    onAdd: function (map) {

        // Crear estructura HTML del boton
        var div = L.DomUtil.create('div');

        var label = L.DomUtil.create('label', '', div);
        label.setAttribute('for', 'boton_restablecer');
        
        var img = L.DomUtil.create('img', 'contenedor-boton-restablecer', label);
        img.setAttribute('id', 'boton_restablecer');
        img.setAttribute('src', './icon/mapa-venezuela.png');

        // Evento para restablecer capas y marcas en el mapa
        img.addEventListener('click', function () {
            map.flyTo([7, -66], 6)
            if (getGlobal('marcasFiltradas')) {
                map.removeLayer(getGlobal('marcasFiltradas'));
            }
            if(boton_alternar.checked){
                AlternarPanel(false)
                boton_alternar.checked = false
            }
            resetLayer(true)
        }); 
        
        return div;
    }
})
