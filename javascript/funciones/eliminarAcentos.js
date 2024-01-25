/* 
    Script: Funcion que recibe un string y devuelve un string sin acentos
    Autor: Ezequiel
    Fecha de creacion: 12-01-2024
 */

// Funcion para eliminar acentos
function eliminarAcentos(texto) {
    const mapaAcentos = {
    'á': 'a',
    'é': 'e',
    'í': 'i',
    'ó': 'o',
    'ú': 'u',
    'Á': 'A',
    'É': 'E',
    'Í': 'I',
    'Ó': 'O',
    'Ú': 'U',
    'ü': 'u',
    'ñ': 'n'
};

// Expresión regular para buscar y reemplazar caracteres acentuados
return texto.replace(/[áéíóúÁÉÍÓÚ]/g, (match) => mapaAcentos[match] || match);
}

export { eliminarAcentos }