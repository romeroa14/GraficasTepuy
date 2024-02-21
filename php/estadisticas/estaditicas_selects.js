

import { Filtrar } from "../../javascript/funciones/filtrarMarcas.js";
import { AlternarPanel, mostrarPanel } from "../../javascript/panel.js";
import { map } from "../../javascript/mapa.js";
import { listaEstaMuni } from "../../javascript/data/estados-municipios.js";
import { resetLayer } from "../../javascript/mapa.js";
// import { sugerenciasUniversidades } from "./data/sugerencias.js";
import { getGlobal, setGlobal } from "../../javascript/funciones/variablesGlobales.js"; 
import { eliminarAcentos} from "../../javascript/funciones/eliminarAcentos.js"; 
import { crearGrafica } from "../../javascript/graficos.js";

const selects_estaditicas=document.querySelectorAll(".select");

function mostrar_datos(e){
    let value_actual = this.value
    let select_actual = this.id
    select_actual = select_actual.match(/\d+/)[0];
    let select_siguiente = (parseInt(select_actual) + 1).toString()

            if(select_actual == '1'  ){
                let estado = this.value
                selects_estaditicas.forEach(select => {
                    if (select.id != 'select_21' && select.id != 'select_22') {
                        select.disabled=true
                        select.selectedIndex = 0;
                        
                    }
                });
                this.disabled=false;
                this.value = estado
                if (value_actual == 'todos') {
                    return;
                }
            }
            if (select_actual == '2') {
                let value_select_siguiente  = document.querySelector('#select_3').value
                if (value_select_siguiente == '0') {
                    return;
                }else{
                    let estado  = document.querySelector('#select_1').value
                    let tipo = document.querySelector('#select_3').value
                    value_actual = estado+','+value_actual+','+tipo
                }
                
            }
            if (select_actual == '3') {
                let estado  = document.querySelector('#select_1').value
                let municipio = document.querySelector('#select_2').value
                value_actual = estado+','+municipio+','+value_actual
            }
            if (select_actual == '4') {
                select_siguiente = document.querySelector(`#select_${parseInt(select_actual)+1}`)
                select_siguiente.disabled=false;
                return
            }
            if (select_actual == '5') {
                for (let index = 6; index <= 9; index++) {
                    let select = document.querySelector(`#select_${index.toString()}`)
                    select.disabled=true
                    select.selectedIndex = 0;
                    
                }
                
                select_siguiente = document.querySelector(`#select_${parseInt(select_actual)+1}`)
                select_siguiente.disabled=false;
                return
                
            }
            
            if (select_actual == '7') {
                value_actual = document.querySelector('#select_5').value
                
            }
            if (select_actual == '8') {
                let tipo_persona = document.querySelector('#select_5').value
                value_actual = tipo_persona+','+value_actual

                
            }
            if (select_actual == '21' || select_actual == '22') {
                document.querySelector('#input_mapa_busqueda').value = ''
                
                
            }

            
            


    console.log( `value actual = ${value_actual}, select actual = ${select_actual}, select siguiente =${select_siguiente}`);
    fetch('./php/estadisticas/estadisticas_consultas_selects.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'id=' +select_actual +','+value_actual
    })
    .then(res => {
        if(!res.ok) {
            throw new Error('Hubo un error en la respuesta');
        }
        return res.text(); // Cambiamos a res.text() para leer la respuesta como texto
    })
    // .then(html => console.log(html))
    .then(html => {
        if (html != '') {

            if (select_actual == '1') {
                document.querySelector(`#select_${parseInt(select_actual)+2}`).disabled = false;
                let siguiente_select = document.querySelector(`#select_${select_siguiente}`)
                siguiente_select.disabled = false;
                siguiente_select.innerHTML = html;
                siguiente_select.options[0].disabled=true;
            }
            if (select_actual == '2') {
                let siguiente_select = document.querySelector(`#select_${parseInt(select_actual)+2}`)
                siguiente_select.innerHTML = html;
                siguiente_select.options[0].disabled=true;
            }
            if (select_actual == '3') {
                let siguiente_select = document.querySelector(`#select_${parseInt(select_actual)+1}`)
                siguiente_select.disabled = false;
                siguiente_select.innerHTML = html;
                siguiente_select.options[0].disabled=true;
            }
            if (select_actual == '4' || select_actual == '5' ) {
                siguiente_select.disabled = false;
                siguiente_select.options[0].disabled=true;
            }
            if (select_actual == '6') {
                let siguiente_select = document.querySelector(`#select_${select_siguiente}`)
                siguiente_select.disabled = false;
                siguiente_select.innerHTML = html;
                siguiente_select.options[0].disabled=true
            }
            if (select_actual == '7') {
                let siguiente_select = document.querySelector(`#select_${parseInt(select_actual)+1}`)
                siguiente_select.disabled = false;
                siguiente_select.innerHTML = html;
                siguiente_select.options[0].disabled=true;
            }
            if (select_actual == '8') {
                let siguiente_select = document.querySelector(`#select_${select_siguiente}`)
                siguiente_select.disabled = false;
                siguiente_select.innerHTML = html;
                siguiente_select.options[0].disabled=true;
            }
            if (select_actual == '21') {
                let siguiente_select = document.querySelector(`#select_${parseInt(select_actual)+1}`)
                siguiente_select.disabled = false;
                siguiente_select.innerHTML = html;
                siguiente_select.options[0].disabled=true
                select_actual = document.querySelector('#select_21')
                let estadoActual = select_actual.selectedOptions[0].textContent.trim().toLocaleLowerCase()
                // setGlobal('estadoActual', estadoActual.selectedOptions[0].textContent.trim().toLocaleUpperCase())
                // setGlobal('municipioActual', null)
                    estadoActual = eliminarAcentos(estadoActual)
                    estadoActual = estadoActual.charAt(0).toUpperCase() + estadoActual.slice(1)
                    // console.log(estadoActual);
                    let coordDesplazamiento = listaEstaMuni[estadoActual]["coordenadas"];
                    let zoomDesplazamiento = listaEstaMuni[estadoActual]["zoom"];
                    // console.log(coordDesplazamiento +','+zoomDesplazamiento);
                    map.flyTo(coordDesplazamiento, zoomDesplazamiento);

                    //------- Mostrar todas la universidades de ese estado --------
                    if (getGlobal('marcasFiltradas')) {
                        map.removeLayer(getGlobal('marcasFiltradas'));
                    }
                    setGlobal('marcasFiltradas', Filtrar(getGlobal('tipoActual'), estadoActual.toLocaleUpperCase()).addTo(map))
                    resetLayer()
                    AlternarPanel(false)

                    // ------ agregando la funcion de la leyenda ----------
                    setGlobal('estadoActual',estadoActual)
                }
                if (select_actual == '22') {
                        let coordenadas = html.split(',',2)
                        console.log(coordenadas);
                        map.flyTo(coordenadas, map.getZoom())

                        let siglas = document.querySelector('#select_22').selectedOptions[0].textContent.trim().toLocaleLowerCase().match(/\(([^)]+)\)/)[1].toLocaleUpperCase()
                        console.log(siglas);



                        if (getGlobal('marcasFiltradas')) {
                            map.removeLayer(getGlobal('marcasFiltradas'));
                        }
                        setGlobal('marcasFiltradas', Filtrar(getGlobal('tipoActual'), null, null, siglas).addTo(map))
                        resetLayer()

                        mostrarPanel(siglas)
                        select_estado = document.querySelector('#select_21')
                    let estadoActual = select_estado.selectedOptions[0].textContent.trim().toLocaleLowerCase()
                    estadoActual = eliminarAcentos(estadoActual)
                    estadoActual = estadoActual.charAt(0).toUpperCase() + estadoActual.slice(1)
                    console.log(estadoActual);

                        // ------ agregando la funcion de la leyenda ----------
                    setGlobal('estadoActual',estadoActual)
                        }
                    
                
                
            
        }
        
    })
    .catch(error => {
        console.error('Ocurrió un error ' + error);
    });

    // Obtener todos los selects en el formulario
    
};

function submitDatos(e){
    e.preventDefault()
   

    var form = document.getElementById('form_estadisticas');
    var selects = form.querySelectorAll('select');
    var formData = new FormData();

    // Recorrer todos los selects
    selects.forEach(select => {

        // Obtener el valor seleccionado de cada select
        var selectValue = select.value;

        // Agregar el valor al objeto FormData con un nombre de clave único
        formData.append(select.name, selectValue)

    });

        fetch('./php/estadisticas/consultas_graficas.php', {
            method: 'POST',
            body: formData
        })
        .then(res => {
            if(!res.ok) {
                throw new Error('Hubo un error en la respuesta');
            }
            return res.json(); // Cambiamos a res.text() para leer la respuesta como texto
        })
        .then(data => {
            
            // var info = data.split(',')
            // var infoArray = JSON.parse(data)
            
            
            crearGrafica(document.getElementById('graficas_fuertes'),'graficaFuerte1', data.label, data.datos, ['#7448c250'],'bar');
    
            console.log(data.label[0]);
            console.log(data.datos[0]);
            console.log(data);
        })
   

}




form_estadisticas.addEventListener( "submit", submitDatos)

selects_estaditicas.forEach(select => {
    select.addEventListener("change",mostrar_datos);
});