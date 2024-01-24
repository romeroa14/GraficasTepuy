let global = {
    "marcasFiltradas": null,
    "estadoActual": null,
    "municipioActual": null,
    "tipoActual": 'Ambas'
}

function getGlobal(variable){
    return global[variable]
}

function setGlobal(variable, nuevoValor){
    global[variable] = nuevoValor
}

export { getGlobal, setGlobal }