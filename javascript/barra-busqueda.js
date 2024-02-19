/* 
    Script: Crear marcas y eventos relacionados con marcas
    Autor: Ezequiel
    Fecha de creacion: 10/01/2024
 */


import { Filtrar } from "./funciones/filtrarMarcas.js";
import { mostrarPanel } from "./panel.js";
import { map } from "./mapa.js";
import { resetLayer } from "./mapa.js";
import { getGlobal, setGlobal } from "./funciones/variablesGlobales.js"; 


// ---------- BARRA DE BUSQUEDA ----------

// Funcionalidades de la barra de busqueda
const containerBar = document.querySelector('.Barra-busqueda-contenedor');
const inputBar = containerBar.querySelector('#input_mapa_busqueda');
const sugerenciasBar = document.querySelector('.sugerencias');


let contador = 0;
let alturaSugerencia = 0;
let posicionAcumulada = 0;
let posicionBordeTop = 0;
let posicionBordeBot = 0;
let posicionAbsolutaBot = 0;
let posicionAbsolutaTop = 0;
let eventoEjecutado = false;


// Crear filtrado de la barra de busqueda
inputBar.onkeyup = (e) => {

    

        if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp' && e.key !== 'Enter' && e.key !== 'Escape') {
                eventoEjecutado = true;
                contador = 0;
                posicionAbsolutaBot = 0;
                posicionAbsolutaBot = 0;
                posicionAcumulada = 0;

            let userData = e.target.value;
            if (userData){
            fetch('./javascript/consulta_barra_busqueda.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: 'busqueda=' + userData
                }).then(res => {
                    if (!res.ok) {
                        throw new Error('Hubo un error en la respuesta');
                    }
                    return res.text();
                })
                .then(html => {
                    sugerenciasBar.innerHTML = html;
                    sugerenciasBar.removeAttribute('hidden')
                    containerBar.classList.add('active');
                    mostrarSugerencias()

                }).catch(error => console.log(error));
            } else {
                sugerenciasBar.setAttribute('hidden', 'hidden')
            }
        } else {
            
            const maxheightValue = window.getComputedStyle(sugerenciasBar).maxHeight
            let alturaMaxima = extraerPrimerNumero(maxheightValue);
            let selectLiAll = sugerenciasBar.querySelectorAll('li');
            let cantidadSugerencias = selectLiAll.length;
            eventoEjecutado = false;

            // console.log('e.key: '+e.key);
            // console.log('contador: '+contador);
            // console.log('cantidadSugerencias: '+cantidadSugerencias);
            console.log('eventoEjecutado: '+eventoEjecutado);

            if (e.key === 'ArrowDown' && contador >= 0 && contador <= cantidadSugerencias && cantidadSugerencias > 0 && !eventoEjecutado) {
                if (contador < cantidadSugerencias) {
                    contador++;
                }
                // se capturan los tamaños de del elemento
                posicionBordeTop = selectLiAll[contador - 1].offsetTop;
                alturaSugerencia = selectLiAll[contador - 1].offsetHeight;
                posicionBordeBot = posicionBordeTop + alturaSugerencia;
                //si el elemento no esta fuera de la visibilidad del contenedor
                
                if (posicionAbsolutaBot <= alturaMaxima) {
                    posicionAbsolutaBot = posicionBordeBot - posicionAcumulada;
                    posicionAbsolutaTop = posicionAbsolutaBot - alturaSugerencia;
                }
                //si el elemento esta fuera de la visibilidad del contenedor
                if (posicionAbsolutaBot > alturaMaxima && contador <= cantidadSugerencias) {
                    posicionAcumulada += alturaSugerencia
                    sugerenciasBar.scrollTop = posicionAcumulada;
                    posicionAbsolutaBot -= alturaSugerencia;
                    posicionAbsolutaTop = posicionAbsolutaBot - alturaSugerencia

                }
                selectLiAll[contador - 1].style.backgroundColor = '#ddd';
                if (selectLiAll[contador - 2]) {
                    selectLiAll[contador -2].removeAttribute('style')
                }
                eventoEjecutado = true;
            } else if (e.key === 'ArrowUp' && contador >= 1 && contador <= cantidadSugerencias && cantidadSugerencias > 0 && !eventoEjecutado) {
                if (contador > 1) {
                    contador--;
                }
                // se capturan los tamaños de del elemento
                posicionBordeTop = selectLiAll[contador - 1].offsetTop;
                alturaSugerencia = selectLiAll[contador - 1].offsetHeight;
                posicionBordeBot = posicionBordeTop + alturaSugerencia;
                //si el elemento no esta fuera de la visibilidad del contenedor
                if (posicionAbsolutaTop > 0) {
                    posicionAbsolutaTop -= alturaSugerencia;
                    posicionAbsolutaBot = posicionAbsolutaTop + alturaSugerencia

                }
                //si el elemento esta fuera de la visibilidad del contenedor
                if (posicionAbsolutaTop < 0 && posicionAcumulada >= 0) {
                    posicionAcumulada -= alturaSugerencia
                    sugerenciasBar.scrollTop = posicionAcumulada;
                    posicionAbsolutaTop += alturaSugerencia;
                    posicionAbsolutaBot = posicionAbsolutaTop + alturaSugerencia

                }

                selectLiAll[contador - 1].style.backgroundColor = '#ddd';
                selectLiAll[contador].removeAttribute('style')
                eventoEjecutado = true;
            } else if (e.key === 'Enter' && cantidadSugerencias > 0 && !eventoEjecutado) {
                let etiqueta = selectLiAll[contador - 1]
                seleccionarOpcion(etiqueta);
                posicionAbsolutaBot = 0;
                posicionAbsolutaBot = 0;
                posicionAcumulada = 0;
                contador = 0;
                return;
            } else if (e.key === 'Escape' && cantidadSugerencias > 0 && !eventoEjecutado) {
                inputBar.value = '';
                sugerenciasBar.setAttribute('hidden', 'hidden');
                contador = 0;
                posicionAbsolutaBot = 0;
                posicionAbsolutaBot = 0;
                posicionAcumulada = 0;
                return;
            } 


        }
    

}




