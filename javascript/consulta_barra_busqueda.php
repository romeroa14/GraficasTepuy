<?php 
include_once './../php/estadisticas/estadisticas_consultas.php';
include_once './../php/funciones/main.php';

if(isset($_POST['busqueda'])) { 

    $data = limpiar_cadena($_POST['busqueda']);
    mostrar_universidad(null, null, null, $data);


}else if(isset($_POST['siglas']) ) { 

    $siglas = $_POST['siglas'];
    consultar_coordenadas(null, $siglas);
}