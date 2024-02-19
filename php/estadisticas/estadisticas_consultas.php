<?php

function mostrar_estados()
{
    $estados = conexion();
    $estados = $estados->query("SELECT est.id, est.nombre_estado FROM sys_pais_estados est INNER JOIN sys_pais pais on pais.id = est.pais_id WHERE pais.nombre_pais = 'Venezuela' ORDER by est.nombre_estado");
    echo '<option selected value="">Estados</option><option value="todos">Todos</option>';
    if ($estados->rowCount()) {
        $estados = $estados->fetchAll();
        foreach ($estados as $row) {
            echo '<option value = "' . $row['id'] . '" name = "' . $row['nombre_estado'] . '">' . $row['nombre_estado'] . '</option>';
        }
    } else {
        echo 'error';
    }
    $estados = null;
}

function mostrar_municipios($id)
{
    $db = conexion();
    $html = '';
    if ($id == 'todos') {
        $query = "SELECT muni.id, muni.nombre_municipio FROM sys_pais_municipios muni INNER JOIN sys_pais_estados est ON muni.estado_id = est.id INNER JOIN sys_pais pais ON est.pais_id = pais.id WHERE pais.nombre_pais = 'Venezuela' ORDER BY muni.nombre_municipio";
    } else {
        $query = "SELECT id, nombre_municipio FROM sys_pais_municipios WHERE estado_id = $id ORDER by nombre_municipio";
    }

    $resultado = $db->query($query);
    echo '<option value="">Municipios</option><option value="todos">Todos</option>';
    if ($resultado->rowCount()) {
        foreach ($resultado as $row) {
            $html .= '<option value = "' . $row['id'] . '" name = "' . $row['nombre_municipio'] . '">' . $row['nombre_municipio'] . '</option>';
        }
        echo $html;
    } else {
        echo '<option value="">No hay universidades</option>';
    }
}

function mostrar_universidad($estado, $id, $tipo, $nombre)
{
    $db = conexion();
    if (isset($nombre)) {
        $query = "SELECT inst.id, inst.institucion, inst.abreviatura 
        FROM sys_institucion inst 
        INNER JOIN sys_sede sede ON inst.id = sede.sys_institucion_id
        INNER JOIN sys_pais_municipios muni ON sede.dir_municipio = muni.id 
        INNER JOIN sys_pais_estados est ON muni.estado_id = est.id 
        INNER JOIN sys_pais pais ON est.pais_id = pais.id 
        WHERE pais.nombre_pais = 'Venezuela'  AND (inst.institucion LIKE '%$nombre%' OR inst.abreviatura LIKE '%$nombre%')
        ORDER BY inst.institucion";

        $resultado = $db->query($query);
        if ($resultado->rowCount()) {
            foreach ($resultado as $row) {
                echo '<li>(' . $row['abreviatura'] . ') - ' . $row['institucion'] . '</li>';
            }
            return;
        } else {
            echo '<option value="">No hay universidades</option>';
            return;
        }

    } else if ($estado == 'todos' && $id == 'todos' && $tipo == 'todos') {
        $query = "SELECT est.id, inst.id, inst.institucion, inst.abreviatura 
        FROM sys_institucion inst 
        INNER JOIN sys_sede sede ON inst.id = sede.sys_institucion_id
        INNER JOIN sys_pais_municipios muni ON sede.dir_municipio = muni.id 
        INNER JOIN sys_pais_estados est ON muni.estado_id = est.id 
        INNER JOIN sys_pais pais ON est.pais_id = pais.id 
        WHERE pais.nombre_pais = 'Venezuela'  
        ORDER BY inst.id";
    } else if ($id == 'todos' && $tipo == 'todos') {
        $query = "SELECT est.id, inst.id, inst.institucion, inst.abreviatura 
        FROM sys_institucion inst 
        INNER JOIN sys_sede sede ON inst.id = sede.sys_institucion_id
        INNER JOIN sys_pais_municipios muni ON sede.dir_municipio = muni.id 
        INNER JOIN sys_pais_estados est ON muni.estado_id = est.id 
        INNER JOIN sys_pais pais ON est.pais_id = pais.id 
        WHERE pais.nombre_pais = 'Venezuela' And est.id = '$estado' 
        ORDER BY muni.nombre_municipio";
    } else if ($id == 'todos') {
        $query = "SELECT est.id, inst.id, inst.institucion, inst.abreviatura, inst.tipo_univ
        FROM sys_institucion inst 
        INNER JOIN sys_sede sede ON inst.id = sede.sys_institucion_id
        INNER JOIN sys_pais_municipios muni ON sede.dir_municipio = muni.id 
        INNER JOIN sys_pais_estados est ON muni.estado_id = est.id 
        INNER JOIN sys_pais pais ON est.pais_id = pais.id 
        WHERE pais.nombre_pais = 'Venezuela' And est.id = '$estado' AND inst.tipo_univ = '$tipo' ";
    } else if ($tipo == 'todos') {
        $query = "SELECT inst.id, inst.institucion, inst.abreviatura, inst.tipo_univ
        FROM sys_institucion inst 
        INNER JOIN sys_sede sede ON inst.id = sede.sys_institucion_id
        INNER JOIN sys_pais_municipios muni ON sede.dir_municipio = muni.id 
        INNER JOIN sys_pais_estados est ON muni.estado_id = est.id 
        INNER JOIN sys_pais pais ON est.pais_id = pais.id 
        WHERE pais.nombre_pais = 'Venezuela' AND sede.dir_municipio = '$id'";
    } else if (isset($id) && isset($tipo)) {
        $query = "SELECT inst.id, inst.institucion, inst.abreviatura, inst.tipo_univ 
        FROM sys_institucion inst 
        INNER JOIN sys_sede sede ON inst.id = sede.sys_institucion_id
        INNER JOIN sys_pais_municipios muni ON sede.dir_municipio = muni.id 
        INNER JOIN sys_pais_estados est ON muni.estado_id = est.id 
        INNER JOIN sys_pais pais ON est.pais_id = pais.id 
        WHERE pais.nombre_pais = 'Venezuela'  AND sede.dir_municipio = '$id' AND inst.tipo_univ = '$tipo' ";
    }



    $resultado = $db->query($query);
    echo '<option value="">Universidades</option><option value="todos">Todos</option>';
    if ($resultado->rowCount()) {
        foreach ($resultado as $row) {
            echo '<option value = "' . $row['id'] . '" name = "' . $row['abreviatura'] . '">(' . $row['abreviatura'] . ') - ' . $row['institucion'] . '</option>';
        }
    } else {
        echo '<option value="">No hay universidades</option>';
    }
}


