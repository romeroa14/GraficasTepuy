/* 
    Script: Inicializar mapa junto a las capas y eventos de Estado y Municipios
    Autores: Alfredo, Victor, Diego y Jairo
    Fecha de creacion: 07-12-2023
 */

import { Filtrar } from "./funciones/filtrarMarcas.js"; 
import { BotonMostraPanel } from "./panelInformacion.js";
import { BotonRestablecer } from "./botonRestablecer.js";
import { geojsonStyle, municipiosStyle, hoverMunicipiosStyle, selectedMunicipioStyle, highlightStyle, hoverStyle } from "./mapaEstilos.js";



// ---------- INICIALIZAR MAPA ----------

// Crear mapa con una base detallada
var mapa = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© The Ghost", opacity: 0.3,
});

var map = L.map("map", {
    center: [39.73, -104.99],
    zoom: 10,
    minZoom: 6,
    maxZoom: 13,
    layers: [mapa],
}).setView([7, -66], 6);


// Enlaces con los GeoJSON de Venezuela y municipios
var geojsonLink = "./geo/estados.geojson";
var municipiosLink = "./geo/municipios.geojson";




// ---------- CONFIGURAR ESTADOS Y MUNICIPIOS DEL MAPA ---------- SE QUEDA

map.addControl(new BotonMostraPanel());
map.addControl(new BotonRestablecer());

var geojsonLayer;
var municipiosLayer;
var municipiosLayerTmp;
var selectedLayer = null; // Para almacenar la capa seleccionada actualmente
var selectedLayerMunicipio = null; // Para almacenar la capa seleccionada actualmente el municipio
let marcasHover;

function resetLayer(){
    // map.removeLayer(geojsonLayer);
    if(municipiosLayer) map.removeLayer(municipiosLayer);
    if(municipiosLayerTmp) map.removeLayer(municipiosLayerTmp);
    // geojsonLayer.resetStyle(selectedLayer);
    // map.removeLayer(selectedLayerMunicipio);
    // map.removeLayer(marcasHover);

    // selectedLayer.setStyle(hoverStyle)
    estadoActualGlobal = ''
}
export { resetLayer }

// sharedModule.js
let marcasFiltradas;

export function getGlobalVariable() {
  return marcasFiltradas;
}

export function setGlobalVariable(newValue) {
    marcasFiltradas = newValue;
}

// Función para manejar el clic en los Estados
function onEachFeature(feature, layer) {

    // Popup que muestra el nombre del estado
    layer.bindTooltip("<strong>" + feature.properties.ESTADO + "</strong>", { permanent: false, direction: "top" });
    
    layer.on({
        click: function (e) {
            estadoActualGlobal = feature.properties.ESTADO

            // Hacer zoom al estado seleccionado
            map.fitBounds(e.target.getBounds());

            // Si ya hay una capa seleccionada, desmarcarla
            if (selectedLayer) {
                geojsonLayer.resetStyle(selectedLayer);
            }

            // Resaltar la capa actual
            layer.setStyle(highlightStyle);
            
            // Mostrar municipios del estado seleccionado
            loadMunicipios(feature.properties.COD_ESTADO);
            selectedLayer = layer;

            // Mostrar marcas por estado
            if (marcasFiltradas) {
                map.removeLayer(marcasFiltradas);
            }
            marcasFiltradas = Filtrar(feature.properties.ESTADO).addTo(map);
            
            // Eliminar marcas hover
            if (marcasHover) {
                marcasHover.forEach(marcador => {
                    marcador.remove(map);
                });
            }
            
        },
        mouseover: function (e) {

            // Resaltar la capa al pasar el mouse
            if (!selectedLayer || (selectedLayer && selectedLayer !== layer)) {
                layer.setStyle(hoverStyle);
            }
            
            layer.openTooltip();

            // Eliminar marcas hover
            if (marcasHover) {
                marcasHover.forEach(marcador => {
                    marcador.remove(map);
                });
            }
            
            // Eliminar marcas hover si hay mucho zoom
            if(map.getZoom() <= 8 && map.getZoom() >= 5){
                marcasHover = Filtrar(feature.properties.ESTADO, null, null, true);
            }else{
                return;
            }

            // Añadir al mapa marcas hover
            marcasHover.forEach(marcador => {
                marcador.addTo(map);
            });

            // Punto central para las marcas hover
            var mouseX = e.latlng.lat;
            var mouseY = e.latlng.lng;

            // Mostrar las marcas hover al rededor del punto central
            marcasHover.forEach((marcador, index) => {
                var distancia = 1.5
                var nuevaLatitud = mouseX + Math.cos(index * (2 * Math.PI) / marcasHover.length) * distancia;
                var nuevaLongitud = mouseY + Math.sin(index * (2 * Math.PI) / marcasHover.length) * distancia;

                // Actualiza las coordenadas del marcador hover
                marcador.setLatLng([nuevaLatitud, nuevaLongitud]);
          
                // Opacidad del marcador hover
                marcador.setOpacity(0.5);
            });
        },
        mouseout: function (e) {
            closeAllTooltips();

            // Restaurar el estilo al quitar el mouse
            if (!selectedLayer || (selectedLayer && selectedLayer !== layer)) {
                geojsonLayer.resetStyle(layer);
            }
            layer.closeTooltip();

            // Eliminar marcas hover
            if (marcasHover) {
                marcasHover.forEach(marcador => {
                    marcador.remove(map);
                });
            }
           
        }
    });
}

