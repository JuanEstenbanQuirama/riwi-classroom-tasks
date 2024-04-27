/**
Desarrollar un sistema de gestión para una veterinaria que permita administrar la información de 
las  mascotas.  El  sistema  deberá  permitir  realizar  operaciones  CRUD  (Crear,  Leer,  Actualizar, 
Eliminar) 
El sistema debe tener como mínimo 10 mascotas previamente registradas para poder practicar  
Recuerda  que  el  uso  de  comentarios  NO  es  opcional,  debes  utilizarlos,  pero  tampoco  abusar  de 
ellos. 
Importante el uso de funciones para modularizar el código y hacerlo más limpio 
Funcionalidades Principales: 
1. Registrar una nueva mascota (nombre, especie, raza, edad (calcular la edad de acuerdo a la 
fecha  de  nacimiento),  peso, estado  (estable,  critico),  nombre  propietario,  documento  del 
dueño, teléfono de contacto, correo del propietario,). 
2. Ver la lista de todas las mascotas registradas, en dicho array. 
3. Ver una lista de todos los dueños 
4. Buscar una mascota por el nombre 
5. Filtrar y luego mostrar a todas las mascotas pertenecientes a un mismo dueño 
6. Actualizar la información de una mascota existente. 
7. Eliminar una mascota del array. 
8. Crear un menú que me permita controlar cada una de estas acciones 
*/

// arreglo para almacenar las pascotas
let listPets = [
    {
        petName: "Doggy",
        PetRace: "Zhit zu",
        petSpecies: "Dog",
        petAge: new Date(),
        petWidth: 7,
        petStatus: "good",
        petOwner: "juan",
        petOwnerId: 1036670093,
        petOwnerPhone: 3059052091,
        petOwnerEmial: "jquirama@gmail.com"
    },
    {
        petName: "Thobbias",
        PetRace: "Zhit zu",
        petSpecies: "Dog",
        petAge: new Date(),
        petWidth: 3,
        petStatus: "good",
        petOwner: "Juan",
        petOwnerId: 1036670093,
        petOwnerPhone: 3059052091,
        petOwnerEmial: "jquirama@gmail.com"
    },
    {
        petName: "lulu",
        PetRace: "doberman",
        petSpecies: "Dog",
        petAge: new Date(),
        petWidth: 7,
        petStatus: "good",
        petOwner: "Luisa",
        petOwnerId: 1036670093,
        petOwnerPhone: 3059052091,
        petOwnerEmial: "jquirama@gmail.com"
    },
    {
        petName: "fiona",
        PetRace: "persa",
        petSpecies: "Dog",
        petAge: new Date(),
        petWidth: 7,
        petStatus: "good",
        petOwner: "Crhistian",
        petOwnerId: 1036670093,
        petOwnerPhone: 3059052091,
        petOwnerEmial: "jquirama@gmail.com"
    },
    {
        petName: "Simona",
        PetRace: "labrador",
        petSpecies: "Dog",
        petAge: new Date(),
        petWidth: 10,
        petStatus: "critial",
        petOwner: "Paola",
        petOwnerId: 1036670093,
        petOwnerPhone: 3059052091,
        petOwnerEmial: "jquirama@gmail.com"
    },
    {
        petName: "lukas",
        PetRace: "mapache",
        petSpecies: "albino",
        petAge: new Date(),
        petWidth: 7,
        petStatus: "good",
        petOwner: "Manuel",
        petOwnerId: 1036670093,
        petOwnerPhone: 3059052091,
        petOwnerEmial: "jquirama@gmail.com"
    },
    {
        petName: "ikaro",
        PetRace: "pastor",
        petSpecies: "Dog",
        petAge: new Date(),
        petWidth: 7,
        petStatus: "good",
        petOwner: "Ian",
        petOwnerId: 1036670093,
        petOwnerPhone: 3059052091,
        petOwnerEmial: "jquirama@gmail.com"
    },
    {
        petName: "mono",
        PetRace: "coker",
        petSpecies: "Dog",
        petAge: new Date(),
        petWidth: 7,
        petStatus: "good",
        petOwner: "Felipe",
        petOwnerId: 1036670093,
        petOwnerPhone: 3059052091,
        petOwnerEmial: "jquirama@gmail.com"
    }
];





// op = showMenu();
// console.log(op);

// let pet = {}
// let newPet= {}

