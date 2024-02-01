import { UNI_DATA } from "./data/universidadesData.js";
import { listaEstaMuni } from "./data/estados-municipios.js";

// ---------- SELECT ESTADISTICAS ----------

// Inicializar variables para el filtrado de universidades
var buscarEstado = null
var buscarMunicipio = null
var buscarTipo = null

// Llenar el select de estados con los estados de listaEstaMuni
select_estado.innerHTML += `<option value="Todos">Todos</option>`

for (const estado in listaEstaMuni) {
    select_estado.innerHTML += `<option value="${estado}">${estado}</option>`
}

// Eventos para cada select
select_estado.addEventListener('change', function() {
    if (select_estado.value == "Todos") {
        select_municipio.disabled = true;
        buscarMunicipio = null;
    } else {
        const estado = listaEstaMuni[select_estado.value].municipios
        select_municipio.innerHTML = '<option disabled selected>Municipio</option>'
        select_municipio.innerHTML += '<option value="Todos">Todos</option>'
        estado.forEach(municipio => {
            select_municipio.innerHTML += `<option value="${municipio}">${municipio}</option>`
        });
        select_municipio.disabled = false;
        select_tipo.disabled = false;
    }

    buscarEstado = select_estado.value
    mostrarUnis(buscarEstado, buscarMunicipio, buscarTipo)
})

select_municipio.addEventListener('change', function(){
    buscarMunicipio = select_municipio.value
    mostrarUnis(buscarEstado, buscarMunicipio, buscarTipo)
})

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
    console.log(uniFiltradas)

    // Añadir al select cada universidad de la forma: <option value="siglas"> "(siglas) - nombre"</option>
    select_universidades.innerHTML = '<option disabled selected>Universidad</option>'
    select_universidades.innerHTML += '<option value="Todos">Todas</option>'
    for (const uni of uniFiltradas) {
        select_universidades.innerHTML += `<option value="${uni.siglas}">(${uni.siglas}) - ${uni.nombre}</option>`
    }
}

// ---------- SELECT MAPA ----------




// Notas: para cada selec, configurar si es "Todo"
// Revisar select del mapa



/* 


let estados = document.getElementById('select-location');
let universidades = document.getElementById('select-location3');
let estados2 = document.getElementById('select_estado');
let universidades2 = document.getElementById('estadisticas_universidades');


function Recorrer (estado,valores){
    universidades.innerHTML = '<option disabled selected>Universidades</option>'
    universidades2.innerHTML = '<option disabled selected>Universidades</option>'
    for(index of valores){
        estado.innerHTML+=`<option>${index}</option>`
   }
}

function LlenarEstado (){
    Recorrer(estados, listaEstaMuni);
    Recorrer(estados2, listaEstaMuni);
}

LlenarEstado();

estados.addEventListener('change', (e)=>{
    let dato = e.target.value;
   
    switch (dato) {
        case "Anzoátegui":
            Recorrer(universidades, univzla.slice(0,2));
            break;
        case "Aragua":
            Recorrer(universidades, univzla.slice(2,3));
            break;
        case "Apure":
            Recorrer(universidades, univzla.slice(3,4));
            break;
        case "Barinas":
            Recorrer(universidades, univzla.slice(4,6));
            break;
        case "Bolívar":
            Recorrer(universidades, univzla.slice(6,11));
            break;
        case "Carabobo":
            Recorrer(universidades, univzla.slice(11,14));
            break;
        case "Cojedes":
            Recorrer(universidades, univzla.slice(14,15));
            break;
        case "Delta Amacuro":
            Recorrer(universidades, univzla.slice(15,16));
            break;
        case "Distrito Capital":
            Recorrer(universidades, univzla.slice(16,36));
            break;
        case "Falcón":
            Recorrer(universidades, univzla.slice(36,38));
            break;
        case "Guárico":
            Recorrer(universidades, univzla.slice(38,40));
            break;
        case "Lara":
            Recorrer(universidades, univzla.slice(40,45));
            break;
        case "La Guaira":
            Recorrer(universidades, univzla.slice(45,46));
            break;
        case "Mérida":
            Recorrer(universidades, univzla.slice(46,48));
            break;
        case "Miranda":
            Recorrer(universidades, univzla.slice(48,53));
            break;
        case "Monagas":
            Recorrer(universidades, univzla.slice(53,54));
            break;
        case "Portuguesa":
            Recorrer(universidades, univzla.slice(54,55));
            break;
        case "Sucre":
            Recorrer(universidades, univzla.slice(55,58));
            break;
        case "Trujillo":
            Recorrer(universidades, univzla.slice(58,59));
            break;
        case "Táchira":
            Recorrer(universidades, univzla.slice(59,62));
            break;
        case "Yaracuy":
            Recorrer(universidades, univzla.slice(62,64));
            break;
        case "Zulia":
            Recorrer(universidades, univzla.slice(64,69));
            break;

        default:
          break;
    }
});

estados2.addEventListener('change', (e)=>{
    let dato = e.target.value;
   
    switch (dato) {
        case "Anzoátegui":
            Recorrer(universidades2, univzla.slice(0,2));
            break;
        case "Aragua":
            Recorrer(universidades2, univzla.slice(2,3));
            break;
        case "Apure":
            Recorrer(universidades2, univzla.slice(3,4));
            break;
        case "Barinas":
            Recorrer(universidades2, univzla.slice(4,6));
            break;
        case "Bolívar":
            Recorrer(universidades2, univzla.slice(6,11));
            break;
        case "Carabobo":
            Recorrer(universidades2, univzla.slice(11,14));
            break;
        case "Cojedes":
            Recorrer(universidades2, univzla.slice(14,15));
            break;
        case "Delta Amacuro":
            Recorrer(universidades2, univzla.slice(15,16));
            break;
        case "Distrito Capital":
            Recorrer(universidades2, univzla.slice(16,36));
            break;
        case "Falcón":
            Recorrer(universidades2, univzla.slice(36,38));
            break;
        case "Guárico":
            Recorrer(universidades2, univzla.slice(38,40));
            break;
        case "Lara":
            Recorrer(universidades2, univzla.slice(40,45));
            break;
        case "La Guaira":
            Recorrer(universidades2, univzla.slice(45,46));
            break;
        case "Mérida":
            Recorrer(universidades2, univzla.slice(46,48));
            break;
        case "Miranda":
            Recorrer(universidades2, univzla.slice(48,53));
            break;
        case "Monagas":
            Recorrer(universidades2, univzla.slice(53,54));
            break;
        case "Portuguesa":
            Recorrer(universidades2, univzla.slice(54,55));
            break;
        case "Sucre":
            Recorrer(universidades2, univzla.slice(55,58));
            break;
        case "Trujillo":
            Recorrer(universidades2, univzla.slice(58,59));
            break;
        case "Táchira":
            Recorrer(universidades2, univzla.slice(59,62));
            break;
        case "Yaracuy":
            Recorrer(universidades2, univzla.slice(62,64));
            break;
        case "Zulia":
            Recorrer(universidades2, univzla.slice(64,69));
            break;

        default:
          break;
    }
}); */