/* 
    Script: Crear marcas y eventos relacionados con marcas
    Autor: Juan
    Fecha de creacion: 18/12/2023
 */

import { CARRERAS_DATA } from "./data/carreras.js";
import { AlternarPanel } from "./panel.js";
import { UNI_DATA } from "./data/universidadesData.js";
// import { crearGrafica } from "./graficos.js";

export { constructorAutoridades };
export { constructorCarreras };
export { marcasGlobal };
export { marcasHover };



// ---------- CREAR CLASE QUE CONSTRUYE LOS DATOS DE LAS MARCAS ----------
class CrearMarcaHover {
    constructor(marca, estado) {
        this.marca = marca;
        this.estado = estado;
    }
}



// ---------- CREAR MARCAS HOVER ----------
var marcasHover = [];

// Crear y guardar todas las marcas que existen en UNI_DATA
for (let universidad in UNI_DATA) {
    universidad = UNI_DATA[universidad];

    // Crear icono
    var icono = L.icon({
        iconUrl: universidad["marcador"],
        iconSize: [30, 45],
        iconAnchor: [8, 45],
        popupAnchor: [8, -40],
    });

    // Crear nueva marca
    let nuevaMarca = L.marker(universidad["coordenadas"], {icon: icono})
    // let popup = universidad["siglas"]
    // let nuevaMarca = L.marker(universidad["coordenadas"].bindPopup(popup);

    // Crear objeto con los datos de la nueva marca
    let objeto = new CrearMarcaHover(
        nuevaMarca, 
        universidad["estado"]
    );

    // Añadir nueva marca al objeto
    marcasHover.push(objeto);
}

// ---------- CREAR CLASE QUE CONSTRUYE LOS DATOS DE LAS MARCAS ----------
class CrearMarca {
    constructor(marca, nombre, estado, municipio, tipo, pagina, mision, vision, autoridades, direccion, siglas, logo) {
        this.marca = marca;
        this.nombre = nombre;
        this.estado = estado;
        this.municipio = municipio;
        this.tipo = tipo;
        this.pagina = pagina;
        this.mision = mision;
        this.vision = vision;
        this.autoridades = autoridades;
        this.direccion = direccion;
        this.siglas = siglas;
        this.logo = logo;
    }
}



// ---------- CREAR MARCAS ----------
var marcasGlobal = [];

// Crear y guardar todas las marcas que existen en universidadesData.js
for (let universidadKey in UNI_DATA) {
    let universidad = UNI_DATA[universidadKey];

    // Crear icono
    var icono = L.icon({
        iconUrl: universidad["marcador"],
        iconSize: [30, 45],
        iconAnchor: [8, 45],
        popupAnchor: [8, -40],
    });
    
    // Crear nueva marca
    let popup = `<div style='text-align:center;'><b>${universidad["siglas"]}</b><br>${universidad["nombre"]}</div>`;
    let nuevaMarca = L.marker(universidad["coordenadas"], { icon: icono }).bindPopup(popup);

    // Asignarle evento clic en la marca y enviar datos al panel de informacion
    nuevaMarca.on("click", function () {

        // Mostrar campos del panel
        panel_informacion.removeAttribute('hidden')

        // LLenar datos
        panel_nombre.innerHTML = `${universidad["nombre"]} (${universidad["siglas"]})`;
        panel_descripcion.innerHTML = universidad["descripcion"];
        panel_fachada.src = universidad["portada"];
        panel_pagina.innerHTML = universidad["pagina"];
        panel_pagina.setAttribute('href', universidad["pagina"]);
        panel_mision.innerHTML = universidad["mision"];
        panel_vision.innerHTML = universidad["vision"];
        panel_autoridades.appendChild(constructorAutoridades(universidad["autoridades"]))
        panel_carreras.appendChild(constructorCarreras(universidad["siglas"]))
        panel_direccion.innerHTML = universidad["direccion"];
        panel_logo.src = universidad["logo"];

        // panel_Graph_estudiantes.innerHTML = ""
        // panel_Graph_Transporte.innerHTML = ""
        // panel_Graph_Personal.innerHTML = ""
     
        // // Creamos graficas en los divs nuevos
        // crearGrafica(document.getElementById('panel_Graph_estudiantes'),'Cantidad_estudiantes', ['Nuevo Ingreso', 'Reingresos', 'Egresados'], [406, 508, 670], ['#7448c250', '#21c0d780', '#d99e2b50', '#cd3a8150', '#9c99cc50'], 'pie')
        // crearGrafica(document.getElementById('panel_Graph_Transporte'),'Transporte', ['Rutas Sede 1: ', 'Rutas Sede 2: ', 'Rutas Sede 3: ', 'Rutas Sede 4: '], [40, 50, 60, 30], ['#7448c250', '#21c0d780', '#d99e2b50', '#cd3a8150', '#9c99cc50'], 'pie')
        // crearGrafica(document.getElementById('panel_Graph_Personal'),'Personal', ['Personal Administrativo', 'Personal de Limpieza', 'Personal Transporte', 'Personal Comedor','Personal Obrero'], [40, 50, 60, 30], ['#7448c250', '#21c0d780', '#d99e2b50', '#cd3a8150', '#9c99cc50'], 'pie')

        // Verificar si el panel esta oculto para mostrarlo
        if(!boton_alternar.checked){
            AlternarPanel(true)
            boton_alternar.checked = true
            contenedor_boton_alternar.removeAttribute('hidden');
        }

        // Si la portada no carga/existe, mostrar una imagen por defecto
        panel_fachada.onerror = () => panel_fachada.src = './img/no-imagen.png';
        panel_logo.onerror = () => panel_logo.src = './img/no-imagen.png';

    });

    // Asignarle evento al pasar el mouse sobre la marca
    nuevaMarca.on("mouseover", function () { this.openPopup() });

    // Asignarle evento al quitar el mouse de la marca
    nuevaMarca.on("mouseout", function () { this.closePopup() });

    // Crear objeto con los datos de la nueva marca
    let objeto = new CrearMarca(
        nuevaMarca, 
        universidad["nombre"], 
        universidad["estado"], 
        universidad["municipio"], 
        universidad["tipo"],
        universidad["pagina"],
        universidad["mision"],
        universidad["vision"],
        universidad["autoridades"],
        universidad["direccion"],
        universidad["siglas"],
        universidad["logo"]
    );

    // Añadir nueva marca al objeto
    marcasGlobal.push(objeto);
}
    
