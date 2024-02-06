<?php

// Recibir los datos enviados desde JavaScript
$data = json_decode(file_get_contents('php://input'), true);

// Verificar si se recibieron los datos correctamente
if(isset($data['uniData'])) {
    // Acceder a los datos del objeto UNI_DATA
    $uniData = $data['uniData'];

    // Hacer lo que necesites con los datos
    // Por ejemplo, aquí podrías almacenar los datos en una base de datos, mostrarlos en una página web, etc.

    // Devolver una respuesta
    echo json_encode(['message' => 'Data received successfully']);
} else {
    // Si no se recibieron los datos correctamente, devolver un mensaje de error
    echo json_encode(['error' => 'No data received']);
}

foreach ($uniData as $codigo => $universidad) {
    // Acceder a las coordenadas de cada universidad
    $coordenadas = $universidad['coordenadas'];
    // Imprimir las coordenadas de la universidad
    echo "Coordenadas de la universidad $codigo: Latitud: $coordenadas[0], Longitud: $coordenadas[1]<br>";
}