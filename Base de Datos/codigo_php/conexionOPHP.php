<?php
// este documento me permite ingresar todas las carreras de las universidades en la base de datos

// Incluir el archivo con el objeto PHP
include('personaData.php');

// conexxion con la base de datos
$servername = "localhost";
$username = "root";
$password = "root";
$database = "prueba_bd_mapa";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Iterar sobre las personas en el objeto PHP
foreach ($personasData as $persona) {
    // Insertar datos de cada persona en la tabla 'personas'
    $sql = "INSERT INTO personas (nombre1, nombre2, apellido1, apellido2, nacimiento, cedula, foto, sexo, direccion, telefono, empleado_tipo, condicion, cargo)
    VALUES (
        '".$persona['nombre1']."', '".$persona['nombre2']."', '".$persona['apellido1']."', '".$persona['apellido2']."', '".$persona['nacimiento']."',
        '".$persona['cedula']."', '".$persona['foto']."', '".$persona['sexo']."', '".$persona['direccion']."', '".$persona['telefono']."',
        '".$persona['empleado_tipo']."', '".$persona['condicion']."', '".$persona['cargo']."'
    )";

    if ($conn->query($sql) !== TRUE) {
        die("Error al insertar datos en la tabla 'personas': " . $conn->error);
    }

    // Obtener el ID de la persona recién insertada
    $personaId = $conn->insert_id;

    // Insertar datos de habilidades en la tabla 'habilidades'
    foreach ($persona['habilidades'] as $habilidad) {
        $sqlHabilidad = "INSERT INTO habilidades (persona_id, habilidad)
        VALUES (
            '".$personaId."', '".$habilidad['habilidad']."'
        )";

        if ($conn->query($sqlHabilidad) !== TRUE) {
            die("Error al insertar datos en la tabla 'habilidades': " . $conn->error);
        }
    }
}

echo "Datos insertados correctamente en las tablas 'personas' y 'habilidades'";

// Cerrar la conexión
$conn->close();
?>