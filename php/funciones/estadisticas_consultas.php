<?php
    
function mostrar_estados(){
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

function mostrar_municipios($id){
    $db = conexion();
    if ($id == 'todos') {
        $query = "SELECT muni.id, muni.nombre_municipio FROM sys_pais_municipios muni INNER JOIN sys_pais_estados est ON muni.estado_id = est.id INNER JOIN sys_pais pais ON est.pais_id = pais.id WHERE pais.nombre_pais = 'Venezuela' ORDER BY muni.nombre_municipio";
    }else{
        $query = "SELECT id, nombre_municipio FROM sys_pais_municipios WHERE estado_id = $id ORDER by nombre_municipio";
    }
                    
                    $resultado = $db->query($query);
                    echo '<option value="">Municipios</option><option value="todos">Todos</option>';
                    if ($resultado->rowCount()) {
                        foreach ($resultado as $row) {
                            echo '<option value = "' . $row['id'] . '" name = "' . $row['nombre_municipio'] . '">' . $row['nombre_municipio'] . '</option>';
                        } //end while
                    }else {
                        echo '<option value="">No hay universidades</option>'; // Mensaje de opción vacía si no hay municipios
                    } //end if
                    // return $datos;
}

function mostrar_universidad($estado, $id, $tipo){
    $db = conexion();
    if($estado == 'todos' && $id == 'todos' &&  $tipo == 'todos'){
        $query = "SELECT est.id, inst.id, inst.institucion, inst.abreviatura 
        FROM sys_institucion inst 
        INNER JOIN sys_sede sede ON inst.id = sede.sys_institucion_id
        INNER JOIN sys_pais_municipios muni ON sede.dir_municipio = muni.id 
        INNER JOIN sys_pais_estados est ON muni.estado_id = est.id 
        INNER JOIN sys_pais pais ON est.pais_id = pais.id 
        WHERE pais.nombre_pais = 'Venezuela'  
        ORDER BY inst.id";
    }else if ($id == 'todos' &&  $tipo == 'todos') {
        $query = "SELECT est.id, inst.id, inst.institucion, inst.abreviatura 
        FROM sys_institucion inst 
        INNER JOIN sys_sede sede ON inst.id = sede.sys_institucion_id
        INNER JOIN sys_pais_municipios muni ON sede.dir_municipio = muni.id 
        INNER JOIN sys_pais_estados est ON muni.estado_id = est.id 
        INNER JOIN sys_pais pais ON est.pais_id = pais.id 
        WHERE pais.nombre_pais = 'Venezuela' And est.id = '$estado' 
        ORDER BY muni.nombre_municipio";
    } else if($id == 'todos'){
        $query = "SELECT est.id, inst.id, inst.institucion, inst.abreviatura, inst.tipo_univ
        FROM sys_institucion inst 
        INNER JOIN sys_sede sede ON inst.id = sede.sys_institucion_id
        INNER JOIN sys_pais_municipios muni ON sede.dir_municipio = muni.id 
        INNER JOIN sys_pais_estados est ON muni.estado_id = est.id 
        INNER JOIN sys_pais pais ON est.pais_id = pais.id 
        WHERE pais.nombre_pais = 'Venezuela' And est.id = '$estado' AND inst.tipo_univ = '$tipo' ";
    }else if ($tipo == 'todos'){
        $query = "SELECT inst.id, inst.institucion, inst.abreviatura, inst.tipo_univ
        FROM sys_institucion inst 
        INNER JOIN sys_sede sede ON inst.id = sede.sys_institucion_id
        INNER JOIN sys_pais_municipios muni ON sede.dir_municipio = muni.id 
        INNER JOIN sys_pais_estados est ON muni.estado_id = est.id 
        INNER JOIN sys_pais pais ON est.pais_id = pais.id 
        WHERE pais.nombre_pais = 'Venezuela' AND sede.dir_municipio = '$id'";
    }else{
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
                            echo '<option value = "' . $row['inst.id'] . '" name = "' . $row['abreviatura'] . '">(' . $row['abreviatura'] . ') - ' . $row['institucion'] . '</option>';
                        } //end while
                    }else {
                        echo '<option value="">No hay universidades</option>'; // Mensaje de opción vacía si no hay municipios
                    } //end if
                    // return $datos;
}


function mostrar_discapacidad(){
    $db = conexion();
                    $query = "SELECT id, discapacidad FROM persona_det_discapacidad ORDER BY discapacidad";
                    $resultado = $db->query($query);
                    echo '<option value="">Discapacidad</option><option value="todos">Todos</option>';
                    if ($resultado->rowCount()) {
                        foreach ($resultado as $row) {
                            echo '<option value = "' . $row['id'] . '" name = "' . $row['discapacidad'] . '">' . $row['discapacidad'] . '</option>';
                        } //end while
                    }else {
                        echo '<option value="">No hay Discapacidades</option>'; // Mensaje de opción vacía si no hay municipios
                    } //end if
                    // return $datos;
}

function mostrar_grupo_cargos($valor_actual){
    $db = conexion();
    if ($valor_actual == 'todos'){
        $query = "SELECT id, group_name FROM rrhh_groups ORDER BY group_name";
    }else{
        $query = "SELECT id, group_name FROM rrhh_groups WHERE rrhh_category_id = '$valor_actual' ORDER BY group_name";
    }
        $resultado = $db->query($query);
        echo '<option value="">Grupo de cargos</option><option value="todos">Todos</option>';
        if ($resultado->rowCount()) {
            foreach ($resultado as $row) {
                echo '<option value = "' . $row['id'] . '" name = "' . $row['group_name'] . '">' . $row['group_name'] . '</option>';
            } //end while
        }else {
            echo '<option value="">No hay Grupo de cargos</option>'; // Mensaje de opción vacía si no hay municipios
        } //end if
        // return $datos;
    
}
