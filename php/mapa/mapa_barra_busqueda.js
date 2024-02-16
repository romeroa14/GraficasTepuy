fetch('./mapa_barra_busquedas_sugerencias.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'id=' +select_actual +','+value_actual
})
.then(res => {
    if(!res.ok) {
        throw new Error('Hubo un error en la respuesta');
    }
    return res.text(); // Cambiamos a res.text() para leer la respuesta como texto
})
// .then(sugerencias => console.log(sugerencias))
.then(sugerencias => {
    if (sugerencias != '') {
        
    
    }
    
})
.catch(error => {
    console.error('Ocurrió un error ' + error);
})