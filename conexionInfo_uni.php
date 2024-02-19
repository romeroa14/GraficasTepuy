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
$code_uni = 1;
foreach ($data as $universidad) {
    // Obtener valores
    
    $nombre_uni = $universidad['nombre'];
    $siglas= $universidad['siglas'];
    $mision= $universidad['mision'];
    $vision= $universidad['vision'];
    $descripcion= $universidad['descripcion'];
    $portada= $universidad['portada'];
    $logo= $universidad['logo'];
    $escudo= $universidad['escudo'];
    $pagina= $universidad['pagina'];
    $estado= mb_convert_case($universidad['estado'], MB_CASE_TITLE, "UTF-8");
    $id_municipio= $universidad['municipio'];
    $direccion= $universidad['direccion'];
    $tipo= $universidad['tipo'];
    $marcador= $universidad['marcador'];
    $coordenadas = $universidad['coordenadas'];
    $autoridades = $universidad['autoridades'];

    
    
    // echo $nombre_uni."-----".$estado."------".$tipo."------".$id_municipio."------".print_r($autoridades)."<br>"; 


    $conexion = conexion();

    echo '----------------------------------  universidad numero: '.$code_uni.'  ---------------------';

    $consulta_inst = $conexion->prepare("SELECT institucion FROM sys_institucion WHERE institucion = :nombre_uni");
    $marcadores_consulta=[":nombre_uni"=>$nombre_uni];
    $consulta_inst->execute($marcadores_consulta);
    if (!$consulta_inst->rowCount()){
        $insert = $conexion->prepare("INSERT INTO sys_institucion (institucion, abreviatura, tipo_univ, mision, vision, descripcion, portal, direccion, logo, portada) VALUES (:nombre, :siglas, :tipo, :mision, :vision, :descripcion, :portal, :direccion, :logo, :portada)");
        
        $marcadores=[
            ":nombre"=>$nombre_uni,
            ":siglas"=>$siglas,
            ":tipo"=>$tipo,
            ":mision"=>$mision,
            ":vision"=>$vision,
            ":descripcion"=>$descripcion,
            ":portal"=>$pagina,
            ":direccion"=>$direccion,
            ":logo"=>$logo,
            ":portada"=>$portada
            
        ]; 
        $insert->execute($marcadores);
        if ($insert->rowCount()) {
            echo $nombre_uni.'----';
        }
        $consulta_inst = null;
    }

    $consulta_sede = $conexion->prepare("SELECT inst.institucion FROM sys_sede sede INNER JOIN sys_institucion inst ON sede.sys_institucion_id = inst.id  WHERE inst.institucion = :nombre_uni" );
    $marcadores_consulta_sede=[":nombre_uni"=>$nombre_uni];
    $consulta_sede->execute($marcadores_consulta_sede);
    if (!$consulta_sede->rowCount()){
        $insert2 = $conexion->prepare("INSERT INTO sys_sede (sys_institucion_id, dir_estado, dir_municipio, latitud, longitud) VALUES (:insitucion_id, :estado, :municipio, :latitud, :longitud)");
        
        $marcadores=[
            ":insitucion_id"=>$code_uni,
            ":estado"=>$estado,
            ":municipio"=>$id_municipio,
            ":latitud"=>$coordenadas[0],
            ":longitud"=>$coordenadas[1]
            
        ]; 
        $insert2->execute($marcadores);
        
        if ($insert2->rowCount()) {
            echo $code_uni.'------';
        }
        $consulta_sede = null;
    }




    foreach ($autoridades as $autoridad) {

        $consulta_autoridad = $conexion->prepare("SELECT aut.nombre FROM sys_institucion inst INNER JOIN sys_institucion_autoridad aut ON inst.id = aut.sys_institucion_id WHERE aut.nombre = :nombre");
        $marc = [":nombre" => $autoridad['nombre']];
        $consulta_autoridad->execute($marc);
        if (!$consulta_autoridad->rowCount()) {

            $insert3 = $conexion->prepare("INSERT INTO sys_institucion_autoridad (sys_institucion_id, nombre, cedula, resenia, cargo, foto, url_curriculum) VALUES (:insitucion_id, :nombre, :cedula, :resenia, :cargo, :foto, :url_curriculum)");

            $marcadores = [
                ":insitucion_id" => $code_uni,
                ":nombre" => $autoridad['nombre'],
                ":cedula" => $autoridad['cedula'],
                ":resenia" => $autoridad['reseña'],
                ":cargo" => $autoridad['cargo'],
                ":foto" => $autoridad['foto'],
                ":url_curriculum" => $autoridad['url_curriculum']

            ];
            $insert3->execute($marcadores);

            if ($insert3->rowCount()) {
                echo $autoridad['nombre'] . '<br>';
            }
        }


        $consulta_autoridad = null;
    }
    
    $code_uni += 1;

        // echo $nombre_uni.'<br>';
    // echo "Institución agregada: ". $nombre_uni;
    $conexion = null;
}

?>