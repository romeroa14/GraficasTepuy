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


// -------------- variables necesarias para la funcionalidad de als flechas--------
let contador = 0;
let alturaSugerencia = 0;
let posicionAcumulada = 0;
let posicionBordeTop = 0;
let posicionBordeBot = 0;
let posicionAbsolutaBot = 0;
let posicionAbsolutaTop = 0;


inputBar.addEventListener('keyup',(e)=>{
    const maxheightValue = window.getComputedStyle(sugerenciasBar).maxHeight
    let alturaMaxima = extraerPrimerNumero(maxheightValue);
    let eventoEjecutado = false;
    let selectLiAll = sugerenciasBar.querySelectorAll('li');
    let cantidadSugerencias = selectLiAll.length;
    
    
    if (e.key === 'ArrowDown' && contador >= 0 && contador <= cantidadSugerencias && cantidadSugerencias > 0 && !eventoEjecutado ) {
        if (contador < cantidadSugerencias) {
            contador++;
        }
        // se capturan los tamaños de del elemento
        posicionBordeTop = selectLiAll[contador-1].offsetTop;
        alturaSugerencia = selectLiAll[contador-1].offsetHeight;
        posicionBordeBot = posicionBordeTop + alturaSugerencia;
        //si el elemento no esta fuera de la visibilidad del contenedor
        if (posicionAbsolutaBot <= alturaMaxima) {
            posicionAbsolutaBot = posicionBordeBot - posicionAcumulada;
            posicionAbsolutaTop = posicionAbsolutaBot - alturaSugerencia;
        }
        //si el elemento esta fuera de la visibilidad del contenedor
        if (posicionAbsolutaBot > alturaMaxima && contador <= cantidadSugerencias) {
            posicionAcumulada +=alturaSugerencia
            sugerenciasBar.scrollTop = posicionAcumulada;
            posicionAbsolutaBot -= alturaSugerencia;
            posicionAbsolutaTop = posicionAbsolutaBot - alturaSugerencia
            
        }
        selectLiAll[contador-1].style.backgroundColor = '#ddd';
        eventoEjecutado = true;
    }else if (e.key === 'ArrowUp' && contador >= 1 && contador <= cantidadSugerencias && cantidadSugerencias > 0 && !eventoEjecutado) {
        if (contador >1 ) {
            contador--;
        }
        // se capturan los tamaños de del elemento
        posicionBordeTop = selectLiAll[contador-1].offsetTop;
        alturaSugerencia = selectLiAll[contador-1].offsetHeight;
        posicionBordeBot = posicionBordeTop + alturaSugerencia;
        //si el elemento no esta fuera de la visibilidad del contenedor
        if (posicionAbsolutaTop>0) {
            posicionAbsolutaTop -= alturaSugerencia;
            posicionAbsolutaBot = posicionAbsolutaTop + alturaSugerencia
            
        }
        //si el elemento esta fuera de la visibilidad del contenedor
        if (posicionAbsolutaTop < 0 && posicionAcumulada>=0) {
            posicionAcumulada -=alturaSugerencia
            sugerenciasBar.scrollTop = posicionAcumulada;
            posicionAbsolutaTop += alturaSugerencia;
            posicionAbsolutaBot = posicionAbsolutaTop + alturaSugerencia

        }

        selectLiAll[contador-1].style.backgroundColor = '#ddd';
        eventoEjecutado = true;
    }else if (e.key === 'Enter' && cantidadSugerencias > 0 && !eventoEjecutado ) {
        let etiqueta = selectLiAll[contador-1]
        seleccionarOpcion(etiqueta);
        posicionAbsolutaBot=0;
        posicionAbsolutaBot=0;
        posicionAcumulada=0;
        contador = 0;
        return;
    }else if (e.key === 'Escape' && cantidadSugerencias > 0 && !eventoEjecutado ) {
        inputBar.value = '';
        sugerenciasBar.setAttribute('hidden','hidden');
        contador = 0;
        posicionAbsolutaBot=0;
        posicionAbsolutaBot=0;
        posicionAcumulada=0;
        return;
    }else{
        eventoEjecutado = true;
        contador = 0;
        posicionAbsolutaBot=0;
        posicionAbsolutaBot=0;
        posicionAcumulada=0;
    }
    

})

//funcion para sacar de un string los numero y convertir la variable a numero
function extraerPrimerNumero(texto) {
    const numerosExtraidos = texto.match(/\d+/);
    return numerosExtraidos ? parseInt(numerosExtraidos[0], 10) : null;
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
