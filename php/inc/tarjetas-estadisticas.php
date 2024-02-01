<!-- Tarjetitas -->
<div class="container">
    <div class="row">
      <!-- PROFESORES #1 -->
      <div class="col-3">
        <div class="info-box">
          <span class="info-box-icon bg-info elevation-1"><img src="icon/profesor.png" /></span>
          <!-- icono -->
          <div class="info-box-content">
            <span class="info-box-text">Profesores:</span>
            <div class="row">
              <div class="col-6">
                <div><b>3794</b></div>
              </div>
              <!-- mas informacion-->
              <div class="col-6">
                <a href="#" data-bs-toggle="modal" data-bs-target="#profesoresModal">Ver más</a>
              </div>
            </div>

            <!-- modal -->
            <div class="modal fade" id="profesoresModal" tabindex="-1" aria-labelledby="profesoresModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                  <!-- contenido -->
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="profesoresModalLabel">PROFESORES</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class=""></div>

                  <div class="row">
                    <h2 class="titulo-graph">Sexo</h2>
                    <div id="contenedor-graph1"></div>

                    <h2 class="titulo-graph">Tipos de profesores</h2>
                    <div id="contenedor-graph2"></div>
                  </div>

                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ESTUDIANTES #2 -->
      <div class="col-3">
        <div class="info-box">
          <span class="info-box-icon bg-info elevation-1"><img src="icon/estudiante.png" /></span>
          <!-- icono -->
          <div class="info-box-content">
            <span class="info-box-text">Estudiantes:</span>
            <div class="row">
              <div class="col-6">
                <div><b>10945</b></div>
              </div>
              <!-- mas informacion-->
              <div class="col-6">
                <a href="#" data-bs-toggle="modal" data-bs-target="#estudiantesModal">Ver más</a>
              </div>
            </div>

            <!-- modal -->
            <div class="modal fade" id="estudiantesModal" tabindex="-1" aria-labelledby="estudiantesModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                  <!-- contenido -->
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="estudiantesModalLabel">ESTUDIANTES</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>

                  <div class="row">
                    <h2 class="titulo-graph">Sexo</h2>
                    <div id="contenedor-graph3"></div>

                    <h2 class="titulo-graph">Tipos de discapacidades</h2>
                    <div id="contenedor-graph4"></div>
                  </div>

                  <div class="row">
                    <h2 class="titulo-graph">Ingreso, prosecucion y egreso</h2>
                    <div id="contenedor-graph5"></div>
                  </div>

                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- PERSONAL #3 -->
      <div class="col-3">
        <div class="info-box">
          <span class="info-box-icon bg-info elevation-1"><img src="icon/profesor.png" /></span>
          <!-- icono -->
          <div class="info-box-content">
            <span class="info-box-text">Personal:</span>
            <div class="row">
              <div class="col-6">
                <div><b>540</b></div>
              </div>
              <!-- mas informacion-->
              <div class="col-6">
                <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver más</a>
              </div>
            </div>

            <!-- modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                  <!-- contenido -->
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">PERSONAL</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="row">
                    <titulo-graph>Personal Admnistrativo</titulo-graph>
                    <div id="contenedor-graph6"></div>

                    <titulo-graph>Personal Obrero</titulo-graph>
                    <div id="contenedor-graph7"></div>
                  </div>

                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- EGRESADOS #4 -->
      <div class="col-3">
        <div class="info-box">
          <span class="info-box-icon bg-info elevation-1"><img src="icon/estudiante.png" /></span>
          <!-- icono -->
          <div class="info-box-content">
            <span class="info-box-text">Egresados:</span>
            <div class="row">
              <div class="col-6">
                <div><b>3485</b></div>
              </div>
              <!-- mas informacion-->
              <div class="col-6">
                <a href="#" data-bs-toggle="modal" data-bs-target="#egresados">Ver más</a>
              </div>
            </div>

            <!-- modal -->
            <div class="modal fade" id="egresados" tabindex="-1" aria-labelledby="egresadosLabel" aria-hidden="true">
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                  <!-- contenido -->
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="egresadosLabel">EGRESADOS</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="row titulo-graph8">Egresados por año</div>
                  <div id="contenedor-graph8"></div>

                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
    <div class="row">
      <br>
      <div id="Grafica_principal1" class="col-3"></div>
      <div id="Grafica_principal2" class="col-3"></div>
      <div id="Grafica_principal3" class="col-3"></div>
      <div id="Grafica_principal4" class="col-3"></div>
    </div><br>      
    </div>