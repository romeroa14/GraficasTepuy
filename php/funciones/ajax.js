const selects_estaditicas=document.querySelectorAll(".select");

function mostrar_datos(e){
    let id_actual = this.value
    let select_actual = this.id
    select_actual = parseInt(select_actual.match(/\d/)[0]);
    let select_siguiente = select_actual + 1 
    select_siguiente = select_siguiente.toString()
    console.log( `select actual = ${select_actual}, siguiente id =${select_siguiente}`);
    fetch('./php/funciones/municipios.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'id=' + id_actual
    })
    .then(res => {
        if(!res.ok) {
            throw new Error('Hubo un error en la respuesta');
        }
        return res.text(); // Cambiamos a res.text() para leer la respuesta como texto
    })
    .then(html => {
        if (html != '') {

            if (select_actual == '1') {
                document.querySelector(`#select_${parseInt(select_actual)+2}`).disabled = false;
                
            }if (select_actual == '2') {
                return
            } else {
                let siguiente_select = document.querySelector(`#select_${select_siguiente}`)
                siguiente_select.disabled = false;
                siguiente_select.innerHTML = html;
            }
            
                

                
            
        }else{
            document.querySelector(`#select_${id_siguiente}`).innerHTML = '<option value="">sin municipio</option>'
        }
        
    })
    .catch(error => {
        console.error('Ocurrió un error ' + error);
    });
};

selects_estaditicas.forEach(select => {
    select.addEventListener("change",mostrar_datos);
});