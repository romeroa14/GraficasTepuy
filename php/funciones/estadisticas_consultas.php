<?php
    
function mostrar_estados(){
    $estados = conexion();
    $estados = $estados->query("SELECT id_estado, nombre_estado FROM sys_pais_estados e INNER JOIN sys_pais p on p.id = e.pais_id WHERE p.nombre_pais = 'Venezuela' ORDER by nombre_estado");
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

function mostrar_municipios($id_estado){
    $db = conexion();
                    $query = "SELECT id_municipio, nombre_municipio FROM sys_pais_municipios WHERE id_estado = $id_estado ORDER by nombre_municipio";
                    $resultado = $db->query($query);
                    echo '<option disabled value="">Municipios</option><option value="todos">Todos</option>';
                    if ($resultado->rowCount()) {
                        foreach ($resultado as $row) {
                            echo '<option value = "' . $row['id_municipio'] . '" name = "' . $row['nombre_municipio'] . '">' . $row['nombre_municipio'] . '</option>';
                        } //end while
                    }else {
                        echo '<option value="">No hay municipios en funcion</option>'; // Mensaje de opción vacía si no hay municipios
                    } //end if
                    // return $datos;
}


