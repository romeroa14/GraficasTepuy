import { UNI_DATA } from "./universidadesData.js";


// Convertir UNI_DATA en un array para poder filtrarlo
const uniArray = Object.values(UNI_DATA);

let sugerenciasUniversidades = []

for (let uni of uniArray) {
    let nuevaSugerencia = `${uni.nombre} (${uni.siglas})`
    sugerenciasUniversidades.push(nuevaSugerencia)
}

export {sugerenciasUniversidades}