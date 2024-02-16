let estadisticasData = {

    // Universidades principales
   "USB": {
        "estudiantes": {
            "datos": [
                {"tipo": 'femenino', "cantidad": 100, "color": '#FF0000'},
                {"tipo": 'masculino', "cantidad": 100, "color": '#FF0000'},
                {"tipo": 'raros', "cantidad": 3, "color": '#FF0000'}
            ]
        }
    }
}

var nuevosDatos = estadisticasData[siglas]["estudiantes"]["datos"]
nuevosDatos[0]["tipo"]