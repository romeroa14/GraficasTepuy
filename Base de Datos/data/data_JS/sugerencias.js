let sugerenciasUniversidades = [
    'Universidad Central de Venezuela (UCV)',
    'Universidad del Zulia (LUZ)',
    'Universidad de Los Andes (ULA)',
    'Universidad de Carabobo (UC)',
    'Universidad de Oriente (UDO)',
    'Universidad Centro Occidental Lisandro Alvarado (UCLA)',
    'Universidad Nacional Experimental Simon Bolivar (USB)',
    'Universidad Nacional Experimental Simon Rodriguez (UNESR)',
    'Universidad Nacional Experimental de los Llanos Occidentales Ezequiel Zamora (UNELLEZ)',
    'Universidad Nacional Experimental del Tachira (UNET)',
    'Universidad Nacional Abierta (UNA)',
    'Universidad Nacional Experimental Romulo Gallegos (UNERG)',
    'Universidad Nacional Experimental Francisco de Miranda (UNEFM)',
    'Universidad Nacional Experimental de Guayana (UNEG)',
    'Universidad Nacional Experimental Rafael Maria Baralt (UNERMB)',
    'Universidad Pedagogica Experimental Libertador (UPEL)',
    'Universidad Nacional Experimental Politecnica Antonio Jose de Sucre (UNEXPO)',
    'Universidad Nacional Experimental del Yaracuy (UNEY)',
    'Universidad Nacional Experimental Politecnica de la Fuerza Armada Bolivariana (UNEFA)',
    'Universidad Nacional Experimental Sur del Lago Jesus Maria Semprun (UNESUR)',
    'Universidad Nacional Experimental Maritima del Caribe (UMC)',
    'Universidad Bolivariana de Venezuela (UBV)',
    'Universidad Latinoamericana y del Caribe (ULAC)',
    'Universidad Deportiva del Sur (UDS)',
    'Universidad Nacional Experimental de las Artes (UNEARTE)',
    'Universidad Nacional Experimental de los Trabajadores Jesus Rivero (UNETE)',
    'Universidad Nacional Experimental de la Seguridad (UNES)',
    'Universidad Venezolana de los Hidrocarburos (UVH)',
    'Universidad Politecnica Territorial del Estado Barinas Jose Felix Ribas (UPTB)',
    'Universidad Politecnica Territorial del Estado Aragua Federico Brito Figueroa (UPTA)',
    'Universidad Politecnica Territorial del Estado Lara Andres Eloy Blanco (UPTL)',
    'Universidad Politecnica Territorial del Alto Apure Pedro Camejo (UPTA)',
    'Universidad Politecnica Territorial de Barlovento Argelia Laya (UPTBAL)',
    'Universidad Politecnica Territorial del Norte del Tachira Manuela Saenz (UPTNT)',
    'Universidad Militar Bolivariana de Venezuela (UMBV)',
    'Universidad Politecnica Territorial del Norte de Monagas Ludovico Silva (UPTNM)',
    'Universidad Politecnica Territorial del Oeste de Sucre Clodosbaldo Ruiz (UPTOS)',
    'Universidad Politecnica Territorial de Paria Luis Mariano Rivera (UPTP)',
    'Universidad Politecnica Territorial de Merida Kleber Ramirez (UPTMKR)',
    'Universidad Politecnica Territorial de Portuguesa Juan de Jesus Montilla (UPTPJJM)',
    'Universidad Nacional Experimental Indigena del Tauca (UNEIT)',
    'Universidad Politecnica Territorial Jose Antonio Anzoategui (UPTJAA)',
    'Universidad Campesina de Venezuela Argimiro Gabaldon (UCVAG)',
    'Universidad Territorial Deltaica Francisco Tamayo (UTDFT)',
    'Universidad Politecnica Territorial de Los Altos Mirandinos Cecilio Acosta (UPTAMCA)',
    'Universidad Politecnica Territorial del Estado Trujillo Mario Briceno Iragorry (UPTETMBI)',
    'Universidad Politecnica Territorial de Yaracuy Aristide Bastidas (UPTYAB)',
    'Universidad Politecnica Territorial de Falcon Alonso Gamero (UPTFAG)',
    'Universidad de las Ciencias de la Salud Hugo Chavez Frias (UCSHCF)',
    'Universidad Popular del Ambiente Fruto Vivas (UPAFV)',
    'Universidad Nacional del Turismo (UNATUR)',
    'Universidad Nacional Experimental de la Gran Caracas (UNEGC)',
    'Universidad Nacional Experimental de las Telecomunicaciones e Informatica (UNETI)',
    'UNIVERSIDAD NACIONAL EXPERIMENTAL DE LARA MARTIN LUTHER KING (UNELLEZMLK)',
    'UNIVERSIDAD POLITÉCNICA TERRITORIAL DE LOS VALLES DEL TUY (UPTVALLES)',
    'Universidad Nacional Experimental del Magisterio Samuel Robinson (UNEMAR)',
    'Universidad Nacional Experimental de Transporte (UNET)',
    'Universidad Politecnica Territorial de Maracaibo (UPTM)',
    'Universidad Politecnica Territorial de Puerto Cabello (UPTPC)',
    'Universidad Politecnica Territorial del Zulia (UPTZ)',
    'Universidad Politecnica Territorial Llanos Juana Ramirez (UPTLJR)',
    'Universidad Politecnica Territorial de Caracas Mariscal Sucre (UPTCS)',
    'Universidad Politecnica Territorial Agro Industrial del Estado Tachira (UPTAIT)',
    'Universidad Politecnica Territorial del Estado Bolivar (UPTGB)',
    'Universidad Politecnica Territorial de Valencia (UPTV)',
    'Universidad Bolivariana de las Comunas (UBC)',
    'Universidad Internacional de las Comunicaciones (UNICOM)',
    'Universidad Nacional Experimental de Especialidades Electricas (UNEE)',
    'Instituto de Estudios avanzados (IDEA)'

];


