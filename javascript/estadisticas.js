
select_cargo.disabled = true
select_tipo_persona.addEventListener('change', function(){
    select_cargo.removeAttribute('hidden')
    // console.log(select_tipo_persona.value)
    if(select_tipo_persona.value == 'Administrativos'){
        select_cargo.disabled = false
        return select_cargo.innerHTML = administrativo
    }
    if(select_tipo_persona.value == 'Obreros'){
        select_cargo.disabled = false   
        return select_cargo.innerHTML = obreros
    }
    if(select_tipo_persona.value == 'Profesores'){
        select_cargo.disabled = false   
        return select_cargo.innerHTML = profesores
    }
    if(select_tipo_persona.value == 'Estudiantes'){
        select_cargo.disabled = false   
        return select_cargo.innerHTML = estudiantes
    }
    select_cargo.setAttribute('hidden')
    select_cargo.disabled = true
    return select_cargo.innerHTML = '<option disabled selected>Cargo obrero</option>'
})


const administrativo = "<option disabled selected>Cargo administrativo</option><option>Grupo secretarial</option><option>Grupo de Información y control estudiantil</option><option>Grupo de biblioteca e información especializada</option><option>Grupo de psicología y orientación</option><option>Grupo de archivo</option><option>Grupo de contaduría</option><option>Grupo de presupuesto</option><option>Grupo de administración</option><option>Grupo de almacén y compras</option><option>Grupo de administración de recursos humanos</option><option>Grupo de informática</option><option>Grupo de control, inspección de obras y mantenimiento de edificios</option><option>Grupo de servicios, reparación, mantenimiento y control automotor</option><option>Grupo de servicios generales</option><option>Grupo de organización y planificación</option><option>Grupo de registro y control de bienes</option><option>Grupo de deporte</option><option>Grupo de dibujo, diagramación y diseño gráfico</option><option>Grupo de producción, reproducción y expendio de publicaciones</option><option>Grupo de prensa y relaciones publicas e interinstitucionales</option><option>Grupo de asesoría legal</option><option>Grupo de laboratorio clínico, técnico y profesional</option><option>Grupo de seguros</option><option>Grupo de diseño académico</option><option>Grupo de administración de programa de pasantías</option><option>Grupo de estudios para graduados</option><option>Grupo de investigación</option><option>Grupo de medicina</option><option>Grupo de correo</option><option>Grupo de odontología</option><option>Grupo de citotecnología</option><option>Grupo de salud publica</option><option>Grupo de servicios sociales</option><option>Grupo de seguridad integral</option><option>Grupo de técnicas educativas y medios audiovisuales</option><option>Grupo de educación preescolar y básica</option><option>Grupo de arquitectura y topografía</option><option>Grupo de asuntos literarios</option><option>Grupo de servicios y administración de áreas nutricionales</option><option>Grupo de idiomas</option><option>Grupo de técnica química</option><option>Grupo de técnica eléctrica, mecánica y electrónica</option><option>Grupo de asistencia técnica institucional</option><option>Grupo de servicios religiosos</option><option>Grupo de servicios de comunicaciones</option><option>Grupo de radiodifusión</option><option>Grupo de análisis y control de finanzas, emisión de cheques y caja</option><option>Grupo de nómina</option><option>Grupo de control interno y auditoria</option><option>Grupo de artes auditivas</option><option>Grupo de artes escénicas</option><option>Grupo de artes plásticas</option><option>Grupo de asistencia y gerencia cultural</option><option>Grupo de operaciones navales</option><option>Grupo de veterinaria, acuicultura y zootecnia</option><option>Grupo de ingeniería y técnica forestal y de minas</option><option>Grupo de farmacia</option><option>Grupo agropecuario</option><option>Grupo de bomberos</option>"
const obreros = "<option disabled selected>Cargo obrero</option><option>Todos</option><option>Albañil</option><option>Almacenista</option><option>Apicultor</option><option>Ascensorista</option><option>Aseador</option><option>Auxiliar Agrario</option><option>Auxiliar de Enfermeria</option><option>Auxiliar de Estación Piscícola</option><option>Auxiliar de Fotografía</option><option>Auxiliar de Laboratorio</option><option>Auxiliar de Mantenimiento</option><option>Auxiliar de Mantenimiento de Equipos de Sonido, Audiovisuales y Electronicos</option><option>Auxiliar de Mantenimiento de Equipos Odontologicos</option><option>Auxiliar de Practicas de Anatomia</option><option>Auxiliar de Telefonia</option><option>Auxiliar de Topógrafo</option><option>Auxiiar de Zootecnia</option><option>Auxiliar Forestal</option><option>Auxiliar Grafico</option><option>Ayudante de Cocina</option><option>Ayudante de Mantenimiento</option><option>Ayudante de Mecánica</option><option>Ayudante de Navegación</option><option>Ayudante de Servicio</option><option>Camarero</option><option>Carpintero</option><option>Cerrajero</option><option>Cocinero</option><option>Chofer</option><option>Despachador de Combustible</option><option>Despachador de Vehículo</option><option>Electricista</option><option>Electromecanico</option><option>Encargado de Beneficiar Especies Animales</option><option>Encuadernador</option><option>Fotolitógrafo</option><option>Fotomecanico</option><option>Fumigador</option><option>Herrero Soldador</option><option>Jardinero</option><option>Laqueador</option><option>Latonero</option><option>Lavandero</option><option>Linotipista</option><option>Mecanico</option><option>Mecanico de Maquinas de Artes Graficas</option><option>Mecanico en Refrigeración</option><option>Mensajero Externo</option><option>Mensajero Interno</option><option>Obrero Agropecuario</option><option>Operador de Calderas</option><option>Operador de equipos de Radioperaciones</option><option>Operador de Equipos de Reproducción</option><option>Operario Grafico</option><option>Peluquero</option><option>Pintor</option><option>Planchista</option><option>Plomero</option><option>Portero</option><option>Prensista Litografico</option><option>Prensista Tipografico</option><option>Procesador de Alimentos</option><option>Receptor de Correspondencia</option><option>Receptor y Guia de Biblioteca</option><option>Supervisor de Almacen</option><option>Supervisor de Cocina</option><option>Supervisor de Fincas</option><option>Supervisor de Mantenimiento</option><option>Supervisor de Servicios</option><option>Supervisor de Taller de Imprenta</option><option>Supervisor de Transporte y Mecanica Automotor</option><option>Supervisor de Vigilancia</option><option>Tapicero</option><option>Tornero-Mecanico</option><option>Tractorista Agrícola</option><option>Vidriero</option><option>Vigilante</option>"
const profesores = "<option disabled selected>Condicion</option><option>Auxiliares</option><option>Contratados</option><option>Dedicacion exclusiva</option><option>Investigadores</option><option>Tiempo completo</option><option>Medio tiempo</option><option>Tiempo convencional</option>"
const estudiantes = "<option disabled selected>Estudiante</option><option>Todos</option><option>Ingreso</option><option>Prosecución</option><option>Egreso</option>"
