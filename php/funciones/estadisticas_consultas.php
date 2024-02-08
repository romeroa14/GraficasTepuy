<?php
    
function mostrar_estados(){
    $estados = conexion();
                    $estados = $estados->query("SELECT id_estado, nombre_estado FROM sys_pais_estados e INNER JOIN sys_pais p on p.id = e.pais_id WHERE p.nombre_pais = 'Venezuela' ORDER by nombre_estado");
                    echo '<option value="todos">Todos</option>';
                    if ($estados->rowCount()) {
                        $estados = $estados->fetchAll();
                        foreach ($estados as $row) {
                            echo '<option value = "' . $row['id_estado'] . '" name = "' . $row['nombre_estado'] . '">' . $row['nombre_estado'] . '</option>';
                        }
                    } else {
                        echo 'error';
                    }
                    $estados = null;
}

function mostrar_municipios($id){
    $db = conexion();
    if ($id == 'todos') {
        $query = "SELECT muni.id_municipio, muni.nombre_municipio FROM sys_pais_municipios muni INNER JOIN sys_pais_estados est ON muni.id_estado = est.id_estado INNER JOIN sys_pais pais ON est.pais_id = pais.id WHERE pais.nombre_pais = 'Venezuela' ORDER BY muni.nombre_municipio";
    }else{
        $query = "SELECT id_municipio, nombre_municipio FROM sys_pais_municipios WHERE id_estado = $id ORDER by nombre_municipio";
    }
                    
                    $resultado = $db->query($query);
                    echo '<option value="">Municipios</option><option value="todos">Todos</option>';
                    if ($resultado->rowCount()) {
                        foreach ($resultado as $row) {
                            echo '<option value = "' . $row['id_municipio'] . '" name = "' . $row['nombre_municipio'] . '">' . $row['nombre_municipio'] . '</option>';
                        } //end while
                    }else {
                        echo '<option value="">No hay universidades</option>'; // Mensaje de opción vacía si no hay municipios
                    } //end if
                    // return $datos;
}

function mostrar_universidad($estado, $id, $tipo){
    $db = conexion();
    if ($id == 'todos' &&  $tipo == 'todos') {
        $query = "SELECT est.id_estado, inst.id, inst.institucion, inst.abreviatura FROM sys_institucion inst INNER JOIN sys_pais_municipios muni ON inst.id_municipio = muni.id_municipio INNER JOIN sys_pais_estados est ON muni.id_estado = est.id_estado INNER JOIN sys_pais pais ON est.pais_id = pais.id WHERE pais.nombre_pais = 'Venezuela' And est.id_estado = '$estado' ORDER BY muni.nombre_municipio";
    } else if($id == 'todos'){
        $query = "SELECT est.id_estado, inst.id, inst.institucion, inst.abreviatura, inst.tipo_univ
        FROM sys_institucion inst 
        INNER JOIN sys_pais_municipios muni ON inst.id_municipio = muni.id_municipio 
        INNER JOIN sys_pais_estados est ON muni.id_estado = est.id_estado 
        INNER JOIN sys_pais pais ON est.pais_id = pais.id 
        WHERE pais.nombre_pais = 'Venezuela' And est.id_estado = '$estado' AND inst.tipo_univ = '$tipo' ";
    }else if ($tipo == 'todos'){
        $query = "SELECT inst.id, inst.institucion, inst.abreviatura, inst.tipo_univ
        FROM sys_institucion inst 
        INNER JOIN sys_pais_municipios muni ON inst.id_municipio = muni.id_municipio 
        INNER JOIN sys_pais_estados est ON muni.id_estado = est.id_estado 
        INNER JOIN sys_pais pais ON est.pais_id = pais.id 
        WHERE pais.nombre_pais = 'Venezuela' AND inst.id_municipio = '$id'";
    }else{
        $query = "SELECT est.nombre_estado, est.id_estado, muni.id_municipio, muni.nombre_municipio, inst.id, inst.institucion, inst.abreviatura, inst.tipo_univ 
        FROM sys_institucion inst 
        INNER JOIN sys_pais_municipios muni ON inst.id_municipio = muni.id_municipio 
        INNER JOIN sys_pais_estados est ON muni.id_estado = est.id_estado 
        INNER JOIN sys_pais pais ON est.pais_id = pais.id 
        WHERE pais.nombre_pais = 'Venezuela'  AND inst.id_municipio = '$id' AND inst.tipo_univ = '$tipo' ";
    }
    
                    
                    $resultado = $db->query($query);
                    echo '<option value="">Universidad</option><option value="todos">Todos</option>';
                    if ($resultado->rowCount()) {
                        foreach ($resultado as $row) {
                            echo '<option value = "' . $row['id'] . '" name = "' . $row['abreviatura'] . '">(' . $row['abreviatura'] . ') - ' . $row['institucion'] . '</option>';
                        } //end while
                    }else {
                        echo '<option value="">No hay universidades</option>'; // Mensaje de opción vacía si no hay municipios
                    } //end if
                    // return $datos;
}


function mostrar_select($id_estado){
    $db = conexion();
                    $query = "SELECT id_municipio, nombre_municipio FROM sys_pais_municipios WHERE id_estado = $id_estado ORDER by nombre_municipio";
                    $resultado = $db->query($query);
                    echo '<option disabled value="">Municipios</option><option value="todos">Todos</option>';
                    if ($resultado->rowCount()) {
                        foreach ($resultado as $row) {
                            echo '<option value = "' . $row['id_municipio'] . '" name = "' . $row['nombre_municipio'] . '">' . $row['nombre_municipio'] . '</option>';
                        } //end while
                    }else {
                        echo '<option value="">No hay universidades</option>'; // Mensaje de opción vacía si no hay municipios
                    } //end if
                    // return $datos;
}

