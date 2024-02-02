const select_ajax=document.querySelectorAll(".select");
// const select_ajax=document.querySelector("#select_estado");

function valor_select(e){
    let data= this.value
    let method="POST";
    let action='../../php/inc/estaditicas-filtro.php';        
    let config={
        method: method,
        body: 'valor=' + data,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    };

    fetch(action,config)
    .then(respuesta => respuesta.text())
    .then(data => console.log(data))


}

select_ajax.forEach((selects) => {
    selects.addEventListener("change",valor_select);
});




// select_ajax.addEventListener("change",valor_select());