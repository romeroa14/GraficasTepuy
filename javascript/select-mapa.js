/* 
    Script: Select de estados y universidades
    Autor: Victor y Juan
 */

import { UNI_DATA } from "./data/universidadesData.js";
import { Filtrar } from "./funciones/filtrarMarcas.js";
import { map } from "./mapa.js";
import { AlternarPanel, mostrarPanel } from "./panel.js";
import { eliminarAcentos } from "./funciones/eliminarAcentos.js";
import { getGlobal, setGlobal } from "./funciones/variablesGlobales.js";
import { listaEstaMuni } from "./data/estados-municipios.js";

// Valores por defecto del select de estado
select_mapa_estado.innerHTML = `<option disabled selected value="none">Seleccionar estado</option>`
select_mapa_estado.innerHTML += `<option value="Todos">Todos</option>`

// Valores por defecto del select de universidad
select_mapa_uni.innerHTML = `<option disabled selected value="none">Universidades</option>`
select_mapa_uni.innerHTML += `<option value="Todos">Todas</option>`

// Llenar el select de estados con los estados de listaEstaMuni
for (const estado in listaEstaMuni) {
    select_mapa_estado.innerHTML += `<option value="${estado}">${estado}</option>`
}

// ---------- EVENTO DEL SELECT DE ESTADOS DEL MAPA ----------
select_mapa_estado.addEventListener('click', function() {
    if (select_mapa_estado.value == 'none') return

    // Mostrar marcas por estado
    if (getGlobal('marcasFiltradas')) {
        map.removeLayer(getGlobal('marcasFiltradas'));
    }

    // Crear array donde se guardará el resultado de las universidades filtradas
    let uniFiltradas = []
    let estado = eliminarAcentos(select_mapa_estado.value.toUpperCase()) 
    let tipo = getGlobal("tipoActual")

    // Convertir UNI_DATA en un array para poder filtrarlo
    const uniArray = Object.values(UNI_DATA);
    
    // Filtrar universidades
    if (select_mapa_estado.value == "Todos") {
        if (tipo == "Ambas") {

            // Filtrar si estados = todos y tipo = ambas
            uniFiltradas = uniArray
            .map(objeto => ({ nombre: objeto.nombre, siglas: objeto.siglas }));
        } else {

            // Filtrar si estados = todos y tipo = especifico
            uniFiltradas = uniArray
            .filter((objeto) => objeto.tipo == tipo)
            .map(objeto => ({ nombre: objeto.nombre, siglas: objeto.siglas }));
        }
        select_mapa_uni.disabled = true
        setGlobal('marcasFiltradas', Filtrar(tipo).addTo(map))
        map.flyTo([7, -66], 6)

    } else {
        setGlobal("estadoActual", estado)
        setGlobal('municipioActual', null)
        if (tipo == "Ambas") {
            uniFiltradas = uniArray
            .filter((objeto) => objeto.estado == estado)
            .map(objeto => ({ nombre: objeto.nombre, siglas: objeto.siglas }));
        } else {
            uniFiltradas = uniArray
            .filter((objeto) => objeto.estado == estado && objeto.tipo == tipo)
            .map(objeto => ({ nombre: objeto.nombre, siglas: objeto.siglas }));
        }
        select_mapa_uni.disabled = false
        setGlobal('marcasFiltradas', Filtrar(tipo, estado.toUpperCase()).addTo(map))
        estado = estado.toLocaleLowerCase()
        let coordenadas = listaEstaMuni[estado].coordenadas
        let zoom = listaEstaMuni[estado].zoom
        map.flyTo(coordenadas, zoom)
    }
    
    // Añadir al select cada universidad de la forma: <option value="siglas"> "(siglas) - nombre"</option>
    select_mapa_uni.innerHTML = '<option disabled selected>Universidad</option>'
    select_mapa_uni.innerHTML += '<option value="Todos">Todas</option>'
    for (const uni of uniFiltradas) {
        select_mapa_uni.innerHTML += `<option value="${uni.siglas}">(${uni.siglas}) - ${uni.nombre}</option>`
    }
})

// ---------- EVENTO DEL SELECT DE UNIVERSIDADES DEL MAPA ----------
select_mapa_uni.addEventListener('change', function() {
    if (select_mapa_uni.value == 'none') return

    // Mostrar marcas por siglas
    if (getGlobal('marcasFiltradas')) {
        map.removeLayer(getGlobal('marcasFiltradas'));
    }

    if (select_mapa_uni.value == "Todos") {
        setGlobal('marcasFiltradas', Filtrar(getGlobal("tipoActual"), getGlobal("estadoActual")).addTo(map))
        AlternarPanel(false)
    } else {
        setGlobal('marcasFiltradas', Filtrar(getGlobal("tipoActual"), getGlobal("estadoActual"), null, select_mapa_uni.value).addTo(map))
        AlternarPanel(true)
        mostrarPanel(select_mapa_uni.value)        
    }
})

