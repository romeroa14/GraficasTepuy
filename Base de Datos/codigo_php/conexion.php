<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "prueba_bd_mapa";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$sql = "INSERT INTO personas (nombre1, nombre2, apellido1, apellido2, nacimiento, cedula, foto, sexo, direccion, telefono, empleado_tipo, condicion, cargo)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

// Crear una instancia de mysqli_stmt
$stmt = $conn->stmt_init();

// Preparar la consulta SQL
if ($stmt->prepare($sql)) {
    // Bind de los parámetros usando variables temporales
    $stmt->bind_param("sssssibssisss", 
        $nombre1, $nombre2, $apellido1, $apellido2, $nacimiento, $cedula, $foto, $sexo, $direccion, $telefono, $empleado_tipo, $condicion, $cargo);

    // Obtener datos del formulario usando $_POST
   // Obtener datos del formulario usando $_POST
$nombre1 = $_POST['nombre1'] ?? null;
$nombre2 = $_POST['nombre2'] ?? null;
$apellido1 = $_POST['apellido1'] ?? null;
$apellido2 = $_POST['apellido2'] ?? null;
$nacimiento = $_POST['nacimiento'] ?? null;
$cedula = $_POST['cedula'] ?? null;
$foto = $_POST['foto'] ?? null;  // En este caso, la ruta del archivo es suficiente, ya que no se utiliza file_get_contents
$sexo = $_POST['sexo'] ?? null;
$direccion = $_POST['direccion'] ?? null;
$telefono = $_POST['telefono'] ?? null;
$empleado_tipo = $_POST['empleado_tipo'] ?? null;
$condicion = $_POST['condicion'] ?? null;
$cargo = $_POST['cargo'] ?? null;
 }
// Verificar si los datos están llegando correctamente
if ($nombre1 === null || $nombre2 === null || $apellido1 === null || $apellido2 === null || $nacimiento === null || $cedula === null
|| $foto === null || $direccion === null || $telefono === null || $empleado_tipo === null || $condicion === null || $cargo === null) {
    die("Error: Los datos de la persona son nulos o incorrectos.");
}

// Crear una instancia de mysqli_stmt
$stmt = $conn->stmt_init();

// Preparar la consulta SQL
if ($stmt->prepare($sql)) {
    // Bind de los parámetros usando variables temporales
    $stmt->bind_param("sssssibssisss", 
        $nombre1, $nombre2, $apellido1, $apellido2, $nacimiento, $cedula, $foto, $sexo, $direccion, $telefono, $empleado_tipo, $condicion, $cargo);

    // Ejecutar la consulta
    if (!$stmt->execute()) {
        die("Error al ejecutar la consulta: " . $stmt->error);
    }

    // Cerrar el enunciado
    $stmt->close();
} else {
    die("Error en la preparación del SQL" . $conn->error);
}


// Cerrar la conexión
$conn->close();

echo "Datos insertados correctamente";
?>
