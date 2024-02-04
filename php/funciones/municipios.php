<?php 
    include_once './estadisticas_consultas.php';
    include_once './main.php';
    
    if(isset($_POST['id'])) {
        mostrar_municipios($_POST['id']);
        } 
    else {
        echo '<option value="">post Seleccionar municipio</option>'; // Opción predeterminada si no se recibe un ID de estado
    }
    
?>