console.log(listPets);
function inputsData() {
    let nombre = prompt("Ingrea el nombre de la mascota")
    let especie = prompt("Ingrea la espcie de la mascota")
    let raza = prompt("Ingrea la raza de la mascota")
    let fechaNacimiento = prompt("Ingrea la fecha de la mascota")
    let peso = prompt("Ingrea el peso de la mascota")
    let estado = prompt("Ingrea estado de la mascota")
    let nombrePropietario = prompt("Ingrea el dueño de la mascota")
    let documentoPropietario = prompt("Ingrea id dueño de la mascota")
    let telefonoPropietario = prompt("Ingrea tell dueño de la mascota")
    let correoPropietario = prompt("Ingrea el correo dueño de la mascota")
    registerPet(nombre, especie, raza, fechaNacimiento, peso, estado, nombrePropietario, documentoPropietario, telefonoPropietario, correoPropietario)
}
function registerPet(nombre, especie, raza, fechaNacimiento, peso, estado, nombrePropietario, documentoPropietario, telefonoPropietario, correoPropietario) {
    // Calcular la edad
    // let age = calcularEdad(fechaNacimiento);
    pet = {
        petName: nombre,
        PetRace: raza,
        petSpecies: especie,
        petAge: fechaNacimiento,
        petWidth: peso,
        petStatus: estado,
        petOwner: nombrePropietario,
        petOwnerId: documentoPropietario,
        petOwnerPhone: telefonoPropietario,
        petOwnerEmial: correoPropietario
    }
    listPets.push(pet);
    return pet
}

// showMenu()
// inputsData() // funciona melo  se hace una llamada asincrona para registrar el pet
console.log(listPets);

let op = 0;

function showMenu() {
    return Number(prompt(`BITAN VET
    Digita una opción:
    1. Registrar una nueva mascota
    2. Ver la lista de las mascotas registradas
    3. Ver una lista de todos los dueños
    4. Buscar una mascota por el nombre
    5. Filtrar las mascotas pertenecientes a un mismo dueño
    6. Actualizar la información de una mascota existente
    7. Eliminar una mascota del array
    `));
}

op = showMenu()

switch (op) {
    case 1:
        inputsData()
        console.log("xd");
        break;
    case 2:
        console.log("2");
        break;
2
    default:
        console.log("nel");
        break;
}

console.log(listPets);

// console.log();
// // Función para calcular la edad
// function calcularEdad(fechaNacimiento) {
//     // Cálculo de la edad (ejemplo básico)
//     // Aquí deberías implementar un cálculo más preciso
//     let fechaActual = new Date();
//     let fechaNac = new Date(fechaNacimiento);
//     let edad = fechaActual.getFullYear() - fechaNac.getFullYear();
//     return edad;
// }

// // Función para ver la lista de todas las mascotas registradas
// function verMascotas() {
//     console.log("Lista de mascotas:");
//     mascotas.forEach(mascota => {
//         console.log(mascota);
//     });
// }

// // Función para ver una lista de todos los dueños
// function verDuenos() {
//     console.log("Lista de dueños:");
//     let dueños = [];
//     mascotas.forEach(mascota => {
//         if (!dueños.includes(mascota.nombrePropietario)) {
//             dueños.push(mascota.nombrePropietario);
//         }
//     });
//     console.log(dueños);
// }

// // Función para buscar una mascota por el nombre
// function buscarMascotaPorNombre(nombre) {
//     let mascotaEncontrada = mascotas.find(mascota => mascota.nombre === nombre);
//     if (mascotaEncontrada) {
//         console.log("Mascota encontrada:");
//         console.log(mascotaEncontrada);
//     } else {
//         console.log("Mascota no encontrada.");
//     }
// }

// // Función para filtrar y mostrar todas las mascotas pertenecientes a un mismo dueño
// function mostrarMascotasPorDueño(nombrePropietario) {
//     let mascotasPorDueño = mascotas.filter(mascota => mascota.nombrePropietario === nombrePropietario);
//     if (mascotasPorDueño.length > 0) {
//         console.log(`Mascotas de ${nombrePropietario}:`);
//         mascotasPorDueño.forEach(mascota => {
//             console.log(mascota);
//         });
//     } else {
//         console.log(`No hay mascotas registradas para ${nombrePropietario}.`);
//     }
// }

// // Función para actualizar la información de una mascota existente
// function actualizarMascota(nombre, nuevaInfo) {
//     let index = mascotas.findIndex(mascota => mascota.nombre === nombre);
//     if (index !== -1) {
//         mascotas[index] = { ...mascotas[index], ...nuevaInfo };
//         console.log("Mascota actualizada correctamente.");
//     } else {
//         console.log("No se encontró ninguna mascota con ese nombre.");
//     }
// }

// // Función para eliminar una mascota del array
// function eliminarMascota(nombre) {
//     mascotas = mascotas.filter(mascota => mascota.nombre !== nombre);
//     console.log("Mascota eliminada correctamente.");
// }



// // Ejemplo de uso
// registerPet("Firulais", "Perro", "Labrador", "2015-05-10", 15, "Estable", "Juan Pérez", "12345678", "123456789", "juan@example.com");
// registerPet("Minino", "Gato", "Siamés", "2018-10-20", 5, "Crítico", "María López", "87654321", "987654321", "maria@example.com");

// verMascotas();
// verDuenos();
// buscarMascotaPorNombre("Firulais");
// mostrarMascotasPorDueño("Juan Pérez");
// actualizarMascota("Firulais", { peso: 16 });
// eliminarMascota("Minino");
// verMascotas();
// showMenu();

