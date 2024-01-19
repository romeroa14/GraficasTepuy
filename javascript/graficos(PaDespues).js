/* 
    Script: Crear graficos de universidades e incrustarlas en el constructor de marcas
    Autor: Alfredo
    Fecha de creacion: 15/01/2024
 */

// Función para crear gráficos y colocarlos en divs específicos
function crearGrafica(canvasId, labels, data, backgroundColor, borderColor, typeGraph) {

    // Configurar contenedor del grafico
    contenedor.createElement('div')
    contenedor.style.width = '500px';
    contenedor.style.height = '300px';
    const canvas = document.createElement('canvas')
    canvas.id = canvasId
    canvas.style.width = '400px';
    canvas.style.height = '300px';
    contenedor.appendChild(canvas)
   

    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
        type: typeGraph,
        data: {
            labels: labels,
            datasets: [{
                label: 'Datos',
                data: data,
                backgroundColor: backgroundColor.map(color => color + '80'),
                borderColor: borderColor,
                borderWidth: 0,
                hoverBorderColor: borderColor,
                hoverBorderWidth: 2,
                hoverBackgroundColor: backgroundColor
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false, // Oculta las leyendas
                },
                tooltip: {
                    enabled: true,
                    mode: 'nearest', // Modo 'nearest' para gráfico de tipo pie
                    callbacks: {
                        label: function (context) {
                            // Obtener el índice del segmento actual
                            const index = context.dataIndex;
            
                            // Obtener el valor del segmento actual
                            const value = context.dataset.data[index];
            
                            // Obtener la etiqueta del segmento actual
                            const label = context.label;
            
                            // Personalizar la información del tooltip
                            return `Segmento: ${label}, Valor: ${value}`;
                        },
                    },
                },
            },
        }
    });

    contenedor.appendChild(ctx)
    console.log(contenedor);
    return contenedor
}

// Llamadas a la función para crear gráficos en distintos divs

    // Estudiantes
    crearGrafica(['Femenino', 'masculino'], [100, 130], ['#ff5733', '#33ff57'], '#000', 'pie');
    // crearGrafica(document.getElementById('contenedor-graph2'),'grafica2', ['Asma', 'Silla de rueda', 'Ciego', 'mudo'], [40, 50, 60, 30], ['#3366ff', '#ff3366', '#66ff33', '#f00000'], '#333', 'pie');
    // crearGrafica(document.getElementById('contenedor-graph3'),'grafica3', ['retirados', 'Reingreso', 'Egresados'], [640, 510, 630], ['#3366ff', '#ff3366', '#66ff33', '#f00000'], '#333', 'pie');

    // // Rutas
    // crearGrafica(document.getElementById('contenedor-graph5'),'grafica5', ['Rutas Publicas','Rutas Privadas'], [200,150], ['#66ff33', '#f00000'], '#333', 'pie');
    // crearGrafica(document.getElementById('contenedor-graph6'),'grafica6', ['Ruta: Miranda','Ruta: Distrito Capital','Ruta: Zulia','Ruta: Miranda','Ruta: Barinas','Ruta: Barquisimeto'], [410, 550, 600, 300,300,400], ['#3366ff', '#ff3366', '#66ff33', '#f00000','#443322','#ff2233'], '#333', 'pie');

    // // Carreras
    // crearGrafica(document.getElementById('contenedor-graph9'),'grafica9', ['Especializacion', 'Maestria', 'Doctorado'], [430, 540, 610], ['#3366ff', '#ff3366', '#66ff33', '#f00000'], '#333', 'pie');

    // // Personal 
    // crearGrafica(document.getElementById('contenedor-graph13'),'grafica13', ['Personal Administrativo', 'Personal de Limpieza', 'Personal Transporte', 'Personal Comedor','Personal Obrero'], [480, 510, 610, 330], ['#3366ff', '#ff3366', '#66ff33', '#f00000'], '#333', 'pie');

export {crearGrafica}

