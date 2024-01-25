/* 
    Script: Funcion para manejar variables globales en todos los modulos .js
    Autor: Juan
    Fecha de creacion: 24-01-2024
 */

// Inicializar variables globales junto a un valor default
let global = {
    "marcasFiltradas": null,
    "estadoActual": null,
    "municipioActual": null,
    "tipoActual": 'Ambas'
}

// Funcion para obtener el valor de la variable deseada
function getGlobal(variable){
    return global[variable]
}
// Funcion para asignar nuevo valor a la variable deseada
function setGlobal(variable, nuevoValor){
    global[variable] = nuevoValor
}

export { getGlobal, setGlobal }