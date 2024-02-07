<?php
	
	require 'conect.php';
	if(isset($_POST['tipo_persona'])) {
		$tipoPersona = $_POST['tipo_persona'];
		
		$queryM = "SELECT id, cod_tipo_sexo, estadi_tipo FROM estadi_sexo WHERE cod_tipo_sexo = $tipoPersona
		ORDER BY estadi_tipo ";
		$resultadoM = mysqli_query($conn, $queryM);
		
		$html= " $html = '<option disabled selected>Sexo</option>';";
		
		while($row = mysqli_fetch_assoc($result)) {
			$html .= '<option value="' . $row['cod_tipo_sexo'] . '">' . $row['estadi_tipo'] . '</option>';
		}
		
		echo $html;
	}
?>	




