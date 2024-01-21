/* 
    Script: Crear marcas y eventos relacionados con marcas
    Autor: Ezequiel
    Fecha de creacion: 10/01/2024
 */

import { universidadesData } from "./data/universidadesData.js";
import { Filtrar } from "./funciones/filtrarMarcas.js";
import { map } from "./mapa.js";
import { mostrarPanel } from "./panelInformacion.js";
import { eliminarAcentos } from "./funciones/eliminarAcentos.js";
import { getGlobalVariable, setGlobalVariable } from './mapa.js';

// var marcasFiltradas
var estadoActualGlobal

// ---------- BARRA DE BUSQUEDA ----------

// Funcionalidades de la barra de busqueda
const containerBar = document.querySelector('.barraBusqueda');
const inputBar = containerBar.querySelector('input');
const sugerenciasBar = document.querySelector('.sugerencias');

// Crear filtrado de la barra de busqueda
inputBar.onkeyup = (e) =>{
    let userData = e.target.value;
    let arraySugerencias = [];
    console.log(userData);
    if (userData) {
        sugerenciasBar.removeAttribute('hidden')
        arraySugerencias = sugerenciasUniversidades.filter(data => {
            return data.toLocaleLowerCase().includes(userData.toLocaleLowerCase())
        });

        arraySugerencias = arraySugerencias.map(data => {
            return (data = `<li > ${data} </li>`);
        });
        
        containerBar.classList.add('active');
        mostrarSugerencias(arraySugerencias);
        
    }else{
        sugerenciasBar.setAttribute('hidden','hidden')
    }



    // Agregandole funcionalidad al boton de buscar
    let botonBuscar = document.querySelector(".btn-outline-secondary")
    botonBuscar.onclick = ()=>{

            let inputActual = document.querySelector(".form-control").value
            var siglas = crearSiglas(inputActual);
            
             let coordDesplazamiento = universidadesData[siglas]["coordenadas"];

        // Mostrar marcas por siglas
        if (getGlobalVariable()) {
            map.removeLayer(getGlobalVariable());
        }
        setGlobalVariable(Filtrar(null, null, siglas).addTo(map))
        // marcasFiltradas = Filtrar(null, null, siglas).addTo(map);
        desplazarse(coordDesplazamiento);
    }
}

// Mostramos el filtrado de la barra de busqueda
const mostrarSugerencias = (list) =>{
    let listaSugerencias;
    
    if (list.lenght == 0) {
        let userValue = inputBar.value;
        listaSugerencias = `<li > ${userValue} </li>`
    } else {
        listaSugerencias = list.join(' ');
    }
    sugerenciasBar.innerHTML = listaSugerencias;
    let selectUl = document.querySelector('.sugerencias')
    let selectLiAll = selectUl.querySelectorAll('li')
    selectLiAll.forEach(function(li) {
        li.addEventListener('click', function() {
            let inputSeleccion = document.querySelector(".form-control");
            inputSeleccion.value = li.innerText;
            let siglas = crearSiglas(inputSeleccion.value);
                
            let coordDesplazamiento = universidadesData[siglas]["coordenadas"];

            // Mostrar marcas por siglas
            if (getGlobalVariable()) {
                map.removeLayer(getGlobalVariable());
            }
            
            desplazarse(coordDesplazamiento);
            selectUl.setAttribute('hidden','hidden')
            mostrarPanel(siglas);
            setGlobalVariable(Filtrar(null, null, siglas).addTo(map))
        })
    })
}

// Agregamos el contenido al input
function seleccionarOpcion(elemento) {
    let inputSeleccion = document.querySelector(".form-control");
    
    inputSeleccion.value = elemento.innerText;
    const sugerenciasBar = document.querySelector('.sugerencias')
    sugerenciasBar.setAttribute('hidden','hidden')
    let inputValue = document.querySelector(".form-control").value;
        if (inputValue) {
            var siglas = crearSiglas(inputValue);
            
            let coordDesplazamiento = universidadesData[siglas]["coordenadas"];

        // Mostrar marcas por siglas
        if (getGlobalVariable()) {
            map.removeLayer(getGlobalVariable());
        }
        setGlobalVariable(Filtrar(null, null, siglas).addTo(map))
        // marcasFiltradas = Filtrar(null, null, siglas).addTo(map);
        desplazarse(coordDesplazamiento);
        }
    var siglas = crearSiglas(inputSeleccion.value)
    return siglas;
}

export { seleccionarOpcion }

// Funcion para desplazarse al sitio
const desplazarse = (coord) =>{
    map.flyTo(coord, map.getZoom())
}

function crearSiglas(textoCompleto) {
    // Utilizando una expresión regular para extraer el texto entre paréntesis
    var match = textoCompleto.match(/\(([^)]+)\)/);

    // El resultado estará en el índice 1 del array 'match'
    var siglas = match ? match[1] : null;

    return siglas;
}


// ---------- SELECT DE ESTADOS Y UNIVERSIDADES ---------- SE VA

let selectUniversidad = document.getElementById("select-location3");
let selectEstado = document.getElementById("select-location");
selectUniversidad.disabled = true;

// Funcionalidad del select de Estados
selectEstado.addEventListener("change",()=>{
    let estadoActual = selectEstado.value.toLocaleLowerCase();
    estadoActualGlobal = estadoActual
    
    if(estadoActual == "estado") {
        return
    }else{
        selectUniversidad.disabled = false;
        estadoActual = eliminarAcentos(estadoActual)
        
        let coordDesplazamiento = sugerenciasEstados[estadoActual]["coordenadas"];
        let zoomDesplazamiento = sugerenciasEstados[estadoActual]["zoom"];

        map.flyTo(coordDesplazamiento, zoomDesplazamiento);
        //mostrarMarcas(coordenadas);
        console.log(estadoActual.toLocaleUpperCase());

        if (getGlobalVariable()) {
            map.removeLayer(getGlobalVariable());
        }
        setGlobalVariable(Filtrar(estadoActual.toLocaleUpperCase()).addTo(map))
        // marcasFiltradas = Filtrar(estadoActual.toLocaleUpperCase()).addTo(map)
    }
})

// Funcionalidad del select de Universidad
selectUniversidad.addEventListener("click",()=>{
    let universidadActual = selectUniversidad.value.toLocaleUpperCase();
    if(universidadActual == "UNIVERSIDADES") return
    
        // Enfocar el estado
        var siglas = crearSiglas(universidadActual);
        let coordDesplazamiento = universidadesData[siglas]["coordenadas"];

        // Filtrar por siglas
        if (getGlobalVariable()) {
            map.removeLayer(getGlobalVariable());
        }
        setGlobalVariable(Filtrar(null, null, siglas).addTo(map))
        // marcasFiltradas = Filtrar(null, null, siglas).addTo(map);
        desplazarse(coordDesplazamiento);
        mostrarPanel(siglas)

        if(panel_portada.complete) panel_portada.src = './img/no-foto.png';
})