function mostrar_discapacidad()
{
    $db = conexion();
    $query = "SELECT id, discapacidad FROM persona_det_discapacidad ORDER BY discapacidad";
    $resultado = $db->query($query);
    echo '<option value="">Discapacidad</option><option value="todos">Todos</option>';
    if ($resultado->rowCount()) {
        foreach ($resultado as $row) {
            echo '<option value = "' . $row['id'] . '" name = "' . $row['discapacidad'] . '">' . $row['discapacidad'] . '</option>';
        }
    } else {
        echo '<option value="">No hay Discapacidades</option>';
    }
}

function mostrar_grupo_cargos($valor_actual)
{
    $db = conexion();
    if ($valor_actual == 'todos') {
        $query = "SELECT id, group_name FROM rrhh_groups ORDER BY group_name ";
    } else {
        $query = "SELECT id, group_name FROM rrhh_groups WHERE rrhh_category_id = '$valor_actual' ORDER BY group_name";
    }
    $resultado = $db->query($query);
    echo '<option value="">Grupo de cargos</option><option value="todos">Todos</option>';
    if ($resultado->rowCount()) {
        foreach ($resultado as $row) {
            echo '<option value = "' . $row['id'] . '" name = "' . $row['group_name'] . '">' . $row['group_name'] . '</option>';
        }
    } else {
        echo '<option value="ninguno">No hay Grupo de cargos</option>'; // Mensaje de opción vacía si no hay municipios
    }

}

