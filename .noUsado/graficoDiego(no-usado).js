/* 
    Script: Crear graficos
    Autor: Diego
    Fecha de creacion: un dia ahi
    Fecha de edicion: 26/12/2023 por Juan Brito
 */


window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer", {
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Universidades Nacionales Registradas en Proyecto Tepuy por Estado",
        },
        legend: {
            cursor: "pointer",
            itemclick: explodePie,
        },
        data: [
            {
                type: "pie",
                showInLegend: true,
                toolTipContent: "{name}: <strong>{y}</strong>",
                indexLabel: "{name} - {y}",
                dataPoints: [
                    { y: 2, name: "Miranda", exploded: true },
                    { y: 2, name: "Distrito Capital" },
                    { y: 1, name: "La Guaira" },
                    { y: 1, name: "Zulia" },
                    { y: 1, name: "Barinas" },
                ],
            },
        ],
    });
    chart.render();
};

function explodePie(e) {
    if (typeof e.dataSeries.dataPoints[e.dataPointIndex].exploded === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
        e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
    } else {
        e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
    }
    e.chart.render();
}