// Funcion para manejar el clic en Municipios
function onEachFeatureMunicipios(feature, layer) {
    layer.bindTooltip(feature.properties.MUNICIPIO, { permanent: false, direction: "bottom" });
    layer.on({
        click: function (e) {

            // Hacer zoom al estado seleccionado (deshabilitado por comodidad)
            // map.fitBounds(e.target.getBounds());

            // Si ya hay una capa seleccionada, desmarcarla
            if (selectedLayerMunicipio) {
                geojsonLayer.resetStyle(selectedLayerMunicipio);
            }

            // Resaltar la capa actual
            layer.setStyle(selectedMunicipioStyle);
            selectedLayerMunicipio = layer;

            // Mostrar marcas por estado y municipio
            if (marcasFiltradas) {
                map.removeLayer(marcasFiltradas);
            }
            marcasFiltradas = Filtrar(feature.properties.ESTADO, feature.properties.MUNICIPIO).addTo(map);
        },
        mouseover: function (e) {

            // Resaltar la capa al pasar el mouse
            if (!selectedLayerMunicipio || (selectedLayerMunicipio && selectedLayerMunicipio !== layer)) {
                layer.setStyle(hoverMunicipiosStyle);
            }

            // Mostrar el nombre del estado en el popup al hacer hover (bug)
            // layer.openTooltip();
        },
        mouseout: function (e) {
            closeAllTooltips(); 
            
            // Restaurar el estilo al quitar el mouse
            if (!selectedLayerMunicipio || (selectedLayerMunicipio && selectedLayerMunicipio !== layer)) {
                geojsonLayer.resetStyle(layer);
            }
            
            // Esconder el nombre del estado en el popup al hacer hover (bug)
            // layer.closeTooltip();
        },
    });
}

// Función para cargar los municipios del estado seleccionado
function loadMunicipios(selectedGID) {

    // Borrar la capa de municipios actual
    if (municipiosLayerTmp) {
        map.removeLayer(municipiosLayerTmp);
    }

    // Filtrar los municipios correspondientes al estado seleccionado
    municipiosLayerTmp = municipiosLayer;
    var filteredMunicipios = municipiosLayerTmp.toGeoJSON().features.filter((feature) => feature.properties.COD_ESTADO === selectedGID);

    // Crear y añadir la nueva capa de municipios
    municipiosLayerTmp = L.geoJSON(filteredMunicipios, {
        style: municipiosStyle,
        onEachFeature: onEachFeatureMunicipios,
    }).addTo(map);
}

// Función para manejar el clic en un municipio
function onEachMunicipio(feature, layer) {
    layer.on({
        click: function () {

            // Si ya hay un municipio seleccionado, desmarcarlo
            if (selectedMunicipio) {
                municipiosLayer.resetStyle(selectedMunicipio);
            }

            // Resaltar el municipio actual
            layer.setStyle(selectedMunicipioStyle);

            // Almacenar el municipio actual como seleccionado
            selectedMunicipio = layer;
        },
        mouseover: function (e) {

            // Resaltar el municipio al pasar el mouse
            layer.setStyle(hoverMunicipiosStyle);
        },
        mouseout: function (e) {

            // Restaurar el estilo al quitar el mouse, pero mantenerlo resaltado si está seleccionado
            if (selectedMunicipio !== layer) {
                municipiosLayer.resetStyle(layer);
            }
        },
    });
}