function mostrar_cargos($tipo_persona, $grupo_cargo)
{
    if ($grupo_cargo == 'ninguno') {
        echo '<option value="ninguno">No hay Cargos</option>';
    } else {
        $db = conexion();
        if ($tipo_persona == 'todos' && $grupo_cargo == 'todos') {
            $query = "SELECT g.rrhh_category_id, pos.id, rrhh_group_id, position_name 
            FROM rrhh_groups g 
            INNER JOIN rrhh_positions pos ON g.id = pos.rrhh_group_id 
            ORDER BY position_name;";
        }else if ($grupo_cargo == 'todos') {
            $query = "SELECT g.rrhh_category_id, pos.id, rrhh_group_id, position_name 
            FROM rrhh_groups g 
            INNER JOIN rrhh_positions pos ON g.id = pos.rrhh_group_id 
            WHERE g.rrhh_category_id = $tipo_persona 
            ORDER BY position_name;";
        } else {
            $query = "SELECT pos.id, rrhh_group_id, position_name 
        FROM rrhh_groups g 
        INNER JOIN rrhh_positions pos ON g.id = pos.rrhh_group_id
        WHERE pos.rrhh_group_id = $grupo_cargo";
        }
        $resultado = $db->query($query);
        echo '<option value="">Cargos</option><option value="todos">Todos</option>';
        if ($resultado->rowCount()) {
            foreach ($resultado as $row) {
                echo '<option value = "' . $row['id'] . '" name = "' . $row['position_name'] . '">' . $row['position_name'] . '</option>';
            }
        } else {
            echo '<option value="ninguno">No hay Cargos</option>'; // Mensaje de opción vacía si no hay municipios
        }
    }
}


function consultar_coordenadas($id, $siglas)
{
    $db = conexion();
    if (isset($id)) {
        $query = "SELECT latitud, longitud FROM `sys_sede` WHERE sys_institucion_id = $id";
    } elseif (isset($siglas)) {
        $query = "SELECT inst.abreviatura, sede.latitud, sede.longitud 
        FROM sys_sede sede 
        INNER JOIN sys_institucion inst ON  sede.sys_institucion_id = inst.id
        WHERE inst.abreviatura = '$siglas'";

    }

    $resultado = $db->query($query);
    if ($resultado->rowCount()) {
        foreach ($resultado as $row) {

            echo $row['latitud'] . "," . $row['longitud'];
        }
    } else {
        echo '<option value="">No hay coordenadas</option>'; // Mensaje de opción vacía si no hay municipios
    }

}

function mostrar_data($siglas)
{
    $db = conexion();
    $datos_uni = [];
    $autoridades = [];
    $universidad = [];
    $query = "SELECT inst.institucion, inst.abreviatura, inst.descripcion, inst.portada, inst.portal, inst.mision, inst.vision, inst.direccion, inst.logo, aut.nombre, aut.cedula, aut.resenia, aut.cargo, aut.foto, aut.url_curriculum
    FROM sys_institucion inst 
    INNER JOIN sys_institucion_autoridad aut ON inst.id = aut.sys_institucion_id
    WHERE inst.abreviatura = :siglas";
    $resultado = $db->prepare($query);
    $marcador = [':siglas' => $siglas];
    $resultado->execute($marcador);
    if ($resultado->rowCount()) {
        $data = $resultado->fetchAll();
        $datos_uni[] = [
            "nombre" => $data[0]['institucion'],
            "siglas" => $data[0]['abreviatura'],
            "descripcion" => $data[0]['descripcion'],
            "portada" => $data[0]['portada'],
            "pagina" => $data[0]['portal'],
            "mision" => $data[0]['mision'],
            "vision" => $data[0]['vision'],
            "direccion" => $data[0]['direccion'],
            "logo" => $data[0]['logo']
        ];
        foreach ($data as $row) {

            $autoridades[] = [
                "nombre" => $row['nombre'],
                "cedula" => $row['cedula'],
                "reseña" => $row['resenia'],
                "cargo" => $row['cargo'],
                "foto" => $row['foto'],
                "url_curriculum" => $row['url_curriculum']
            ]
            ;
        }
        $universidad[] = [$datos_uni, $autoridades];
        echo json_encode($universidad, JSON_UNESCAPED_UNICODE);



    } else {
        $datos = [
            "nombre" => "Juan",
            "edad" => 30,
            "ciudad" => "Madrid",
            "intereses" => ["fútbol", "música", "viajes"]
        ];
        // echo json_encode($datos, JSON_UNESCAPED_UNICODE)
        // echo '<option value="">No hay universidades</option>'; 
    }

}

function mostrar_data_funcion()
{
    $datos = [
        "nombre" => "petronila",
        "edad" => 30,
        "ciudad" => "Madrid",
        "intereses" => ["fútbol", "música", "viajes"]
    ];
    echo json_encode($datos, JSON_UNESCAPED_UNICODE);

}