/* 
    Script: Crear graficas mediante una funcion
    Autor: Alfredo
    Fecha de creacion: 15/01/2024
 */

export {crearGrafica}

// ---------- FUNCION CREAR GRAFICOS ----------

// Función para crear gráficos y colocarlos en divs específicos
function crearGrafica(divId, canvasId, labels, data, backgroundColor, typeGraph) {
  
    
    divId.style.width = '500px';
    divId.style.height = '200px';

    
    const canvas = document.createElement('canvas')
    canvas.id = canvasId


    divId.appendChild(canvas)

    // canvas.style.width = '1000px';
    // canvas.style.height = '300px';
    
    const ctx = canvas.getContext('2d')

   
    new Chart(ctx, {
        type: typeGraph,
        data: {
            labels: labels,
            datasets: [{
                label: 'Datos',
                data: data,
                backgroundColor: backgroundColor,
                borderColor: ['#7448c2', '#21c0d7', '#d99e2b', '#cd3a81', '#9c99cc'],
                borderWidth: 1,
                // hoverBorderColor:'#6ccdde',
                hoverBorderWidth: 1.5,
                hoverBackgroundColor: ['#7448c2', '#21c0d7', '#d99e2b', '#cd3a81', '#9c99cc'],
                
            }]
        },

        options: {
            plugins: {
                legend: {
                    display: true,
                    position: 'left', // Puedes cambiar a 'top', 'left', 'right', 'chartArea', o personalizar la posición
                    align: 'Center', // Centra la leyenda
                    labels: {
                      usePointStyle: true, // Utiliza puntos en lugar de cuadrados para los elementos
                      fontSize: 15 // Tamaño de fuente
                    }
                  },

         },
    },
   

});
}

// Principales

// crearGrafica(document.getElementById('Grafica_principal1'),'graficaPrincipal', ['Femenino', 'masculino',  'masculino',  'masculino',  'masculino'], [100, 130, 233, 431, 311], ['#ff5733', '#33ff57','#66ff33', '#f00000','#555'], 'pie');
// crearGrafica(document.getElementById('Grafica_principal2'),'graficaPrincipal', ['Femenino', 'masculino'], [100, 130], ['#ff5733', '#33ff57'], 'pie');
// crearGrafica(document.getElementById('Grafica_principal3'),'graficaPrincipal', ['Femenino', 'masculino'], [100, 130], ['#ff5733', '#33ff57'], 'pie');
// crearGrafica(document.getElementById('Grafica_principal4'),'graficaPrincipal', ['Femenino', 'masculino'], [100, 130], ['#ff5733', '#33ff57'], 'pie');

crearGrafica(document.getElementById('Grafica_principal1'),'graficaPrincipal', ['Instructores', 'Profesores Asistentes', 'Los Profesores Agregados', 'Los Profesores Asociados', 'Los Profesores Titulares'], [100, 130, 22, 444, 140], ['#7448c250', '#21c0d780', '#d99e2b50', '#cd3a8150', '#9c99cc50'],  'pie');
crearGrafica(document.getElementById('Grafica_principal2'),'graficaPrincipal', ['Femenino', 'masculino'], [100, 130], ['#7448c250', '#21c0d780', '#d99e2b50', '#cd3a8150', '#9c99cc50'], 'pie');
crearGrafica(document.getElementById('Grafica_principal3'),'graficaPrincipal', ['Administrativo', 'Obrero'], [8000, 7000], ['#7448c250', '#21c0d780', '#d99e2b50', '#cd3a8150', '#9c99cc50'], 'pie');
crearGrafica(document.getElementById('Grafica_principal4'),'graficaPrincipal', ['2023', '2022', '2021', '2020', '2019'], [3040, 2001, 4000, 4000, 5000], ['#7448c250', '#21c0d780', '#d99e2b50', '#cd3a8150', '#9c99cc50'], 'pie');


// Llamadas a la función para crear gráficos en distintos divs

    // profesores
    crearGrafica(document.getElementById('contenedor-graph1'),'grafica1', ['Femenino', 'masculino'], [100, 130], ['#7448c250', '#21c0d780', '#d99e2b50', '#cd3a8150', '#9c99cc50'],'pie');
    crearGrafica(document.getElementById('contenedor-graph2'),'grafica2', ['Instructores', 'Profesores Asistentes', 'Los Profesores Agregados', 'Los Profesores Asociados', 'Los Profesores Titulares'], [100, 130, 22, 444, 140], ['#7448c250', '#21c0d780', '#d99e2b50', '#cd3a8150', '#9c99cc50'],  'pie');
    // crearGrafica(document.getElementById('contenedor-graph3'),'grafica3', ['retirados', 'Reingreso', 'Egresados'], [640, 510, 630], ['#3366ff', '#ff3366', '#66ff33', '#f00000'], 'pie');

//    // Estudiantes
    crearGrafica(document.getElementById('contenedor-graph3'),'grafica3', ['Femenino', 'masculino'], [8000, 7000], ['#7448c250', '#21c0d780', '#d99e2b50', '#cd3a8150', '#9c99cc50'],'pie');
    crearGrafica(document.getElementById('contenedor-graph4'),'grafica4', ['Visual','Motora','Intelectual','Espectro Autista','Auditiva'], [410, 550, 600, 300,300,400], ['#7448c250', '#21c0d780', '#d99e2b50', '#cd3a8150', '#9c99cc50'],'pie');
    crearGrafica(document.getElementById('contenedor-graph5'),'grafica5', ['Ingreso','Prosecucion','Egreso'], [5000, 4000, 6000], ['#7448c250', '#21c0d780', '#d99e2b50', '#cd3a8150', '#9c99cc50'],'pie');

    // Personal
   crearGrafica(document.getElementById('contenedor-graph6'),'grafica6', ['Grupo de administración', ' Grupo secretaria', 'Grupo de Información y control estudiantil', 'Grupo de administración', 'Grupo de informática'], [430, 540, 610], ['#7448c250', '#21c0d780', '#d99e2b50', '#cd3a8150', '#9c99cc50'],'pie');
crearGrafica(document.getElementById('contenedor-graph7'),'grafica7', ['Albañil', 'Almacenista', 'Apicultor', 'Ascensorista', 'Mecanico'], [430, 540, 610], ['#7448c250', '#21c0d780', '#d99e2b50', '#cd3a8150', '#9c99cc50'],'pie');

// Egresados 
    crearGrafica(document.getElementById('contenedor-graph8'),'grafica8', ['2023', '2022', '2021', '2020', '2019'], [3040, 2001, 4000, 4000, 5000], ['#7448c250', '#21c0d780', '#d99e2b50', '#cd3a8150', '#9c99cc50'],'pie');
