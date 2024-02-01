<!-- PANEL -->
<div hidden id="panel_columna">
          <div class="Panel-contenedor"><!-- id="contenedor_panel" -->

            <!-- PORTADA -->
            <div id="panel_informacion">

              <!-- Fachada de la uni-->
              <div>
                <img class="portada-fachada" id="panel_fachada">
              </div>

              <!-- Nombre de la uni -->
              <div>
                <h5 class="portada-nombre" id="panel_nombre"></h5>
                <p class="portada-tipo" id="panel_tipo">Universidad Pública</p>
              </div>

              <!-- BOTONES CATEGORIAS -->
              <div id="panel_categorias" class="accordion accordion-flush">
                <div class="row" id="cambio-categorias">

                  <!-- boton informacion -->
                  <div id="panel_categoria_estadistica" class="col-4">
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="categoria" type="button" data-bs-toggle="collapse" data-bs-target="#categoria_informacion" aria-expanded="false" aria-controls="categoria_informacion">
                          Información
                        </button>
                      </h2>
                    </div>
                  </div>

                  <!-- boton estadisticas -->
                  <div id="panel_categoria_estadistica" class="col-4">
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="categoria" type="button" data-bs-toggle="collapse" data-bs-target="#categoria_estadisticas" aria-expanded="false" aria-controls="categoria_estadisticas">
                          Estadisticas
                        </button>
                      </h2>
                    </div>
                  </div>

                  <!-- boton carreras -->
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

                  <!-- CARGAR INFORMACION CATEGORIAS -->

                  <!-- Cargar informacion -->
                  <div id="categoria_informacion" class="accordion-collapse collapse" data-bs-parent="#panel_categorias">
                      
                    <br>
                    <div class="logo"><img id="panel_logo" src="./img/no-imagen.png" class="logo"></div><br>
                    <b class="encabezado">Descripción:</b>
                    <div id="panel_descripcion"></div><br>
                    <b class="encabezado">Direccion:</b>
                    <div id="panel_direccion"></div><br>
                    <b class="encabezado">Página web:</b>
                    <div><a target="_blank" id="panel_pagina"></a></div><br>
                    <b class="encabezado">Misión:</b>
                    <div id="panel_mision"></div><br>
                    <b class="encabezado">Visión:</b>
                    <div id="panel_vision"></div><br>
                    <b class="encabezado">Autoridades:</b>
                    <div id="panel_autoridades"></div><br>

                  </div>

                  <!-- Cargar estadisticas -->
                  <div id="categoria_estadisticas" class="accordion-collapse collapse" data-bs-parent="#panel_categorias">
                    <b>Estadisticas</b><br>

                    <div class="row">
                      <div id="panel_Graph_estudiantes"></div>
                      <div id="panel_Graph_Transporte"></div>
                      <div id="panel_Graph_Personal"></div>
                    </div>
                  </div>

                    <!-- Cargar carreras -->
                    <div id="categoria_carreras" class="accordion-collapse collapse" data-bs-parent="#panel_categorias">
                      <div id="panel_carreras"></div>
                    </div>
                </div>

              </div>
            </div>
          </div>

        </div>