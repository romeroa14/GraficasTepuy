<?php

// Este documento permite obtener los valores de las carreras y almacenarlas en la base de datos

// Ruta del archivo JSON
$jsonFile = 'carreras.json';

// Leer el contenido del archivo JSON
$jsonData = file_get_contents($jsonFile);

// Verificar si se leyó un JSON válido
if ($jsonData === false) {
    http_response_code(400); // Bad Request
    exit("Error al leer el archivo JSON");
}

// Decodificar el JSON
$data = json_decode($jsonData, true);

// Verificar si se decodificó correctamente
if ($data === null) {
    http_response_code(400); // Bad Request
    exit("Error al decodificar el JSON");
}

// Conexión con la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$database = "laravel_sistema_ce.sql";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Recorrer los datos y realizar inserción en la base de datos
foreach ($data as $universidad) {
    if (isset($universidad['id_uni'])) {
        $id_uni = $conn->real_escape_string($universidad['id_uni']);

        foreach ($universidad as $categoria => $carreras) {
            // Validar que $categoria no sea 'id_uni' y que $carreras sea un array
            if ($categoria !== 'id_uni' && is_array($carreras)) {
                foreach ($carreras as $carrera) {
                    
                    // Verificar la existencia de las claves 'id' y 'nombre' en $carrera
                    if (isset( $carrera['nombre'])) {
                        
                        $nombre = $conn->real_escape_string($carrera['nombre']);

                        // Verificar si la entrada ya existe
                        $result = $conn->query("SELECT id FROM aca_programa WHERE sys_institucion_id='$id_uni' AND programa='$categoria' AND nombre_formal='$nombre' LIMIT 1");

                        if ($result && $result->num_rows == 0) {
                            // La entrada no existe, insertar nueva entrada
                            $sql = "INSERT INTO aca_programa (sys_institucion_id, programa, nombre_formal) 
                            VALUES ('$id_uni', '$categoria', '$nombre')";
                            $conn->query($sql);

                            echo 'nombres carreras insertadas correctamente';

                            if ($conn->error) {
                                echo "Error en la inserción: " . $conn->error;
                                exit();
                            }
                        }
                    }
                }
            }
        }
    }
}


// Éxito: Todos los datos se insertaron correctamente
echo "Datos insertados correctamente en la tabla aca_programa";

// Cerrar la conexión
$conn->close();
?>