// Añadir capa de estados al mapa
fetch(geojsonLink)
    .then((response) => response.json())
    .then((data) => {
        geojsonLayer = L.geoJSON(data, {
            style: geojsonStyle,
            onEachFeature: onEachFeature,
        }).addTo(map);
    });

// Cargar capa de municipios
fetch(municipiosLink)
    .then((response) => response.json())
    .then((data) => {
        municipiosLayer = L.geoJSON(data, {
            style: municipiosStyle,
            onEachFeature: onEachMunicipio,
        });
    }); //,



// ---------- LEYENDA DEL MAPA ---------- SE VA

let estadoActualGlobal = '';

// Agregando leyenda
const leyenda = L.control.legend({
    position: "bottomleft",
    collapse: false,
    SymbolWidht: 22,
    opacity: 1,
    column: 1,
    color: "#000000",
    legends: [
        {
            label: "Universidades Publicas",
            filcolor: "#000000",
            type: "image",
            url: "./img/marcadores/default-marcador.png",
            layers: [],
            inactive: true
        },
        {
            label: "Universidades Privadas",
            color: "#000000",
            type: "image",
            url: "./img/marcadores/default-privada-marcador.png",
            SymbolWidht: 22,
            layers: [],
            inactive: true
        }

    ]
}).addTo(map);


// console.log(leyenda.options.legends[0].inactive);
let actividadMarcaPublica = document.querySelector('.leaflet-legend-item')
let actividadMarcaPrivada = document.querySelector("section > div > div:nth-child(2)")
let valorCambio = false;
let valorCambio2 = false;

actividadMarcaPublica.addEventListener("click",()=>{
    if (valorCambio == true) {
        if (marcasFiltradas) {
            map.removeLayer(marcasFiltradas);
        }
        
        valorCambio = false; 
    } else {
        if (marcasFiltradas) {
            map.removeLayer(marcasFiltradas);
        }
        marcasFiltradas = Filtrar(estadoActualGlobal.toLocaleUpperCase(), null, null, null, 'Publica').addTo(map)
        valorCambio = true; 
    }
})

actividadMarcaPrivada.addEventListener("click",()=>{
    if (valorCambio2 == true) {
        if (marcasFiltradas) {
            map.removeLayer(marcasFiltradas);
        }
        
        valorCambio2 = false; 
    } else {
        if (marcasFiltradas) {
            map.removeLayer(marcasFiltradas);
        }
        marcasFiltradas = Filtrar(estadoActualGlobal.toLocaleUpperCase(), null, null, null, 'Privada').addTo(map)
        valorCambio2 = true; 
    }
})

// Cambiar titulo de la leyenda
let titulo = document.querySelector('.leaflet-legend-title')
titulo.innerHTML = '';




// ---------- EVENTOS EN EL MAPA ---------- SE QUEDA
map.on({

    // Solucion al bug de los ToolTips persistentes de los estados y municipios
    dragend: function () {
        setTimeout(() => {
            closeAllTooltips();
        }, 1);
    },
    zoomstart: function(){

        // Ocultar los bordes al comenzar a hacer zoom
        geojsonLayer.setStyle({ weight: 0 });
        municipiosLayer.setStyle({ weight: 0 });
    },
    zoomend: function() {

        // Mostrar los bordes al finalizar el zoom
        geojsonLayer.setStyle(geojsonStyle);
        municipiosLayer.setStyle(geojsonStyle);

        // Borrar marcas hover en un determinado nivel de zoom
        if(map.getZoom() < 5 || map.getZoom() > 8){
            if (marcasHover) {
                marcasHover.forEach(marcador => {
                    marcador.remove(map);
                });
            }
        }
    }
});

function closeAllTooltips() {
    map.eachLayer(function (layer) {
        if (layer.closeTooltip) {
            layer.closeTooltip();
        }
    });
}

export { geojsonLink, municipiosLink }
export { map }