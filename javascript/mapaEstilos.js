/* 
    Script: Bordes y colores del mapa
    Autores: Alfredo y Victor
    Fecha de creacion: 07-12-2023
 */

// ---------- ESTILOS DE LOS ESTADOS Y MUNICIPIOS ----------

// Estilos base para los Estados
var geojsonStyle = {
    color: "rgb(70, 70, 70)",
    weight: 1,
    fillColor: "#FF0000",
    fillOpacity: 0.15,
};

// Estilos para resaltar al hacer clic en los Municipios
var municipiosStyle = {
    color: "rgb(70, 70, 70)",
    weight: 1,
    fillColor: "#FF0000",
    fillOpacity: 0.15,
};

// Estilos para resaltar al pasar el mouse en Municipios (hover)
var hoverMunicipiosStyle = {
    color: "rgb(70, 70, 70)",
    weight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.5,
};

var selectedMunicipioStyle = {
    color: "rgb(70, 70, 70)",
    weight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.5,
};

// Estilos para resaltar al hacer clic en los Estados
var highlightStyle = {
    color: "rgb(70, 70, 70)",
    weight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.3,
};

// Estilos para resaltar al pasar el mouse por los Estados
var hoverStyle = {
    color: "rgb(70, 70, 70)",
    weight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.3,
};

// Añadir boton para alternar el panel
var BotonMostraPanel = L.Control.extend({
    options: {
        position: 'bottomright'
    }
})


export { geojsonStyle, municipiosStyle, hoverMunicipiosStyle, selectedMunicipioStyle, highlightStyle, hoverStyle }