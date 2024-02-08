<?php require_once './php/funciones/main.php';?>
<!-- ----------ESTADISTICAS ---------- -->
<h2 class="cintillo">Estadísticas</h2>

  <!-- Filtros de estadisticas -->
    <div class="container Estadisticas-contenedor mt-5 mb-3">
      <form action="#" method="POST">
        <div>

          <!-- Fila #1 del filtro -->
          <div class="row">
            <div class="col-2">
              <select class="select" name="select_estado" id="select_1" >
                <option disabled selected>Estados</option>
                <?php 
                include './php/funciones/estadisticas_consultas.php';
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
                <option value="publica">Públicas</option>
                <option value="privada">Privadas</option>
              </select>
            </div>
            <div class="col-6">
              <select disabled class="select" name="select_universidades" id="select_4">
                <option disabled selected>Universidad</option>
              </select>
            </div>
          </div>

          <!-- Fila #2 del filtro -->
          <div class="row">
            <div class="col-2">
              <select disabled class="select" name="select_tipo_persona" id="select_tipo_persona">
                <option disabled selected>Tipo de persona</option>
                <option value="Todo">Todo</option>
                <option value="Profesores">Profesores</option>
                <option value="Estudiantes">Estudiantes</option>
                <option value="Administrativos">Administrativos</option>
                <option value="Obreros">Obreros</option>
              </select>
            </div>
            <div class="col-1">
              <select disabled class="select" name="select_sexo" id="select_sexo">
                <option disabled selected>Sexo</option>
                <option value="Todos">Todos</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </select>
            </div>
            <div class="col-6">
              <select disabled class="select" name="select_discapacidad" id="select_discapacidad">
                <option disabled selected>Discapacidad</option>
                <option>Todos</option>
                <option>Inclusive</option>
              </select>
            </div>
            <div class="col-3">
              <select disabled class="filtroEstadistica-cargos select" name="select_cargo" id="select_cargo">
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