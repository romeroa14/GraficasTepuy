/* 
    Script: Alternar visibilidad del panel y mostrar informacion al buscar por filtros
    Autores: Juan
    Fecha de creacion: 18-01-2024
 */

import { getGlobalVariable } from './mapa.js';
import { AlternarPanel } from "./panelInformacion.js";
import { resetLayer } from './mapa.js';

// ---------- BOTON PARA RESTABLECER ----------

const BotonRestablecer = L.Control.extend({
    options: {
        position: 'topleft'
    },

    onAdd: function (map) {
        var div = L.DomUtil.create('div');

        var label = L.DomUtil.create('label', '', div);
        label.setAttribute('for', 'boton_restablecer');
        
        var img = L.DomUtil.create('img', 'boton-restablecer', label);
        img.setAttribute('id', 'boton_restablecer');
        img.setAttribute('src', './icon/mapa-venezuela.png');

        // Evento para restablecer capas y marcas en el mapa
        img.addEventListener('click', function () {
            map.flyTo([7, -66], 6)
            if (getGlobalVariable()) {
                map.removeLayer(getGlobalVariable());
            }
            if(panel_boton.checked){
                AlternarPanel(false)
                panel_boton.checked = false
            }
            resetLayer()
        }); 
        return div;
    }
})

// ---------- EXPORTAR FUNCIONES Y ARCHIVOS ----------
export { BotonRestablecer };
