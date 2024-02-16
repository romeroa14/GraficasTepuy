<!DOCTYPE html>
<html lang="es">

<!-- ---------- AÑADIR LIBRERIAS ---------- -->
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mapa de Venezuela</title>

  <!-- Añadir Leaflet -->
  <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
  
  <!-- Añadir Bootstrap -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
  
  <!-- Añadir plugin de Bootstrap -->
  <link rel="stylesheet" href="https://adminlte.io/themes/v3/dist/css/adminlte.min.css?v=3.2.0">
  
  <!-- Añadir CSS propio -->
  <link rel="stylesheet" href="css/panel.css">
  <link rel="stylesheet" href="css/estilos.css">

  <!-- Añadir plugin de leaftlet para la leyenda -->
  <link rel="stylesheet" href="./plugins/mapaLeyenda/mapaLeyenda.css">
  <script src="../TheGhost/javascript/jquery-3.6.3.min.js"></script>
  <!-- Añadir Canvas -->
  <!-- <script src="https://cdn.canvasjs.com/ga/canvasjs.min.js"></script> -->

  
</head>



<body>
  
  <!-- ---------- CINTA AZUL MENU ------------>
  <div>
    <div>
      <img src="./img/cintillo-mincyt.png" width="100%">
    </div>
    <div>
      <img class="logo-tepuy" src="./img/tepuy-solo.png" height="200px">
      <img src="./img/fondo-azul.png" width="100%">
    </div>    
  </div>

  <div class="cintillo">Educación Universitaria Venezolana</div>
  <!-- ----------TODO ---------- -->
  <div class="container">

    <!-- ---------- ESTADISTICAS POR ESTADOS ---------- -->
    <div class="container">

      <!-- ESTADISTICAS POR ESTADO -->
      <div><br><br>
        <form action="#" method="POST">
          <h2 class="titulo">Estadísticas</h2>

          <div class="contenedor-estadisticas-selects mt-5 mb-3">
            <div>
              <!-- Estado del filtro -->
            <div class="row">
              <div class="col-2">
                <select class="select" id="estadisticas_estado">
                  <option disabled selected>Estado</option>
                  <option>Todos</option>
                </select>
              </div>
              <div class="col-4">
                <select class="select" id="estadisticas_municipio">
                  <option disabled selected>Municipios</option>
                  <option>Todos</option>
                </select>
              </div>
              <div class="col-2">
                <select class="select " name="select-location" id="estadisticas_tipo">
                  <option disabled selected>Tipo</option>
                </select>
              </div>
              <div class="col-4">
                <select class="select" id="estadisticas_universidades">
                  <option disabled selected>Universidad</option>
                  <option>Todas</option>
                </select>
              </div>
              </div>
              <br>
              <div class="row">
                <div class="col-2">
                  <select class="select" id="select_tipo_persona" name="select_tipo_persona">
                    <option disabled selected>Tipo de persona</option>
                    <option>Profesores</option>
                    <option>Estudiantes</option>
                    <option>Administrativos</option>
                    <option>Obreros</option>
                  </select>
                </div>
                <div class="col-2">
                  <select class="select" name="select-location" id="sexo">
                    <option disabled selected>Sexo</option>
                    <option>Femenino</option>
                    <option>Masculino</option>
                  </select>
                </script>
                </div>
                <div class="col-2">
                  <select class="select" name="select-location">
                    <option disabled selected>Discapacidad</option>
                    <option>Discapacidad Física</option>
                    <option>Discapacidad Visual</option>
                    <option>Discapacidad Auditiva</option>
                    <option>Discapacidad Táctil</option>
                    <option>Discapacidad Cognitiva o Intelectual</option>
                    <option>Discapacidad Psicosocial o de Salud Mental</option>
                    <option>Discapacidad del Habla o del Lenguaje</option>
                    <option>Discapacidad del Aprendizaje</option>
                    <option>Discapacidad Psicomotora</option>
                    <option>Discapacidad Múltiple o Combinada</option>
                  </select>
                </div>
                <div class="col-5">
                  <div class="contenedor-filtroEstadistica-secundarios">

                    <select class="hide filtroEstadistica-cargos select" name="select-cargo" id="select_cargo">
                      <option value="0" disabled selected>Cargo</option>
                    </select>
                  </div> 
                </div>
                <div class="col-1">
                  <div>
                    <button class="filtroEstadistica-boton" type="submit" >Filtrar</button>
                  </div>                
                </div>
            </div>

            
          </div>
        </form>
      </div>

        <div class="row">
          <!-- PROFESORES #1 -->
          <div class="col-3">
            <div class="info-box">
              <span class="info-box-icon bg-info elevation-1"><img src="icon/profesor.png"></img></span>  <!-- icono -->
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
                  <div class="modal-dialog  modal-xl">
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
              <span class="info-box-icon bg-info elevation-1"><img src="icon/estudiante.png"></img></span>  <!-- icono -->
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
                  <div class="modal-dialog  modal-xl">
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
              <span class="info-box-icon bg-info elevation-1"><img src="icon/profesor.png"></img></span>  <!-- icono -->
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
                  <div class="modal-dialog  modal-xl">
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
              <span class="info-box-icon bg-info elevation-1"><img src="icon/estudiante.png"></img></span>  <!-- icono -->
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
                  <div class="modal-dialog  modal-xl">
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

        <div  class="row"><br>
          <div id="Grafica_principal1" class="col-3" ></div>
          <div id="Grafica_principal2" class="col-3" ></div>
          <div id="Grafica_principal3" class="col-3" ></div>
          <div id="Grafica_principal4" class="col-3" ></div>
        </div><br>
      </div>

    </div>
    <h2 class="titulo">Buscar universidades en el país</h2>
    <!-- CONTENEDOR DEL MAPA Y PANEL -->
    <div class="contenedor-mapa-panel container-fluid" id="supercontenedor">
      <div class="row align-items-start" id="grancontenedor">
  
      <!-- FILTROS DE BUSQUEDA -->
      <div id="contenedor-filtros">
        <div class="row" id="contenedor-barra-busqueda">

          <!-- Barra de busqueda -->
          <div class="col-6">
            <div class="barraBusqueda active">
              <div class="contenedorBarra">
              <input type="text"  class="form-control" placeholder="Buscar universidad ..." >
              <button class="btn btn-outline-secondary" type="button" id="boton-busqueda" > Buscar</button>
              </div>
              <ul class="sugerencias" hidden="hidden" >
              </ul>
            </div>
          </div>

          <!-- Select de estados -->
          <div class="col-3">
            <select class="select select-location" name="select-location" id="select-location">
              <option disabled selected>Estado</option>
            </select>
          </div>

          <!-- Select de universidades -->
          <div class="col-3">
            <select class="select select-location3" name="select-location" id="select-location3">
              <option disabled selected>Universidades</option>
            </select>
          </div>
        </div>

        <hr class="separador-mapa-barra">
      </div>

        <!-- MAPA -->
        <div id="mapa_columna" class="col-12">
          <div id="map"></div>
        </div>
  
        <!-- PANEL DE INFORMACION -->
        <div id="panel_columna" class="hide">
          <div class="contenedor-panel" id="contenedor-panel">
            <div  id="panel_informacion" class="hide">

              <!-- Portada -->
              <div>
                <img id="panel_portada" class="portada">
              </div>

              <!-- Nombre -->
              <div>
                <h5 id="panel_nombre"></h5>
                <p id="panel_tipo">Universidad Pública</p>
              </div>

              <!-- CATEGORIAS -->
              <div id="panel_categorias" class="accordion accordion-flush">
                  <div class="row" id="cambio-categorias">

                    <!-- Categoria informacion -->
                    <div id="panel_categoria_estadistica" class="col-4">
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button class="categoria" type="button" data-bs-toggle="collapse" data-bs-target="#categoria_informacion" aria-expanded="false" aria-controls="categoria_informacion">
                            Información
                          </button>
                        </h2>
                      </div>
                    </div>

                    <!-- Categoria estadisticas -->
                    <div id="panel_categoria_estadistica" class="col-4">
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button class="categoria" type="button" data-bs-toggle="collapse" data-bs-target="#categoria_estadisticas" aria-expanded="false" aria-controls="categoria_estadisticas">
                            Estadisticas
                          </button>
                        </h2>
                      </div>
                    </div>

                    <!-- Categoria carreras -->
                    <div id="panel_categoria_carreras" class="col-4">
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button class="categoria" type="button" data-bs-toggle="collapse" data-bs-target="#categoria_carreras" aria-expanded="false" aria-controls="categoria_carreras">
                            Carreras
                          </button>
                        </h2>
                      </div>
                    </div>
                    
                    <hr>

                    <!-- INFORMACION CATEGORIAS -->

                    <!-- Informacion -->
                    <div id="categoria_informacion" class="accordion-collapse collapse" data-bs-parent="#panel_categorias">
                      
                      <br>
                      <div class="logo"><img id="panel_logo" src="./img/no-imagen.png" class="logo"></div><br>
                      <b class="encabezado">Descripción</b>
                      <div id="panel_descripcion"></div><br>
                      <b class="encabezado">Direccion</b>
                      <div id="panel_direccion"></div><br>
                      <b class="encabezado">Página web</b>
                      <div><a id="panel_pagina"></a></div><br>
                      <b class="encabezado">Misión</b>
                      <div id="panel_mision"></div><br>
                      <b class="encabezado">Visión</b>
                      <div id="panel_vision"></div><br>
                      <b class="encabezado">Autoridades</b>
                      <div id="panel_autoridades"></div><br>

                    </div class= "panel_autoridades">

                    <!-- Estadisticas -->
                    <div id="categoria_estadisticas" class="accordion-collapse collapse" data-bs-parent="#panel_categorias">
                      <b>Estadisticas</b><br><br><br>

                      <div class="row">
                        <div id="panel_Graph_estudiantes"></div>
                        <div id="panel_Graph_Transporte"></div>
                        <div id="panel_Graph_Personal"></div>
                      </div>


                      <!-- <img src="https://duckbase-infogram.jifo.co/uploads/ckeditor/pictures/40/content_Pie_Chart_type_examples.png" width="100%"> -->
                    </div>

                    <!-- Carreras -->
                    <div id="categoria_carreras" class="accordion-collapse collapse" data-bs-parent="#panel_categorias">
                      <div id="panel_carreras"></div>
                    </div>
                  </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>

  </div>

  <div id="prueba"></div>

<!-- AÑADIENDO SCRIPTS -->
<script src="javascript/mapa.js" type="module"></script>
<script src="javascript/data/universidadesData.js" type="module"></script>
<script src="./javascript/barraBusqueda.js" type="module"></script>
<script src="./javascript/filtrosEstadisticas.js" type="module"></script>
<script src="javascript/graficos.js" type="module"></script>
<script src="./javascript/data/sugerencias.js"></script>
<script src="./plugins/mapaLeyenda/mapaLeyenda.js"></script>
<script src="./javascript/select.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="javascript/filtroEstads.js"></script>
</body>
</html>