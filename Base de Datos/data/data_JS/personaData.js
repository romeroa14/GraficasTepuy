const personaData = {
   "Persona1": {
        "nombre1": 'Ikabaru',
        "nombre2": 'Alejandro',
        "apellido1": 'Garcia',
        "apellido2": 'Torres',
        "nacimiento": '04/12/1997',
        "cedula": '25896749',
        "foto": './data/20230210_124311.png',
        "sexo": 'Masculino',
        "direccion": 'Calle Bucare, Colinas de Carrizal, Carrizal, Edo. Miranda, Venezuela',
        "telefono": '04142591853',
        "empleado_tipo": 'Obrero',
        "condicion":'Vigilante',
        "cargo": 'Ingeniero en Sistemas',
        "habilidades" : [
            {
                "id1": '1',
                "habilidad": 'backend'
            },
            {
                "id2": '2',
                "habilidad": 'frontend'
            },
            {
                "id3": '3',
                "habilidad": 'data entry'
            },
            {
                "id4": '4',
                "habilidad": 'fullstack'
            }
            
        ]
    },
};

// Crear una instancia de XMLHttpRequest
const xhr = new XMLHttpRequest();

// Abrir la conexión con el método POST y la URL 'conexion.php'
xhr.open('POST', 'conexion.php', true);

// Establecer el encabezado para indicar que los datos se envían como JSON
xhr.setRequestHeader('Content-Type', 'application/json');

// Definir una función para manejar el cambio de estado de la solicitud
xhr.onreadystatechange = function () {
    // Verificar si la solicitud ha sido completada y la respuesta del servidor es 200 (OK)
    if (xhr.readyState === 4 && xhr.status === 200) {
        // Mostrar la respuesta del servidor en la consola
        console.log(xhr.responseText);
    }
};

// Enviar los datos JSON convertidos a cadena usando JSON.stringify
xhr.send(JSON.stringify(personaData));