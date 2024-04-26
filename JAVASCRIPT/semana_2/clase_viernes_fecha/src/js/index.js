/**
 * forma de construtir o crear fechas 
    - crear una fecha:  palabra reservada  'new Date()´  es un constructor (se entiene mejor cuando se vea programación orientada a objetos) (constructor: una función que crea cosas, en este caso uan fecha)

 */

//Crear fecha mediante: 

//--------------------1.    palabra reservada  'new Date()´
let isDate = new Date(); // día semanal - mes - día calendario - año  Hora - Minuto - formato internacional ubicación
// alert(`La fecha de hoy es ${isDate}`)

// crear fecha en particular 
// * Para javascript, siguiendo su lógica de índices, los meses, inician desde el 0 (indice) siendo este el mes de enero.
let isMyDate = new Date(1996, 11, 19);
console.log(isMyDate)

//2. ----------------cadena de carácteres (string),  new Date ("String formato mm/dd/yyy")
//se realiza la conversión de un string
                    // mes-dia año
let isDate2 = new Date("12/02/2000") // o ("12-02-2000") o ("12.02.2000") o ("12*02*2000") / pero  ("12+02+2000") no se puede
console.log(isDate2)


// se puede hacer uso de cada uno de los datos que entrega new Date
// obtener una parte de la fecha
// usamos el metodo .getDate (llamado a una función que tiene la clade {Clase: conjunto de funciones que podemos usar} Date ) responde el día de la fecha dada
let dia = isDate.getDate() // (1-31)
console.log(dia);
let mes = isDate.getMonth();
console.log(mes);
// los meses en js están indexados desde el 0 al 11. para obtener el mes actual sumamos uno al metodo
let mesActual = isDate.getMonth() + 1;
console.log(mesActual);
let anualidad = isDate.getFullYear(); // formato (yyyy)
console.log(anualidad);
let diaSemana = isDate.getDay(); // (0-6)
console.log(diaSemana)
let hora = isDate.getHours(); // hora militar
console.log(hora)
let munuto = isDate.getMinutes(); // 0-50
console.log(munuto)
let segundo = isDate.getSeconds(); // 0-59
console.log(segundo)
let time = isDate.getTime()
console.log(time);

// Creamos una fecha pasando cada uno de sus componentes numéricos*
const date = new Date(2018, 0, 30, 23, 30, 14, 0);

console.log(date)

let setDay = isDate.setDate(0)
console.log(setDay);
let setMinute = isDate.getTimezoneOffset()
console.log(setMinute);



// Ejercicio
// Ingresar una fecha mediante un prompt y mostrar luego, mediante un alert, a qué día  la semana corresponde - pista pueden usar un switch



// let inputDate = prompt("Ingrelsa la fecha", "mm/dd/yyy")
// let theDate = new Date(inputDate)
// let dayDate = theDate.getDay(); // returna numeros del 0 al 6
// console.log(dayDate);
// let isDayDate;

// switch (dayDate) {
//     case 0:
//         isDayDate = "Sunday"
//         break;
//     case 1:
//         isDayDate = "Monday"
//         break;
//     case 2:
//         isDayDate = "Tuesday"
//         break;
//     case 3:
//         isDayDate = "Wednesday"
//         break;
//     case 4:
//         isDayDate = "Thursday"
//         break;
//     case 5:
//         isDayDate = "Friday"
//         break;
//     case 6:
//         isDayDate = "Saturday"
//         break;

//     default:
//         break;
// }

// alert(`El dia de la semana es ${isDayDate}`)

