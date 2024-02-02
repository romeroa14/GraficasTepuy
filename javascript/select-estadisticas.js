import { UNI_DATA } from "./data/universidadesData.js";
import { listaEstaMuni } from "./data/estados-municipios.js";

// ---------- SELECT ESTADISTICAS ----------

// Inicializar variables para el filtrado de universidades
var buscarEstado = null
var buscarMunicipio = null
var buscarTipo = null

// // Llenar el select de estados con los estados de listaEstaMuni
// select_estado.innerHTML += `<option value="Todos">Todos</option>`

// for (const estado in listaEstaMuni) {
//     select_estado.innerHTML += `<option value="${estado}">${estado}</option>`
// }

// Eventos para cada select
select_estado.addEventListener('change', function() {
    if (select_estado.value == "Todos") {
        select_municipio.disabled = true;
        buscarMunicipio = null;
    } 
    else {
        // const estado = listaEstaMuni[select_estado.value].municipios
        // select_municipio.innerHTML = '<option disabled selected>Municipio</option>'
        // select_municipio.innerHTML += '<option value="Todos">Todos</option>'
        // estado.forEach(municipio => {
        //     select_municipio.innerHTML += `<option value="${municipio}">${municipio}</option>`
        // });
        select_municipio.disabled = false;
        select_tipo.disabled = false;
    }

    buscarEstado = select_estado.value
    mostrarUnis(buscarEstado, buscarMunicipio, buscarTipo)
})

// select_municipio.addEventListener('change', function(){
//     buscarMunicipio = select_municipio.value
//     mostrarUnis(buscarEstado, buscarMunicipio, buscarTipo)
// })

select_tipo.addEventListener('change', function(){
    buscarTipo = select_tipo.value
    select_universidades.disabled = false;
    mostrarUnis(buscarEstado, buscarMunicipio, buscarTipo)
})

select_universidades.addEventListener('change', function(){
    select_tipo_persona.disabled = false;
})

select_tipo_persona.addEventListener('change', function(){
    select_sexo.disabled = false;
})

select_sexo.addEventListener('change', function(){
    select_discapacidad.disabled = false;
})

// Funcion para llenar el select de universidades dependiendo del select de estado, municipio y el tipo
function mostrarUnis(estado, municipio, tipo){

    // Crear array donde se guarda el resultado de las universidades filtradas
    let uniFiltradas = []

    // Convertir UNI_DATA en un array para poder filtrarlo
    const uniArray = Object.values(UNI_DATA);
    
    // Filtrar universidades
    Filtrado: {
        if (estado == "Todos") {

            if (tipo == "Todos") {
                uniFiltradas = uniArray
                .map(objeto => ({ nombre: objeto.nombre, siglas: objeto.siglas }));
            } else {
                uniFiltradas = uniArray
                .filter((objeto) => objeto.tipo == tipo)
                .map(objeto => ({ nombre: objeto.nombre, siglas: objeto.siglas }));
            }

            select_municipio.disabled = true;
            buscarMunicipio = null
            break Filtrado;
        }

        if (municipio == "Todos") {

            if (tipo == "Todos") {
                uniFiltradas = uniArray
                .filter((objeto) => objeto.estado == estado.toUpperCase())
                .map(objeto => ({ nombre: objeto.nombre, siglas: objeto.siglas }));
            } else {
                uniFiltradas = uniArray
                .filter((objeto) => objeto.estado == estado.toUpperCase() && objeto.tipo == tipo)
                .map(objeto => ({ nombre: objeto.nombre, siglas: objeto.siglas }));
            }
            
        } else {

            if (tipo == "Todos") {
                uniFiltradas = uniArray
                .filter((objeto) => objeto.estado == estado.toUpperCase() && objeto.municipio == municipio)
                .map(objeto => ({ nombre: objeto.nombre, siglas: objeto.siglas }));
            } else {
                uniFiltradas = uniArray
                .filter((objeto) => objeto.estado == estado.toUpperCase()&& objeto.municipio == municipio && objeto.tipo == tipo)
                .map(objeto => ({ nombre: objeto.nombre, siglas: objeto.siglas }));
            }
        }
    }
    
    // Si quieres ver las universidades que encuentra habilita esto:
    // console.log(uniFiltradas)

    // Añadir al select cada universidad de la forma: <option value="siglas"> "(siglas) - nombre"</option>
    select_universidades.innerHTML = '<option disabled selected>Universidad</option>'
    select_universidades.innerHTML += '<option value="Todos">Todas</option>'
    for (const uni of uniFiltradas) {
        select_universidades.innerHTML += `<option value="${uni.siglas}">(${uni.siglas}) - ${uni.nombre}</option>`
    }
}

