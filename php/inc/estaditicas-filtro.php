<?php require_once './php/funciones/main.php';?>
<!-- ----------ESTADISTICAS ---------- -->
<h2 class="cintillo">Estadísticas</h2>

  <!-- Filtros de estadisticas -->
    <div class="container Estadisticas-contenedor mt-5 mb-3">
      <form action="#" method="POST" id="form_estadisticas">
        <div>

          <!-- Fila #1 del filtro -->
          <div class="row">
            <div class="col-2">
              <select class="select" name="select_estado" id="select_1" >
                
                <?php 
                require_once './php/estadisticas/estadisticas_consultas.php';
                mostrar_estados() ?> 

                
              </select>
            </div>
            <div class="col-3">
              <select disabled class="select" name="select_2" id="select_2" >
                <option   selected>Municipios</option>
              </select>
            </div>
            <div class="col-1">
              <select value = '0' disabled class="select" name="select_tipo" id="select_3" >
                <option  disabled selected>Tipo</option>
                <option value="todos">Todas</option>
                <option value="Publica">Públicas</option>
                <option value="Privada">Privadas</option>
              </select>
            </div>
            <div class="col-6">
              <select disabled class="select" name="select_universidades" id="select_4">
                <option disabled selected>Universidades</option>
              </select>
            </div>
          </div>

          <!-- Fila #2 del filtro -->
          <div class="row">
            <div class="col-2">
              <select disabled class="select" name="select_tipo_persona" id="select_5">
                <option disabled selected>Tipo de persona</option>
                <option value="todos">Todos</option>
                <option value="0">Estudiantes</option>
                <option value="1">Profesores</option>
                <option value="2">Administrativos</option>
                <option value="3">Obreros</option>
              </select>
            </div>
            <div class="col-1">
              <select disabled class="select" name="select_sexo" id="select_6">
                <option disabled selected>Sexo</option>
                <option value="todos">Todos</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </select>
            </div>
            <div class="col-3">
              <select disabled class="select" name="select_discapacidad" id="select_7">
                <option disabled selected>Discapacidad</option>
              </select>
            </div>
            <div class="col-3">
              <select disabled class="select" name="select_grupo_cargos" id="select_8">
                <option disabled selected>Grupo de cargos</option>
              </select>
            </div>
            <div class="col-3">
              <select disabled class="select" name="select_cargo" id="select_9">
                <option disabled selected>Cargos</option>
              </select>
            </div>
          </div>

          


          <!-- Boton para filtrar -->
          <div>
            <button class="boton" type="submit">Filtrar</button>
          </div>
        </div>
      </form>
    </div>