// Constructor de todas las autoridades
function constructorAutoridades(autoridades){

    // Limpiar anterior div y crear nuevo div
    panel_autoridades.innerHTML = ''
    var div = document.createElement('div');

    autoridades.forEach(persona => {

        // Crear imagen
        var img = document.createElement('img')
        img.src = persona['foto'];
        img.onerror = function () {img.src = './img/no-foto.png';}
        img.className = 'autoridad-foto';
        div.appendChild(img)
    
        // Añadir nombre
        var nombre = document.createElement('div');
        nombre.classList.add('autoridad-nombre')
        nombre.innerHTML = persona['nombre']
        div.appendChild(nombre)

        // Añadir cargo
        var cargo = document.createElement('div');
        cargo.classList.add('autoridad-cargo')
        cargo.innerHTML = "("+persona['cargo']+")"
        nombre.appendChild(cargo)  
        
        // Añadir reseña
        var reseña = document.createElement('p');
        reseña.innerHTML = persona['reseña']
        div.appendChild(reseña)        

        // Añadir fichaTecnica
        var fichaTecnica = document.createElement('div');
        fichaTecnica.classList.add('autoridad-fichaTecnica')
        fichaTecnica.innerHTML = '<b>Ficha tecnica:</b><br>'
        var a = document.createElement('a');
        a.href = ''
        a.innerHTML = persona['nombre']+".pdf"
        fichaTecnica.appendChild(a)
        div.appendChild(fichaTecnica)
    
        // Añadir linea divisora
        var hr = document.createElement('hr')
        hr.classList.add('autoridad-hr')
        div.appendChild(hr)

    });

    // Retorna una estructura HTML con todas las autoridades
    return div
}

// Constructor de lista de carreras
function constructorCarreras(siglas){

    // Limpiar div e iniciaizar algunas variables
    panel_carreras.innerHTML = ''
    var div = document.createElement('div');
    const br = document.createElement('br');
    
    // Recibe todos los tipos de carreras de la universidad buscada
    let carrerasUni = CARRERAS_DATA[siglas]

    // NOTA: tipoCarrera es el nombre de cada tipo de carrera. Ejem: tipoCarrera = 'Carreras Cortas'
    for (let tipoCarrera in carrerasUni) {
        // No se que sea esto pero parece ser importante
        // if (Object.hasOwnProperty.call(carreras, carrera)) {
        //     const element = carreras[carrera];
        // }

        // Crear tipo de carrera
        var tipo = document.createElement('b');
        tipo.classList.add('encabezado')
        tipo.innerHTML = tipoCarrera
        div.appendChild(tipo)

        // Inicializar nueva lista para tipo de carrera
        var ul = document.createElement('ul');
        div.appendChild(ul)

        // Iterar por cada carrera dentro de cada tipo de carrera
        CARRERAS_DATA[siglas][tipoCarrera].forEach(carrera => {

            // Añadir carreras a la lista
            var li = document.createElement('li');
            li.innerHTML = carrera["nombre"]
            ul.appendChild(li)
    
        });
    }

    // Retorna una estructura HTML con todas las carreras
    return div
}
