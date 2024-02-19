<?php 
include_once './../php/estadisticas/estadisticas_consultas.php';
include_once './../php/funciones/main.php';
if(isset($_POST['siglas'])) {
    mostrar_data($_POST['siglas']);
}


