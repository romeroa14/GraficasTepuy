<?php 
    include_once './estadisticas_consultas.php';
    include_once '../funciones/main.php';
    $id='';
    $tipo='';
    if(isset($_POST['id'])) {
        $variables = explode(',', $_POST['id']);
        $select_actual = $variables[0];
        $valor_actual = $variables[1];
        if (isset($variables[2]) ||  isset($variables[3])) {
            if ($variables[2] == '') {
                $valor_actual2 = 'todos';
            }else{
                $valor_actual2 = $variables[2];
            }
            if (isset($variables[3])) {
                $valor_actual3 = $variables[3];
            }
        }
        
        // echo $valor_actual.','. $select_actual;

        if ($select_actual == '1' ){
            mostrar_municipios($valor_actual);
        }
        if ($select_actual == '2' || $select_actual == '3') {
            if ($valor_actual !=''  and $valor_actual2 !='' and $valor_actual3 !=''){
                mostrar_universidad($valor_actual, $valor_actual2, $valor_actual3,null);
            }else{
                echo '<option disabled value="">Universidad</option>';
            }
        }
        if ($select_actual == '6' ){
            mostrar_discapacidad();
        }
        if ($select_actual == '7' ){
            mostrar_grupo_cargos($valor_actual);
        }
        if ($select_actual == '8' ){
            mostrar_cargos($valor_actual, $valor_actual2);
        }
        if ($select_actual == '21' ){
            mostrar_universidad($valor_actual,'todos','todos',null);
        }
        if ($select_actual == '22' ){
            $universidad = $valor_actual;
            consultar_coordenadas($universidad,null);

        }
        
        } 
    else {
        // echo '<option value="">post Selectional municipio</option>'; // Opción predeterminada si no se recibe un ID de estado
    }
    
?>