// Agregandole funcionalidad al boton de buscar
let botonBuscar = document.querySelector("#boton-busqueda")
    botonBuscar.onclick = ()=>{

            let inputActual = inputBar.value
            var siglas = inputActual.trim().toLocaleLowerCase().match(/\(([^)]+)\)/)[1].toLocaleUpperCase()
            console.log(siglas);
            fetch('./javascript/consulta_barra_busqueda.php',{
                method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: 'siglas=' + siglas
            }).then(res => {
                if(!res.ok) {
                    throw new Error('Hubo un error en la respuesta');
                }
                return res.text(); 
            })
            .then(data =>{
                let coordenadas = data.split(',',2)
                console.log(coordenadas);
                map.flyTo(coordenadas, map.getZoom())

                if (getGlobal('marcasFiltradas')) {
                    map.removeLayer(getGlobal('marcasFiltradas'));
                }
                setGlobal('marcasFiltradas', Filtrar(getGlobal('tipoActual'), null, null, siglas).addTo(map))
                resetLayer()
    
            }).catch(error => console.log(error))
            
    }

// Mostramos el filtrado de la barra de busqueda
const mostrarSugerencias = () =>{
    let selectUl = sugerenciasBar;
    let selectLiAll = selectUl.querySelectorAll('li')
    selectLiAll.forEach(function(li) {
        li.addEventListener('click', function() {
            let inputSeleccion = document.querySelector("#input_mapa_busqueda");
            inputSeleccion.value = li.innerText;
            let siglas = inputSeleccion.value.trim().toLocaleLowerCase().match(/\(([^)]+)\)/)[1].toLocaleUpperCase();
            fetch('./javascript/consulta_barra_busqueda.php',{
                method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: 'siglas=' + siglas
            })
            .then(res => {
                if(!res.ok) {
                    throw new Error('Hubo un error en la respuesta');
                }
                return res.text(); 
            })
            .then(data =>{
                let coordenadas = data.split(',',2)
                console.log(coordenadas);
                map.flyTo(coordenadas, map.getZoom())

                if (getGlobal('marcasFiltradas')) {
                    map.removeLayer(getGlobal('marcasFiltradas'));
                }
                setGlobal('marcasFiltradas', Filtrar(getGlobal('tipoActual'), null, null, siglas).addTo(map))
                resetLayer()
                selectUl.setAttribute('hidden', 'hidden')
                console.log(siglas);
                mostrarPanel(siglas);
        
            })
            .catch(error => console.log(error))
        })
    })
}




//funcion para sacar de un string los numero y convertir la variable a numero
function extraerPrimerNumero(texto) {
    const numerosExtraidos = texto.match(/\d+/);
    return numerosExtraidos ? parseInt(numerosExtraidos[0], 10) : null;
}

// Agregamos el contenido al input
function seleccionarOpcion(elemento) {
    let inputSeleccion = document.querySelector("#input_mapa_busqueda");
    
    inputSeleccion.value = elemento.innerText;
    document.querySelector('.sugerencias').setAttribute('hidden','hidden')
        if (inputSeleccion.value) {
            var siglas = inputSeleccion.value.trim().toLocaleLowerCase().match(/\(([^)]+)\)/)[1].toLocaleUpperCase()
            console.log(siglas);
            fetch('./javascript/consulta_barra_busqueda.php',{
                method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: 'siglas=' + siglas
            }).then(res => {
                if(!res.ok) {
                    throw new Error('Hubo un error en la respuesta');
                }
                return res.text(); 
            })
            .then(data =>{
                let coordenadas = data.split(',',2)
                console.log(coordenadas);
                map.flyTo(coordenadas, map.getZoom())

                if (getGlobal('marcasFiltradas')) {
                    map.removeLayer(getGlobal('marcasFiltradas'));
                }
                setGlobal('marcasFiltradas', Filtrar(getGlobal('tipoActual'), null, null, siglas).addTo(map))
                resetLayer()
                mostrarPanel(siglas);
            }).catch(error => console.log(error))
        }
    
}

export { seleccionarOpcion }



function crearSiglas(textoCompleto) {
    // Utilizando una expresión regular para extraer el texto entre paréntesis
    var match = textoCompleto.match(/\(([^)]+)\)/);

    // El resultado estará en el índice 1 del array 'match'
    var siglas = match ? match[1] : null;

    return siglas;
}


