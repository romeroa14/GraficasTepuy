<!-- FILTROS DE BUSQUEDA -->
<div id="contenedor-filtros">
  <div class="row">

    <!-- Barra de busqueda -->
    <div class="col-6">
      <div class="Barra-busqueda-contenedor active">
        <div class="barra-boton">
          <input type="text" class="form-control" placeholder="Buscar universidad ..." />
          <button class="btn btn-outline-secondary" type="button" id="boton-busqueda">Buscar</button>
        </div>
        <ul class="sugerencias" hidden="hidden"></ul>
      </div>
    </div>

    <!-- Select de estados -->
    <div class="col-3">
      <select class="select select-location" name="select-mapa-estado" id="select_mapa_estado"></select>
    </div>

    <!-- Select de universidades -->
    <div class="col-3">
      <select disabled class="select select-location3" name="select-mapa-uni" id="select_mapa_uni"></select>
    </div>
  </div>

  <hr class="separador-mapa-barra" />
</div>

<script>
  
</script>