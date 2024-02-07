<?php
// Este documento permite obtener los valores de las carreras y almacenarlas en la base de datos

// Leer el contenido del archivo JSON
$jsonFile = 'carreras.json';
$json = file_get_contents($jsonFile);

// Verificar si se leyó un JSON válido
if ($json === false) {
    http_response_code(400); // Bad Request
    exit("Error al leer el archivo JSON");
}

// Decodificar el JSON
$data = json_decode($json, true);

// Verificar si se decodificó correctamente
if ($data === null) {
    http_response_code(400); // Bad Request
    exit("Error al decodificar el JSON");
}

// Conexión con la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$database = "prueba_bd_mapa";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Recorrer los datos y realizar inserción en la base de datos
foreach ($data as $universidad) {
    $nombre = $conn->real_escape_string($universidad['nombre']);
    $siglas = $conn->real_escape_string($universidad['siglas']);

    // Verificar si la universidad ya existe
    $result = $conn->query("SELECT id FROM universidades WHERE nombre='$nombre' OR siglas='$siglas' LIMIT 1");

    if ($result && $result->num_rows > 0) {
        // La universidad ya existe, obtener su ID
        $row = $result->fetch_assoc();
        $universidadID = $row['id'];
    } else {
        // La universidad no existe, insertar nueva universidad
        $sql = "INSERT INTO universidades (nombre, siglas) VALUES ('$nombre', '$siglas')";
        $conn->query($sql);

        if ($conn->error) {
            echo "Error en universidad: " . $conn->error;
            exit();
        }

        // Obtener el ID de la universidad recién insertada
        $universidadID = $conn->insert_id;
    }

    //verificar si se encuentras las claves de los objetos antes de iterar
    if (isset($universidad['Carreras Largas']) && isset($universidad['Programa Nacional de Formación Avanzada']) && isset($universidad['Carreras Cortas']) 
    && isset($universidad['Maestrias']) && isset($universidad['Doctorados']) && isset($universidad['Programa de Estudios Avanzados']) 
    && isset($universidad['Especializaciones'])) {

            // Insertar datos de carreras largas
            foreach ($universidad['Carreras Largas'] as $carrera) {
                $carreraNombre = $conn->real_escape_string($carrera['nombre']);

                // Verificar si la carrera larga ya existe para esta universidad
                $result = $conn->query("SELECT id FROM carreras_largas WHERE universidad_id='$universidadID' AND nombre='$carreraNombre' LIMIT 1");

                if ($result && $result->num_rows == 0) {
                    // La carrera larga no existe, insertar nueva carrera larga
                    $sql = "INSERT INTO carreras_largas (universidad_id, nombre) VALUES ('$universidadID', '$carreraNombre')";
                    $conn->query($sql);

                    if ($conn->error) {
                        echo "Error en la carrera larga: " . $conn->error;
                        exit();
                    }
                }
            }
        


        // Insertar Programa Nacional de Formación Avanzada pnfa
        foreach ($universidad['Programa Nacional de Formación Avanzada'] as $carrera) {
            $carreraNombre = $conn->real_escape_string($carrera['nombre']);

            // Verificar si la carrera larga ya existe para esta universidad
            $result = $conn->query("SELECT id FROM pnfa WHERE universidad_id='$universidadID' AND nombre='$carreraNombre' LIMIT 1");

            if ($result && $result->num_rows == 0) {
                // La carrera larga no existe, insertar nueva carrera larga
                $sql = "INSERT INTO pnfa (universidad_id, nombre) VALUES ('$universidadID', '$carreraNombre')";
                $conn->query($sql);

                if ($conn->error) {
                    echo "Error en la pnfa: " . $conn->error;
                    exit();
                }
            }
        }
        

        // Insertar Carreras Cortas
        foreach ($universidad['Carreras Cortas'] as $carrera) {
            $carreraNombre = $conn->real_escape_string($carrera['nombre']);

            // Verificar si la carrera larga ya existe para esta universidad
            $result = $conn->query("SELECT id FROM carreras_cortas WHERE universidad_id='$universidadID' AND nombre='$carreraNombre' LIMIT 1");

            if ($result && $result->num_rows == 0) {
                // La carrera larga no existe, insertar nueva carrera larga
                $sql = "INSERT INTO carreras_cortas (universidad_id, nombre) VALUES ('$universidadID', '$carreraNombre')";
                $conn->query($sql);

                if ($conn->error) {
                    echo "Error en la carreras_cortas: " . $conn->error;
                    exit();
                }
            }
        }

        // Insertar Maestrias
        foreach ($universidad['Maestrias'] as $carrera) {
            $carreraNombre = $conn->real_escape_string($carrera['nombre']);

            // Verificar si la carrera larga ya existe para esta universidad
            $result = $conn->query("SELECT id FROM maestrias WHERE universidad_id='$universidadID' AND nombre='$carreraNombre' LIMIT 1");

            if ($result && $result->num_rows == 0) {
                // La carrera larga no existe, insertar nueva carrera larga
                $sql = "INSERT INTO maestrias (universidad_id, nombre) VALUES ('$universidadID', '$carreraNombre')";
                $conn->query($sql);

                if ($conn->error) {
                    echo "Error en la maestrias: " . $conn->error;
                    exit();
                }
            }
        }

        // Insertar Doctorados
        foreach ($universidad['Doctorados'] as $carrera) {
            $carreraNombre = $conn->real_escape_string($carrera['nombre']);

            // Verificar si la carrera larga ya existe para esta universidad
            $result = $conn->query("SELECT id FROM doctorados WHERE universidad_id='$universidadID' AND nombre='$carreraNombre' LIMIT 1");

            if ($result && $result->num_rows == 0) {
                // La carrera larga no existe, insertar nueva carrera larga
                $sql = "INSERT INTO doctorados (universidad_id, nombre) VALUES ('$universidadID', '$carreraNombre')";
                $conn->query($sql);

                if ($conn->error) {
                    echo "Error en la doctorados: " . $conn->error;
                    exit();
                }
            }
        }

        // Insertar Programa de Estudios Avanzados
        foreach ($universidad['Programa de Estudios Avanzados'] as $carrera) {
            $carreraNombre = $conn->real_escape_string($carrera['nombre']);

            // Verificar si la carrera larga ya existe para esta universidad
            $result = $conn->query("SELECT id FROM programa_avanzado WHERE universidad_id='$universidadID' AND nombre='$carreraNombre' LIMIT 1");

            if ($result && $result->num_rows == 0) {
                // La carrera larga no existe, insertar nueva carrera larga
                $sql = "INSERT INTO programa_avanzado (universidad_id, nombre) VALUES ('$universidadID', '$carreraNombre')";
                $conn->query($sql);

                if ($conn->error) {
                    echo "Error en la doctorados: " . $conn->error;
                    exit();
                }
            }
        }

        // Insertar Especializaciones
        foreach ($universidad['Especializaciones'] as $carrera) {
            $carreraNombre = $conn->real_escape_string($carrera['nombre']);

            // Verificar si la carrera larga ya existe para esta universidad
            $result = $conn->query("SELECT id FROM especializaciones WHERE universidad_id='$universidadID' AND nombre='$carreraNombre' LIMIT 1");

            if ($result && $result->num_rows == 0) {
                // La carrera larga no existe, insertar nueva carrera larga
                $sql = "INSERT INTO especializaciones (universidad_id, nombre) VALUES ('$universidadID', '$carreraNombre')";
                $conn->query($sql);

                if ($conn->error) {
                    echo "Error en la doctorados: " . $conn->error;
                    exit();
                }
            }
        }
    }


}

// Éxito: Todos los datos se insertaron correctamente
echo "Datos insertados correctamente para todas las data y habilidades";

// Cerrar la conexión
$conn->close();
?>
