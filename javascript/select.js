let estadosvnzl =[
    "Anzoátegui",
    "Aragua",
    "Apure",
    "Barinas",
    "Bolívar",
    "Carabobo",
    "Cojedes",
    "Delta Amacuro",
    "Distrito Capital",
    "Falcón",
    "Guárico",
    "Lara",
    "La Guaira",
    "Mérida",
    "Miranda",
    "Monagas",
    "Portuguesa",
    "Sucre",
    "Trujillo",
    "Táchira",
    "Yaracuy",
    "Zulia"
];

let univzla =[  
    "(UNATUR) - UNIVERSIDAD NACIONAL DEL TURISMO (Anzoátegui, Barcelona)", 
    "(UPTJAA) - UNIVERSIDAD POLITÉCNICA TERRITORIAL JOSÉ ANTONIO ANZOÁTEGUI (Anzoátegui, El Tigre)", 
    "(UPTAFBF) - UNIVERSIDAD POLITÉCNICA TERRITORIAL DEL ESTADO ARAGUA FEDERICO BRITO FIGUEROA (Argua, Maracay) ", 
    "(UPTALTAP) - UNIVERSIDAD POLITÉCNICA TERRITORIAL DEL ALTO APURE PEDRO CAMEJO (Apure, Mantecal)", 
    "(UNELLEZ) - UNIV. NACIONAL EXPERIMENTAL DE LOS LLANOS OCCIDENTALES EZEQUIEL ZAMORA (Barinas, Barinas)", 
    "(UPTBJFR) - UNIVERSIDAD POLITÉCNICA TERRITORIAL DEL ESTADO BARINAS JOSÉ FÉLIX RIBAS (Barinas, Barinas)",
    "(UNEG) - UNIVERSIDAD NACIONAL EXPERIMENTAL DE GUAYANA (Bolívar, Puerto Ordaz)", 
    "(UVH) INTEVEP - UNIVERSIDAD VENEZOLANA DE HIDROCARBUROS (Bolívar, Cdad.Bolívar)", 
    "(UNEIT) - UNIVERSIDAD NACIONAL EXPERIMENTAL INDÍGENA DEL TAÚCA (Bolívar, Tacúa)", 
    "(UPTB) - UNIVERSIDAD POLITÉCNICA TERRITORIAL ESTADO BOLÍVAR (Bolívar, Cdad Bolívar)", 
    "(UNEXEE) - UNIVERSIDAD NACIONAL EXPERIMENTAL DE ESPECIALIDADES ELÉCTRICAS (Bolívar, Guri)", 
    "(UC) - UNIVERSIDAD CARABOBO (Carabobo, Valencia", 
    "(UPTPC) - UNIVERSIDAD POLITÉCNICA TERRITORIAL DE PUERTO CABELLO (Carabobo, Puerto Cabello)", 
    "(UPTV) - UNIVERSIDAD POLITÉCNICA TERRITORIAL DE VALENCIA (Carabobo, Valencia)", 
    "(UDS) - UNIVERSIDAD DEPORTIVA DEL SUR (Codejes, San Carlos)", 
    "(UTDFT) -  UNIVERSIDAD TERRITORIAL DELTAICA FRANCISCO TAMAYO (Delta amacuro, Tucupita)", 
    "(UCV) - UNIVERSIDAD CENTRAL DE VENEZUELA (Distrito Capital, Caracas)", 
    "(UNESR) - UNIVERSIDAD NACIONAL EXPERIMENTAL SIMÓN RODRÍGUEZ (Distrito Capital, Caracas)", 
    "(UNA) - UNIVERSIDAD NACIONAL ABIERTA (Distrito Capital, Caracas)", 
    "(UPEL) - UNIVERSIDAD PEDAGÓGICA EXPERIMENTAL LIBERTADOR (Distrito Capital, Caracas)", 
    "(UNEFA) - UNIVERSIDAD NACIONAL EXPERIMENTAL POLITÉCNICA DE LA FUERZA ARMADA BOLIVARIANA (Distrito Capital, Caracas", 
    "(UBV) - UNIVERSIDAD BOLIVARIANA DE VENEZUELA (Distrito Capital, Caracas)", 
    "(ULAC) - UNIVERSIDAD LATINOAMERICANA Y DEL CARIBE (Distrito Capital, Caracas)", 
    "(UNEARTES) - UNIVERSIDAD NACIONAL EXPERIMENTAL DE LAS ARTES (Distrito Capital, Caracas)", 
    "(UBTJFR) - UNIVERSIDAD BOLIVARIANA DE LOS TRABAJADORES JESÚS RIVERO (Distrito Capital, Caracas)", 
    "(UNES) - UNIVERSIDAD NACIONAL EXPERIMENTAL DE LA SEGURIDAD (Distrito Capital, Caracas)", 
    "(UNIVERSIDAD) MILITAR BOLIVARIANA DE VENEZUELA (Distrito Capital, Caracas)", 
    "(UMB) - UNIVERSIDAD DE LAS CIENCIAS DE LA SALUD HUGO CHAVEZ FRIAS (UCS - Distrito Capital, Caracas)", 
    "(UPAFV) - UNIVERSIDAD POPULAR DEL AMBIENTE FRUTO VIVAS (Distrito Capital, Caracas)", 
    "(UNEXCA) - UNIVERSIDAD NACIONAL EXPERIMENTAL DE LA GRAN CARACAS (Distrito Capital, Caracas)", 
    "(UNETI) - UNIVERSIDAD NACIONAL DE LAS TELECOMUNICACIONES E INFORMÁTICA (Distrito Capital, Caracas)", 
    "(UNEM) - UNIVERSIDAD NACIONAL EXPERIMENTAL DEL MAGISTERIO SAMUEL ROBINSÓN (Distrito Capital, Caracas)", 
    "(UNET) - UNIVERSIDAD NACIONAL EXPERIMENTAL DE TRANSPORTE (Distrito Capital, Caracas)", 
    "(UPTCMS) - UNIVERSIDAD POLITÉCNICA TERRITORIAL DE CARACAS MARISCAL SUCRE (Distrito Capital,Caracas)", 
    "(UBC) - UNIVERSIDAD BOLIVARIANA DE LAS COMUNAS (Distrito Capital, Caracas)", 
    "(LAUICOM) - UNIVERSIDAD INTERNACIONAL DE LAS COMUNICACIONES (Distrito Capital, Caracas)",
    "(UNEFM) - UNIVERSIDAD NACIONAL EXPERIMENTAL FRANCISCO DE MIRANDA (Falcón, Coro)",
    "(UPTFAG) - UNIVERSIDAD POLITÉCNICA TERRITORIAL DE FALCON ALONSO GAMERO (Falcón, Coro)",
    "(UNERG) - UNIVERSIDAD NACIONAL EXPERIMENTAL RÓMULO GALLEGOS (Guárico, San Juan de los Morros)", 
    "(UPTLL) - UNIVERSIDAD POLITÉCNICA TERRITORIAL LLANOS JUANA RAMÍREZ (Guárico, Valle de La Pascua)", 
    "(UCLA) - UNIVERSIDAD CENTRO OCCIDENTAL LISANDRO ALVARADO (Lara, Barqisimeto)", 
    "(UNEXPO) - UNIVERSIDAD NACIONAL EXPERIMENTAL POLITÉCNICA ANTONIO JOSÉ DE SUCRE (Lara, Barquisimeto)", 
    "(UPTLAEB) - UNIVERSIDAD POLITÉCNICA TERRITORIAL DEL ESTADO LARA ANDRÉS ELOY BLANCO (Lara, Barquisimeto)",
    "(UCVAG) - UNIVERSIDAD CAMPESINA DE VENEZUELA ARGIMIRO GABALDÓN (Lara, Barquisimeto)", 
    "(UNELMLK) - UNIVERSIDAD NACIONAL EXPERIMENTAL DE LARA MARTÍN LUTHER KING (Lara,Barquisimeto)", 
    "(UMC) - UNIVERSIDAD NACIONAL EXPERIMENTAL MARÍTIMA DEL CARIBE (La Guaira, Catia La Mar)", 
    "(UPTMKR) - UNIVERSIDAD POLITÉCNICA TERRITORIAL DE MÉRIDA KLÉBER RAMÍREZ (Mérida, Cdad Mérida)", 
    "(ULA) - UNIVERSIDAD LOS ANDES (Mérida, Cdad de Mérida)", 
    "(UPTBAL) - UNIVERSIDAD POLITÉCNICA TERRITORIAL DE BARLOVENTO ARGELIA LAYA (Miranda, Higuerote)", 
    "(UPTAMCA) - UNIVERSIDAD POLITÉCNICA TERRITORIAL DE LOS ALTOS MIRANDINOS CECILIO ACOSTA (Miranda, Los Teques)", 
    "(UPTVT) - UNIVERSIDAD POLITÉCNICA TERRITORIAL DE LOS VALLES DEL TUY (Miranda) ", 
    "(USB) - UNIVERSIDAD NACIONAL EXPERIMENTAL SIMÓN BOLÍVAR (Miranda, Baruta)", 
    "(IDEA) - FUNDACIÓN INSTITUTO DE ESTUDIOS AVANZADOS (Miranda, Baruta)", 
    "(UPTNM) - UNIVERSIDAD POLITÉCNICA TERRITORIAL DEL NORTE DE MONAGAS LUDOVICO SILVA (Monagas, Maturín)", 
    "(UPTPJJM) - UNIVERSIDAD POLITÉCNICA TERRITORIAL DE PORTUGUESA JUAN DE JESÚS MONTILLA (Portuguesa, Acarigua)", 
    "(UDO) -  UNIVERSIDAD DE ORIENTE (Sucre, Cumaná)", 
    "(UPTOSCR) - UNIVERSIDAD POLITÉCNICA TERRITORIAL DEL OESTE DE SUCRE CLODOSBALDO RUSSIAN (Sucre, Cumaná)", 
    "(UPTPLMR) - UNIVERSIDAD POLITÉCNICA TERRITORIAL DE PARIA LUIS MARIANO RIVERA (Sucre, Carúpano)", 
    "(UPTETMBI) - UNIVERSIDAD POLITÉCNICA TERRITORIAL DEL ESTADO TRUJILLO MARIO BRICEÑO IRAGORRY (Trujillo, Boconó)",
    "(UNET) - UNIVERSIDAD NACIONAL EXPERIMENTAL DEL TÁCHIRA (Táchira, San Cristóbal)", 
    "(UPTNTMS) - UNIVERSIDAD POLITÉCNICA TERRITORIAL DEL NORTE DEL TÁCHIRA MANUELA SÁENZ (Táchira, La Fría)",
    "(UPTAIET) - UNIVERSIDAD POLITÉCNICA TERRITORIAL AGROINDUSTRIAL DEL ESTADO TÁCHIRA (Táchira, Michelena)",
    "(UNEY) - UNIVERSIDAD NACIONAL EXPERIMENTAL DEL YARACUY (Yaracuy, San Felipe)", 
    "(UPTYAB) - UNIVERSIDAD POLITECNICA TERRITORIAL DE YARACUY ARÍSTIDE BASTIDAS (Yaracuy, San Felipe)", 
    "(UNESUR) - UNIVERSIDAD NACIONAL EXPERIMENTAL SUR DEL LAGO JESÚS MARíA SEMPRUM (Zulia, Santa Bárbara del Zulia)", 
    "(UNERMB) - UNIVERSIDAD NACIONAL EXPERIMENTAL RAFAEL MARÍA BARALT (Zulia, Cabimas)",
    "(LUZ) - UNIVERSIDAD DEL ZULIA (Zulia, Maracaibo)", 
    "(UPTM) - UNIVERSIDAD POLITÉCNICA TERRITORIAL DE MARACAIBO (Zulia, Maracaibo)", 
    "(UPTZ) - UNIVERSIDAD POLITÉCNICA TERRITORIAL ZULIA (Zulia, Cabimas)", 
];

