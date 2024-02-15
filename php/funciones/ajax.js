import {map} from "../../javascript/mapa.js";
import { getGlobal, setGlobal } from "../../javascript/funciones/variablesGlobales.js"; 
import { Filtrar } from "../../javascript/funciones/filtrarMarcas.js"; 

const selects_estaditicas = document.querySelectorAll(".select");

function mostrar_datos(e) {
    let value_actual = this.value
    let select_actual = this.id
    select_actual = select_actual.match(/\d+/)[0];
    let select_siguiente = (parseInt(select_actual) + 1).toString()

    if (select_actual == '1') {
        let estado = this.value
        selects_estaditicas.forEach(select => {
            if (select.id != 'select_21' && select.id != 'select_22') {
                select.disabled = true
                select.selectedIndex = 0;

            }
        });
        this.disabled = false;
        this.value = estado
        if (value_actual == 'todos') {
            return;
        }
    }
    if (select_actual == '2') {
        let value_select_siguiente = document.querySelector('#select_3').value
        if (value_select_siguiente == '0') {
            return;
        } else {
            let estado = document.querySelector('#select_1').value
            let tipo = document.querySelector('#select_3').value
            value_actual = estado + ',' + value_actual + ',' + tipo
        }

    }
    if (select_actual == '3') {
        let estado = document.querySelector('#select_1').value
        let municipio = document.querySelector('#select_2').value
        value_actual = estado + ',' + municipio + ',' + value_actual
    }
    if (select_actual == '4') {
        select_siguiente = document.querySelector(`#select_${parseInt(select_actual)+1}`)
        select_siguiente.disabled = false;
        return
    }
    if (select_actual == '5') {
        for (let index = 6; index <= 9; index++) {
            let select = document.querySelector(`#select_${index.toString()}`)
            select.disabled = true
            select.selectedIndex = 0;

        }

        select_siguiente = document.querySelector(`#select_${parseInt(select_actual)+1}`)
        select_siguiente.disabled = false;
        return

    }

    if (select_actual == '7') {
        // select_siguiente = document.querySelector(`#select_${parseInt(select_actual)+1}`)
        // select_siguiente.disabled=false;
        value_actual = document.querySelector('#select_5').value

    }
    if (select_actual == '21') {

        // map.flyTo(coordenadas, zoom)
    }
    if (select_actual == '22') {

        // map.flyTo(coordenadas, zoom)
    }


    console.log(`value actual = ${value_actual}, select actual = ${select_actual}, select siguiente =${select_siguiente}`);
    fetch('./php/funciones/municipios.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'id=' + select_actual + ',' + value_actual
        })
        .then(res => {
            if (!res.ok) {
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
                    siguiente_select.options[0].disabled = true;
                } else
                if (select_actual == '2') {
                    let siguiente_select = document.querySelector(`#select_${parseInt(select_actual)+2}`)
                    siguiente_select.innerHTML = html;
                    siguiente_select.options[0].disabled = true;


                }
                if (select_actual == '3') {
                    let siguiente_select = document.querySelector(`#select_${parseInt(select_actual)+1}`)
                    siguiente_select.disabled = false;
                    siguiente_select.innerHTML = html;
                    siguiente_select.options[0].disabled = true;

                }
                if (select_actual == '4' || select_actual == '5') {
                    siguiente_select.disabled = false;
                    siguiente_select.options[0].disabled = true;


                }
                if (select_actual == '6') {
                    let siguiente_select = document.querySelector(`#select_${select_siguiente}`)
                    siguiente_select.disabled = false;
                    siguiente_select.innerHTML = html;
                    siguiente_select.options[0].disabled = true
                }
                if (select_actual == '7') {
                    let siguiente_select = document.querySelector(`#select_${parseInt(select_actual)+1}`)
                    siguiente_select.disabled = false;
                    siguiente_select.innerHTML = html;
                    siguiente_select.options[0].disabled = true;
                }
                if (select_actual == '8') {
                    let siguiente_select = document.querySelector(`#select_${select_siguiente}`)
                    siguiente_select.disabled = false;
                    // siguiente_select.innerHTML = html;
                    // siguiente_select.options[0].disabled=true
                }
                if (select_actual == '21') {
                    let siguiente_select = document.querySelector(`#select_${parseInt(select_actual)+1}`)
                    siguiente_select.disabled = false;
                    siguiente_select.innerHTML = html;
                    siguiente_select.options[0].disabled = true
                }
                if (select_actual == '22') {
                    console.log(html);
                    html = html.split(',', 2);
                    console.log(html);
                    console.log(typeof (html));
                    

                    // Mostrar marcas por estado y municipio
                    if (getGlobal('marcasFiltradas')) {
                        map.removeLayer(getGlobal('marcasFiltradas'));
                    }
                    if (getGlobal('tipoActual') != 'Ninguna')
                        setGlobal('marcasFiltradas', Filtrar(getGlobal('tipoActual'), null, null, ).addTo(map))
                    // html = 
                    map.flyTo(html, map.getZoom())

                }
            }

        })
        .catch(error => {
            console.error('Ocurrió un error ' + error);
        });

};



selects_estaditicas.forEach(select => {
    select.addEventListener("change", mostrar_datos);
});