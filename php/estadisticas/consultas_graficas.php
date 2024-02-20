<?php
include_once '../funciones/main.php';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $datos_selects = [];
    foreach ($_POST as $name => $value) {
        $datos_selects[$name] = $value;
    }

     echo 'Datos recolectados según esta lógica: <br>';
    foreach ($datos_selects as $name => $value) {
        echo "Nombre del select: $name, Valor seleccionado: $value <br>";
    } 



    $valuesFiltro = array_values($datos_selects);
    

    $Select_1 = $valuesFiltro[0];
    $Select_2 = $valuesFiltro[1];
    $Select_3 = $valuesFiltro[2];
    $Select_4 = $valuesFiltro[3];
    $Select_5 = $valuesFiltro[4];
    $Select_6 = $valuesFiltro[5];
    $Select_7 = $valuesFiltro[6];
    $Select_8 = $valuesFiltro[7];
    $Select_9 = $valuesFiltro[8];

    try {



        $db = conexion();

        if ($valuesFiltro[0] != ' ' && 
            $valuesFiltro[1] = ' ' &&
            $valuesFiltro[2] = 'Tipo ' &&
            $valuesFiltro[3] = 'Universidades ' &&
            $valuesFiltro[4] = 'Tipo de persona' &&
            $valuesFiltro[5] = 'Sexo ' &&
            $valuesFiltro[6] = 'Discapacidad ' &&
            $valuesFiltro[7] = 'Grupo de cargos' &&
            $valuesFiltro[8] = 'Cargos') {
            
       

        // Preparar la consulta SQL con marcadores de posición
        $stmt = $db->prepare("SELECT id, apellido_uno, nombre_uno, sys_institucion_id FROM persona WHERE sys_institucion_id = :select1");
        $stmt->execute(array(':select1' => $Select_1));
        $resultados = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Devolver los datos de resultados en formato JSON
        echo 'Si recibi la informacion de la base de datos' .json_encode($resultados);
    } else {
        echo 'estas haciendo mal la comparacion';
    }

    } catch(PDOException $e) {
        // Manejar errores de consulta
        die("Error: " . $e->getMessage());
    }

} else {
    echo 'No hay un envío por POST';
}