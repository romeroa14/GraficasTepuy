/* 
    Script: Crear marcas y eventos relacionados con marcas
    Autor: Ezequiel
    Fecha de creacion: 10/01/2024
 */

import { UNI_DATA } from "./data/universidadesData.js";
import { Filtrar } from "./funciones/filtrarMarcas.js";
import { map } from "./mapa.js";
import { mostrarPanel } from "./panel.js";
import { eliminarAcentos } from "./funciones/eliminarAcentos.js";
import { getGlobal, setGlobal } from "./funciones/variablesGlobales.js"; 

// ---------- BARRA DE BUSQUEDA ----------

// Funcionalidades de la barra de busqueda
const containerBar = document.querySelector('.Barra-busqueda-contenedor');
const inputBar = containerBar.querySelector('input');
const sugerenciasBar = document.querySelector('.sugerencias');

// Crear filtrado de la barra de busqueda
inputBar.onkeyup = (e) =>{
    let userData = e.target.value;
    let arraySugerencias = [];
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
            
            let coordDesplazamiento = UNI_DATA[siglas]["coordenadas"];

        // Mostrar marcas por siglas
        if (getGlobal('marcasFiltradas')) {
            map.removeLayer(getGlobal('marcasFiltradas'));
        }
        setGlobal('marcasFiltradas', Filtrar(getGlobal('tipoActual'), null, siglas).addTo(map))
        desplazarse(coordDesplazamiento);
    }
}

let listaSugerencias;
let todasSugerencias;
// Mostramos el filtrado de la barra de busqueda
const mostrarSugerencias = (list) =>{
    
    if (list.lenght == 0) {
        let userValue = inputBar.value;
        listaSugerencias = `<li > ${userValue} </li>`
    } else {
        listaSugerencias = list.join(' ');
    }
    sugerenciasBar.innerHTML = listaSugerencias;
    let selectUl = sugerenciasBar;
    let selectLiAll = selectUl.querySelectorAll('li')
    let cantidadSugerencias = selectLiAll.length;
    selectLiAll.forEach(function(li) {
        li.addEventListener('click', function() {
            let inputSeleccion = document.querySelector(".form-control");
            inputSeleccion.value = li.innerText;
            let siglas = crearSiglas(inputSeleccion.value);
                
            let coordDesplazamiento = UNI_DATA[siglas]["coordenadas"];

        // Mostrar marcas por siglas
        if (getGlobal('marcasFiltradas')) {
            map.removeLayer(getGlobal('marcasFiltradas'));
        }
        
        desplazarse(coordDesplazamiento);
        selectUl.setAttribute('hidden','hidden')
        mostrarPanel(siglas);
        setGlobal('marcasFiltradas', Filtrar(getGlobal('tipoActual'), null, null, siglas).addTo(map))
        })})
        todasSugerencias = listaSugerencias
        
}

let contador = 0;

inputBar.addEventListener('keyup',(e)=>{
    let eventoEjecutado = false;
    let selectLiAll = sugerenciasBar.querySelectorAll('li');
    let cantidadSugerencias = selectLiAll.length;
    if (e.key === 'ArrowDown' && contador >= 0 && contador <= cantidadSugerencias && cantidadSugerencias > 0 && !eventoEjecutado ) {
        if (contador < cantidadSugerencias) {
            contador++;
        }
        selectLiAll[contador-1].style.backgroundColor = '#ddd';
        
        eventoEjecutado = true;
    }else if (e.key === 'ArrowUp' && contador >= 1 && contador <= cantidadSugerencias && cantidadSugerencias > 0 && !eventoEjecutado) {
        
        if (contador >1 ) {
            contador--;
        }
        selectLiAll[contador-1].style.backgroundColor = '#ddd';
        
        eventoEjecutado = true;
    }else if (e.key === 'Enter' && cantidadSugerencias > 0 && !eventoEjecutado ) {
        
        
        
        let etiqueta = selectLiAll[contador-1]
        
        seleccionarOpcion(etiqueta);
        
        contador = 0;
        return;
    }else if (e.key === 'Escape' && cantidadSugerencias > 0 && !eventoEjecutado ) {
        inputBar.value = '';
        sugerenciasBar.setAttribute('hidden','hidden');
        contador = 0;
        
        return;
    }else{
        eventoEjecutado = true;
        contador = 0;
    }

})
// Agregamos el contenido al input
function seleccionarOpcion(elemento) {
    let inputSeleccion = document.querySelector(".form-control");
    
    inputSeleccion.value = elemento.innerText;
    const sugerenciasBar = document.querySelector('.sugerencias')
    sugerenciasBar.setAttribute('hidden','hidden')
    let inputValue = document.querySelector(".form-control").value;
        if (inputValue) {
            var siglas = crearSiglas(inputValue);
            
            let coordDesplazamiento = UNI_DATA[siglas]["coordenadas"];

        // Mostrar marcas por siglas
        if (getGlobal('marcasFiltradas')) {
            map.removeLayer(getGlobal('marcasFiltradas'));
        }
        setGlobal('marcasFiltradas', Filtrar(getGlobal('tipoActual'), null, null, siglas).addTo(map))
        desplazarse(coordDesplazamiento);
        }
    var siglas = crearSiglas(inputSeleccion.value)
    mostrarPanel(siglas);
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


// ---------- SELECT DE ESTADOS Y UNIVERSIDADES ----------
let selectUniversidad = document.getElementById("select-location3");
let selectEstado = document.getElementById("select-location");
selectUniversidad.disabled = true;

// Funcionalidad del select de Estados
selectEstado.addEventListener("change",()=>{
    
    // setEstadoActualGlobal(selectEstado.value.toLocaleLowerCase())
    estadoActual = selectEstado.value.toLocaleLowerCase()
    setGlobal('estadoActual', estadoActual)
    setGlobal('municipioActual', null)
    
    if(estadoActual == "estado") {
        return
    }else{
        selectUniversidad.disabled = false;
        estadoActual = eliminarAcentos(estadoActual)
    
        let coordDesplazamiento = sugerenciasEstados[estadoActual]["coordenadas"];
        let zoomDesplazamiento = sugerenciasEstados[estadoActual]["zoom"];
        map.flyTo(coordDesplazamiento, zoomDesplazamiento);
        if (getGlobal('marcasFiltradas')) {
            map.removeLayer(getGlobal('marcasFiltradas'));
        }
        setGlobal('marcasFiltradas', Filtrar(getGlobal('tipoActual'), estadoActual.toLocaleUpperCase()).addTo(map))
    }
})

// Funcionalidad del select de Universidad
selectUniversidad.addEventListener("click",()=>{
    let universidadActual = selectUniversidad.value.toLocaleUpperCase();
    if(universidadActual == "UNIVERSIDADES") return
    
        // Enfocar el estado
        var siglas = crearSiglas(universidadActual);
        console.log(siglas);
        let coordDesplazamiento = UNI_DATA[siglas]["coordenadas"];

        // Filtrar por siglas
        if (getGlobal('marcasFiltradas')) {
            map.removeLayer(getGlobal('marcasFiltradas'));
        }
        setGlobal('marcasFiltradas', Filtrar(getGlobal('tipoActual'), null, null, siglas).addTo(map))
        desplazarse(coordDesplazamiento);
        mostrarPanel(siglas)
})
