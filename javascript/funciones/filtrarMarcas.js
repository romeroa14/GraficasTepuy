/* 
    Script: 
    Autor: Juan
    Fecha de creacion: 18/12/2023
 */

import { marcasGlobal } from "../marcas.js";
import { marcasHover } from "../marcas.js";



// ---------- FILTRADO DE MARCAS ----------
var marcasFiltradas;
var marcasHoverTemp;

// Funcion para mostrar marcas segun el estado o municipio
function Filtrar(estado, municipio, siglas, hover, tipo) {
    
    // Por estado y municipio
    if (estado && tipo) {
        console.log("Filtrando por: estado y tipo")
        marcasFiltradas = marcasGlobal
            .filter((objeto) => objeto.estado == estado && objeto.tipo == tipo)
            .map((objeto) => objeto.marca);
            return (marcasFiltradas = L.layerGroup([...marcasFiltradas]));
    }

    // Devolver marcas publicas/privadas
    if (tipo) {
        marcasFiltradas = marcasGlobal
            .filter((objeto) => objeto.tipo == tipo)
            .map((objeto) => objeto.marca);
            return (marcasFiltradas = L.layerGroup([...marcasFiltradas]));            
    }

    // Devolver array solo con marcas
    if (hover) {
        // console.log("Filtrando por: hover")
        marcasHoverTemp = marcasHover
            .filter((objeto) => objeto.estado == estado)
            .map((objeto) => objeto.marca);
            return (marcasHoverTemp);
    }

    // Por siglas
    if (siglas) {
        console.log("Filtrando por: siglas")
        marcasFiltradas = marcasGlobal
            .filter((objeto) => objeto.siglas == siglas)
            .map((objeto) => objeto.marca);
            return (marcasFiltradas = L.layerGroup([...marcasFiltradas]));
    }

    // Por estado y municipio
    if (estado && municipio) {
        console.log("Filtrando por: estado y municipio")
        marcasFiltradas = marcasGlobal
            .filter((objeto) => objeto.estado == estado && objeto.municipio == municipio)
            .map((objeto) => objeto.marca);
            return (marcasFiltradas = L.layerGroup([...marcasFiltradas]));
    }

    // Por estado
    if (estado) {
        console.log("estado")
        marcasFiltradas = marcasGlobal
            .filter((objeto) => objeto.estado == estado)
            .map((objeto) => objeto.marca);
            return (marcasFiltradas = L.layerGroup([...marcasFiltradas]));
    }
}
    
export { Filtrar };
export { marcasGlobal };