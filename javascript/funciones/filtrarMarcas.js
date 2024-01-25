/* 
    Script: 
    Autor: Juan
    Fecha de creacion: 18/12/2023
 */

import { marcasGlobal } from "../marcas.js";
import { marcasHover } from "../marcas.js";

// Inicializar variables para las marcas filtradas y las temporales (hover)
var marcasFiltradas;
var marcasHoverTemp;

// Funcion para mostrar marcas segun el estado o municipio
function Filtrar(tipo, estado, municipio, siglas, hover) {  
    if (tipo === '') return console.log("Filtrando por: nada");

    // Devolver array solo con marcas
    if (hover) {
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
    if (tipo && estado && municipio) {
        console.log("Filtrando por: estado y municipio")
        if (tipo === "Ambas"){
            marcasFiltradas = marcasGlobal
            .filter((objeto) => objeto.estado == estado && objeto.municipio == municipio)
            .map((objeto) => objeto.marca);
        } else {
            marcasFiltradas = marcasGlobal
            .filter((objeto) => objeto.tipo == tipo && objeto.estado == estado && objeto.municipio == municipio)
            .map((objeto) => objeto.marca);
        }
        return (marcasFiltradas = L.layerGroup([...marcasFiltradas])); 
    }

    // Por estado
    if (tipo && estado) {
        console.log("Filtrando por: Estado")
        if(tipo === "Ambas"){
            marcasFiltradas = marcasGlobal
            .filter((objeto) => objeto.estado == estado)
            .map((objeto) => objeto.marca); 
        } else {
            marcasFiltradas = marcasGlobal
            .filter((objeto) => objeto.tipo == tipo && objeto.estado == estado)
            .map((objeto) => objeto.marca);
        }
        return (marcasFiltradas = L.layerGroup([...marcasFiltradas]));
    }

    // Devolver marcas publicas, privadas o ambas
    if (tipo) {
        console.log("Filtrando por: pais")
        if (tipo === "Ambas"){
            marcasFiltradas = marcasGlobal
            .map((objeto) => objeto.marca);
        } else {
            marcasFiltradas = marcasGlobal
            .filter((objeto) => objeto.tipo == tipo)
            .map((objeto) => objeto.marca);
        }
        return (marcasFiltradas = L.layerGroup([...marcasFiltradas]));
    }
}
    
export { Filtrar };
export { marcasGlobal };