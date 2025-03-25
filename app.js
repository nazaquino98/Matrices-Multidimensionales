const readline = require('readline-sync');

let personas = [];

while (true) {
    //Solicitar los datos de la persona
    let nombre = readline.question('Nombre: ');
    let apellido = readline.question('Apellido: ');
    let dni = readline.question('DNI: ');
    
    //# Solicitar los telefonos
    let telefonos = [];
    while (true) {
        let telefono = readline.question('Telefono (o enter para terminar): ');
        if (!telefono) break; //Si no se ingresa nada, terminar la carga de telefonos
        telefonos.push(telefono);
    }

    //# Guardar los datos en la lista de personas
    personas.push([nombre, apellido, dni, telefonos]);

    // Preguntar si desea agregar otra persona
    let otra = readline.question('¿Agregar otra persona? (si/no): ').toLowerCase();
    if (otra !== 'si') break;
}

// Mostrar los datos ingresados
console.log('\nLista de personas:', personas);
