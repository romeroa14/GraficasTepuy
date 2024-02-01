<!DOCTYPE html>
<html lang="es">
<head>
  <?php include './php/inc/head.php'; ?>
</head>
<body>
  <!-- ---------- MENU ------------>
  <div class="Menu">
    <!-- Mincyt -->
    <div class="container-fluid">
      <div class="row mincyt">
        <div class="col-md-4 col-sm-12 col-12"><img class="imgMincyt" src="./img/gobierno.png" /></div>
        <div class="col-md-4 col-sm-0 col-12"></div>
        <div class="col-md-2 col-sm-6 col-6"><img class="imgMincyt" src="./img/evento.png" /></div>
        <div class="col-md-2 col-sm-6 col-6"><img class="imgMincyt" src="./img/mincyt.png" /></div>
      </div>
    </div>

    <!-- Tepuy -->
    <div>
      <img class="tepuy" src="./img/tepuy-logo.png" />
      <img class="educacion" src="./img/cinta-educacion.png" />
      <img class="fondo-azul" src="./img/fondo-azul.png" />
    </div>
  </div>

  <!-- seccion de los selects para las estadisticas -->
  <?php include './php/inc/estaditicas-filtro.php'; ?>

  <!-- seccion para las tarjetas de estadisticas y graficos-->
  <?php include './php/inc/tarjetas-estadisticas.php'; ?>


  <h2 class="cintillo">Buscar universidades en el país</h2>

  <!-- CONTENEDOR DEL MAPA Y PANEL -->
  <div class="Mapa-Panel-contenedor container">
    <div class="row align-items-start">

      <!-- filtros de busquedas del mapa-->
      <?php
      include './php/inc/busqueda-filtro.php';
      ?>

      <!-- MAPA -->
      <div id="mapa_columna" class="col-12">
        <div id="map"></div>
      </div>

      <!-- panel de informacion-->
      <?php
      include './php/inc/panel-informacion.php';
      ?>
    </div>
  </div>


  <?php
  include './php/inc/script.php';
  ?>
  </div>

</body>

</html>