<?php
// este documento me permite obtener los valores de varias personas de un JSON y los agrega en una sola tabla

// Leer el contenido del archivo JSON
$jsonFile = 'personaData.json';
$json = file_get_contents($jsonFile);

// Verificar si se leyó un JSON válido
if ($json === false) {
    http_response_code(400); // Bad Request
    exit("Error al leer el archivo JSON");
}

// Decodificar el JSON
$personas = json_decode($json, true);

// Verificar si se decodificó correctamente
if ($personas === null) {
    http_response_code(400); // Bad Request
    exit("Error al decodificar el JSON");
}

// conexxion con la base de datos
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

// Insertar datos de cada persona en la base de datos
foreach ($personas as $persona) {
    $sql = "INSERT INTO personas (nombre1, nombre2, apellido1, apellido2, nacimiento, cedula, foto, sexo, direccion, telefono, empleado_tipo, condicion, cargo)
    VALUES (
        '".$persona['nombre1']."', '".$persona['nombre2']."', '".$persona['apellido1']."', '".$persona['apellido2']."', '".$persona['nacimiento']."',
        '".$persona['cedula']."', '".$persona['foto']."', '".$persona['sexo']."', '".$persona['direccion']."', '".$persona['telefono']."',
        '".$persona['empleado_tipo']."', '".$persona['condicion']."', '".$persona['cargo']."'
    )";

    if ($conn->query($sql) !== TRUE) {
        http_response_code(500); // Internal Server Error
        echo "Error al insertar datos: " . $conn->error;
        $conn->close();
        exit;
    }
}

// Éxito: Todos los datos se insertaron correctamente
echo "Datos insertados correctamente para todas las personas";

// Cerrar la conexión
$conn->close();
?>