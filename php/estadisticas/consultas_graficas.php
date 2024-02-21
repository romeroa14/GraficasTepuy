<?php
include_once '../funciones/main.php';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $datos_selects = [];
    foreach ($_POST as $name => $value) {
        $datos_selects[$name] = $value;
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
        $stmt = $db->prepare("SELECT count(nombre_uno) as total_personas, nombre_pais, nombre_estado 
                                FROM persona p 
                                INNER JOIN sys_institucion si on p.sys_institucion_id = si.id 
                                INNER JOIN sys_sede ss ON ss.sys_institucion_id = si.id 
                                INNER JOIN sys_pais_estados spe ON spe.id = ss.dir_estado 
                                INNER JOIN sys_pais sp ON spe.pais_id = sp.id 
                                WHERE sp.nombre_pais = 'Venezuela' AND spe.id = :Select_1");
        $stmt->execute(array(':Select_1' => $Select_1));

        // $total_Personas = [];
        if ($stmt->rowCount()) {
            $respuesta = $stmt->fetchAll();
            foreach ($respuesta as $row) {
                $total_Personas[] = $row['total_personas'];
                $nombre_estados[] = $row['nombre_estado'];
            }
        }

        $objeto = new stdClass();
        $objeto->label = $nombre_estados;
        $objeto->datos = $total_Personas;

        // Devolver los datos de resultados en formato JSON
       echo json_encode($objeto, JSON_UNESCAPED_UNICODE);
       
        
        } elseif ($valuesFiltro[0] != ' ' && 
                    $valuesFiltro[1] != ' ' &&
                    $valuesFiltro[2] = 'Tipo ' &&
                    $valuesFiltro[3] = 'Universidades ' &&
                    $valuesFiltro[4] = 'Tipo de persona' &&
                    $valuesFiltro[5] = 'Sexo ' &&
                    $valuesFiltro[6] = 'Discapacidad ' &&
                    $valuesFiltro[7] = 'Grupo de cargos' &&
                    $valuesFiltro[8] = 'Cargos') {
            # code...
        }{
            
        }

    } catch(PDOException $e) {
        // Manejar errores de consulta
        die("Error: " . $e->getMessage());
    }

} else {
    $infoGraficas = [];
    $infoGraficas = [
        'error' => 'error',
        
    ];
    // Devolver los datos de resultados en formato JSON
   echo json_encode($infoGraficas, JSON_UNESCAPED_UNICODE);
}