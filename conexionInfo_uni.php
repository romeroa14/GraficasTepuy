<?php
include_once './php/funciones/main.php';
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
// print_r( $data );

// Verificar si se decodificó correctamente
if ($data === null) {
    http_response_code(400); // Bad Request
    exit("Error al decodificar el JSON");
}


// Recorrer los datos e insertar en la base de datos

foreach ($data as $universidad) {
    // Obtener valores
    $code_uni = $universidad['code_uni'];
    $nombre_uni = $universidad['nombre'];
    $siglas= $universidad['siglas'];
    $mision= $universidad['mision'];
    $vision= $universidad['vision'];
    $descripcion= $universidad['descripcion'];
    $portada= $universidad['portada'];
    $logo= $universidad['logo'];
    $escudo= $universidad['escudo'];
    $estado= mb_convert_case($universidad['estado'], MB_CASE_TITLE, "UTF-8");
    $id_municipio= $universidad['municipio'];
    $direccion= $universidad['direccion'];
    $tipo= $universidad['tipo'];
    $marcador= $universidad['marcador'];
    $coordenadas = $universidad['coordenadas'];
    $autoridades = $universidad['autoridades'];

    
    
    echo $nombre_uni."-----".$estado."------".$tipo."------".$id_municipio."<br>"; 


   

    $conexion = conexion();
    $consulta = $conexion->prepare("SELECT institucion FROM sys_institucion WHERE institucion = :nombre_uni");
    $marcadores_consulta=[":nombre_uni"=>$nombre_uni];
    $consulta->execute($marcadores_consulta);
    if (!$consulta->rowCount()){
        // $conexion = conexion();
        $insert = $conexion->prepare("INSERT INTO sys_institucion (institucion, abreviatura, tipo_univ, mision, vision, descripcion, municipio_id) VALUES (:nombre, :siglas, :tipo, :mision, :vision, :descripcion, :id_municipio)");
        
        $marcadores=[
            ":nombre"=>$nombre_uni,
            ":siglas"=>$siglas,
            ":tipo"=>$tipo,
            ":mision"=>$mision,
            ":vision"=>$vision,
            ":descripcion"=>$descripcion,
            ":id_municipio"=>$id_municipio
        ]; 
        $insert->execute($marcadores);
        if ($insert->rowCount()) {
            echo $nombre_uni.'<br>';
        }
        $consulta = null;
    }
    

        // echo $nombre_uni.'<br>';
    // echo "Institución agregada: ". $nombre_uni;
    $conexion = null;
}

// print_r($code_uni[0]);
    // print_r($code_uni);
    // print_r($pagina);
    // print_r($mision);
    // print_r($vision);
    // print_r($descripcion);
    // print_r($portada);
    // print_r($logo);
    // print_r($escudo);
    // print_r($estado);
    // print_r($municipio);
    // print_r($direccion);
    // print_r($tipo);
    // print_r($marcador);
    // print_r($coordenadas);
    // print_r($autoridades);
// // Éxito: Todos los datos se insertaron correctamente
// echo "Datos insertados correctamente en la base de datos";

// // Cerrar la conexión
// $conn->close();
?>