<?php
include_once './php/funciones/main.php';



// Recibir los datos del cuerpo de la solicitud POST
$jsonDatos = file_get_contents('php://input');

// Decodificar el JSON en un array PHP
$datos = json_decode($jsonDatos, true);

if ($datos ) {
    // echo json_encode($datos, JSON_UNESCAPED_UNICODE);

    foreach ($datos as $clave => $valor) {
        // Aquí $clave sería "UBTJR", "UNES", "UVH", etc.
        // Y $valor sería el array asociado a esa clave

        foreach( $carrera as $valor ){
        $materias = conexion();
        
    
        
        }
    }
}else{
echo 'si es Juan';
}