let sugerenciasEstados = {
    "amazonas": {
        "coordenadas": [4.34328979885553, -65.87793406640446],
        "zoom": 7,
    },
    "anzoategui": {
        "coordenadas": [9.099049053761691, -64.2081664302623],
        "zoom": 8,
    },
    "apure": {
        "coordenadas": [7.315797283844404, -69.21729563279075],
        "zoom": 8,
    },
    "aragua": {
        "coordenadas": [10.051515009980042, -67.14893456466858],
        "zoom": 9,
    },
    "barinas": {
        "coordenadas": [8.293703904058729, -69.72120707288398],
        "zoom": 8,
    },
    "bolivar": {
        "coordenadas": [6.240181127106679, -63.483118190345365],
        "zoom": 7,
    },
    "carabobo": {
        "coordenadas": [10.167780718469126, -68.06628210648745],
        "zoom": 10,
    },
    "cojedes": {
        "coordenadas": [9.404523227775739, -68.38214465557358],
        "zoom": 9,
    },
    "delta amacuro": {
        "coordenadas": [8.912872796719038, -61.36060313370347],
        "zoom": 8,
    },
    "distrito capital": {
        "coordenadas": [10.471164171498925, -66.99085235595705],
        "zoom": 11.5,
    },
    "falcon": {
        "coordenadas": [11.152115326128591, -69.88599600490045],
        "zoom": 8,
    },
    "guarico": {
        "coordenadas": [8.880311174904532, -66.60107865439922],
        "zoom": 8,
    },
    "esequibo": {
        "coordenadas": [5.137278050194342, -59.46197235013147],
        "zoom": 8,
    },
    "lara": {
        "coordenadas": [10.153379942838153, -69.75319139496216],
        "zoom": 9,
    },
    "merida": {
        "coordenadas": [8.516471068595997, -71.21985973012148],
        "zoom": 8,
    },
    "miranda": {
        "coordenadas": [10.364188144252429, -66.4243186240746],
        "zoom": 9,
    },
    "monagas": {
        "coordenadas": [9.514714890753556, -62.91426839995992],
        "zoom": 8,
    },
    "nueva esparta": {
        "coordenadas": [10.96022545050653, -64.02719780001561],
        "zoom": 10,
    },
    "portuguesa": {
        "coordenadas": [9.01051206876335, -69.25880475750635],
        "zoom": 8,
    },
    "sucre": {
        "coordenadas": [10.485448798372925, -63.41404450205198],
        "zoom": 9,
    },
    "tachira": {
        "coordenadas": [7.941079425553923, -72.01859231058509],
        "zoom": 9,
    },
    "trujillo": {
        "coordenadas": [9.434325246417801, -70.51624151441797],
        "zoom": 9,
    },
    "la guaira": {
        "coordenadas": [10.591938380528376, -66.82758240799845],
        "zoom": 10,
    },
    "yaracuy": {
        "coordenadas": [10.278602856006819, -68.733708091489],
        "zoom": 9,
    },
    "zulia": {
        "coordenadas": [9.747613546942501, -71.86355453444074],
        "zoom":7.5,
    }
};