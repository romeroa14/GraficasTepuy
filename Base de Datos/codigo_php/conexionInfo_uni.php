<?php
// este documento me permite obtener los valores de varias personas de un JSON y los agrega en DOS tablas

// Leer el contenido del archivo JSON
$jsonFile = 'universidadesData.json';
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

// conexxion con la base de datos
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

// Recorrer los datos e insertar en la base de datos

foreach ($data as $universidad) {
    // Obtener valores
    $nombre = $conn->real_escape_string($universidad['nombre']);
    $siglas = $conn->real_escape_string($universidad['siglas']);
    $pagina = $conn->real_escape_string($universidad['pagina']);
    $mision = $conn->real_escape_string($universidad['mision']);
    $vision = $conn->real_escape_string($universidad['vision']);
    $descripcion = $conn->real_escape_string($universidad['descripcion']);
    $portada = $conn->real_escape_string($universidad['portada']);
    $logo = $conn->real_escape_string($universidad['logo']);
    $escudo = $conn->real_escape_string($universidad['escudo']);
    $estado = $conn->real_escape_string($universidad['estado']);
    $municipio = $conn->real_escape_string($universidad['municipio']);
    $direccion = $conn->real_escape_string($universidad['direccion']);
    $tipo = $conn->real_escape_string($universidad['tipo']);
    $marcador = $conn->real_escape_string($universidad['marcador']);
    $estatus = $conn->real_escape_string($universidad['estatus']);
    $latitud = $conn->real_escape_string($universidad['coordenadas']['0']); 
    $longitud = $conn->real_escape_string($universidad['coordenadas']['1']);
    
    // $coordenadas = $conn->real_escape_string($universidad['coordenadas']);

    // Verificar si la universidad ya existe
    $result = $conn->query("SELECT id FROM sys_institucion WHERE abreviatura='$siglas' LIMIT 1");

    if ($result && $result->num_rows > 0) {
        // La universidad ya existe, obtener su ID
        $row = $result->fetch_assoc();
        $universidadID = $row['id'];
    } else {
        // Insertar datos de la universidad
        $sql = "INSERT INTO sys_institucion (institucion, abreviatura, tipo_univ, mision, vision, descripcion, portal, direccion, latitud, longitud, estado_id, municipio_id, logo, marcador, portada, status) 
                VALUES ('$nombre', '$siglas', '$tipo', '$mision', '$vision', '$descripcion', '$pagina', '$direccion', '$latitud', '$longitud', '$estado', '$municipio', '$logo', '$marcador', '$portada', '$estatus')";

        $conn->query($sql);

        if ($conn->error) {
            echo "Error en universidad: " . $conn->error;
            exit();
        }

        // Obtener el ID de la universidad recién insertada
        $universidadID = $conn->insert_id;

    }

    // Insertar datos de autoridades
    if(isset($universidad['autoridades']) && is_array($universidad['autoridades'])){
        //echo 'entro aqui';
        foreach ($universidad['autoridades'] as $autoridad) {
            $nombre_autoridad = $conn->real_escape_string($autoridad['nombre']);
            $cedula_autoridad = $conn->real_escape_string($autoridad['cedula']);
            $reseña = $conn->real_escape_string($autoridad['reseña']);
            $cargo_autoridad = $conn->real_escape_string($autoridad['cargo']);
            $foto = $conn->real_escape_string($autoridad['foto']);
            $url_curriculum = $conn->real_escape_string($autoridad['url_curriculum']);
            
            //Verificar si la universidad ya existe
            $result = $conn->query("SELECT id FROM sys_institucion_autoridad WHERE nombre='$nombre_autoridad' LIMIT 1");

            if ($result && $result->num_rows > 0) {
                // La universidad ya existe, obtener su ID
                $row = $result->fetch_assoc();
                $universidadID = $row['id'];
            } else {

                // Insertar datos de la universidad
                $sql_autoridad = "INSERT INTO sys_institucion_autoridad (id, sys_institucion_id, nombre, cedula, resenia, cargo, foto, url_curriculum) 
                VALUES (NULL, '$universidadID', '$nombre_autoridad', '$cedula_autoridad', '$reseña', '$cargo_autoridad', '$foto', '$url_curriculum')";
            
                $conn->query($sql_autoridad);

                if ($conn->error) {
                    echo "Error en autoridad: " . $conn->error;
                    exit();
                }
            }
        }
    }
}

// Éxito: Todos los datos se insertaron correctamente
echo "Datos insertados correctamente en la base de datos";

// Cerrar la conexión
$conn->close();
?>