let estados = document.getElementById('select-location');
let universidades = document.getElementById('select-location3');
let estados2 = document.getElementById('estadisticas_estado');
let universidades2 = document.getElementById('estadisticas_universidades');


function Recorrer (estado,valores){
    universidades.innerHTML = '<option disabled selected>Universidades</option>'
    universidades2.innerHTML = '<option disabled selected>Universidades</option>'
    for(index of valores){
        estado.innerHTML+=`<option>${index}</option>`
   }
}

function LlenarEstado (){
    Recorrer(estados, estadosvnzl);
    Recorrer(estados2, estadosvnzl);
}

LlenarEstado();

estados.addEventListener('change', (e)=>{
    let dato = e.target.value;
   
    switch (dato) {
        case "Anzoátegui":
            Recorrer(universidades, univzla.slice(0,2));
            break;
        case "Aragua":
            Recorrer(universidades, univzla.slice(2,3));
            break;
        case "Apure":
            Recorrer(universidades, univzla.slice(3,4));
            break;
        case "Barinas":
            Recorrer(universidades, univzla.slice(4,6));
            break;
        case "Bolívar":
            Recorrer(universidades, univzla.slice(6,11));
            break;
        case "Carabobo":
            Recorrer(universidades, univzla.slice(11,14));
            break;
        case "Cojedes":
            Recorrer(universidades, univzla.slice(14,15));
            break;
        case "Delta Amacuro":
            Recorrer(universidades, univzla.slice(15,16));
            break;
        case "Distrito Capital":
            Recorrer(universidades, univzla.slice(16,36));
            break;
        case "Falcón":
            Recorrer(universidades, univzla.slice(36,38));
            break;
        case "Guárico":
            Recorrer(universidades, univzla.slice(38,40));
            break;
        case "Lara":
            Recorrer(universidades, univzla.slice(40,45));
            break;
        case "La Guaira":
            Recorrer(universidades, univzla.slice(45,46));
            break;
        case "Mérida":
            Recorrer(universidades, univzla.slice(46,48));
            break;
        case "Miranda":
            Recorrer(universidades, univzla.slice(48,53));
            break;
        case "Monagas":
            Recorrer(universidades, univzla.slice(53,54));
            break;
        case "Portuguesa":
            Recorrer(universidades, univzla.slice(54,55));
            break;
        case "Sucre":
            Recorrer(universidades, univzla.slice(55,58));
            break;
        case "Trujillo":
            Recorrer(universidades, univzla.slice(58,59));
            break;
        case "Táchira":
            Recorrer(universidades, univzla.slice(59,62));
            break;
        case "Yaracuy":
            Recorrer(universidades, univzla.slice(62,64));
            break;
        case "Zulia":
            Recorrer(universidades, univzla.slice(64,69));
            break;

        default:
          break;
    }
});

estados2.addEventListener('change', (e)=>{
    let dato = e.target.value;
   
    switch (dato) {
        case "Anzoátegui":
            Recorrer(universidades2, univzla.slice(0,2));
            break;
        case "Aragua":
            Recorrer(universidades2, univzla.slice(2,3));
            break;
        case "Apure":
            Recorrer(universidades2, univzla.slice(3,4));
            break;
        case "Barinas":
            Recorrer(universidades2, univzla.slice(4,6));
            break;
        case "Bolívar":
            Recorrer(universidades2, univzla.slice(6,11));
            break;
        case "Carabobo":
            Recorrer(universidades2, univzla.slice(11,14));
            break;
        case "Cojedes":
            Recorrer(universidades2, univzla.slice(14,15));
            break;
        case "Delta Amacuro":
            Recorrer(universidades2, univzla.slice(15,16));
            break;
        case "Distrito Capital":
            Recorrer(universidades2, univzla.slice(16,36));
            break;
        case "Falcón":
            Recorrer(universidades2, univzla.slice(36,38));
            break;
        case "Guárico":
            Recorrer(universidades2, univzla.slice(38,40));
            break;
        case "Lara":
            Recorrer(universidades2, univzla.slice(40,45));
            break;
        case "La Guaira":
            Recorrer(universidades2, univzla.slice(45,46));
            break;
        case "Mérida":
            Recorrer(universidades2, univzla.slice(46,48));
            break;
        case "Miranda":
            Recorrer(universidades2, univzla.slice(48,53));
            break;
        case "Monagas":
            Recorrer(universidades2, univzla.slice(53,54));
            break;
        case "Portuguesa":
            Recorrer(universidades2, univzla.slice(54,55));
            break;
        case "Sucre":
            Recorrer(universidades2, univzla.slice(55,58));
            break;
        case "Trujillo":
            Recorrer(universidades2, univzla.slice(58,59));
            break;
        case "Táchira":
            Recorrer(universidades2, univzla.slice(59,62));
            break;
        case "Yaracuy":
            Recorrer(universidades2, univzla.slice(62,64));
            break;
        case "Zulia":
            Recorrer(universidades2, univzla.slice(64,69));
            break;

        default:
          break;
    }
});