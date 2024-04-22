// 1.
let isPositiveNumber = 4
if (isPositiveNumber >= 0) {
    console.log(`el numero ${isPositiveNumber} es positivo`)
} else {
    console.log(`el numero ${isPositiveNumber} es negativo`)
}

// 2.
let isNegativeNumber = -5
if (isNegativeNumber <= 0) {
    console.log(`el numero ${isNegativeNumber} es positivo`)
} else {
    console.log(`el numero ${isNegativeNumber} es negativo`)
}

// 3.  
if (isPositiveNumber % 2 == 0) {
    console.log(`El numero ${isPositiveNumber} es par`)
}

// 4.  
if (isNegativeNumber % 2 !== 0) {
    console.log(`El numero ${isNegativeNumber} es impar`)
}

// 5.  
let numberMultiplo = 50
if (numberMultiplo % 5 === 0) {
    console.log(`El numero ${numberMultiplo} es multipo de 5`)
}

// 6.
let isDivisible = 21;
if (isDivisible % 3 === 0) {
    console.log(`El número ${isDivisible} es divisible entre 3`);
}

// 7.
let isNumber = 105;
if (isNumber > 100) {
    console.log(`El número ${isNumber} es mayor que 100`);
}

// 8.
let isNumberMenor = Math.floor(Math.random() * 101) - 100;
if (isNumberMenor > (-50)) {
    console.log(`${isNumberMenor} No es menor que -50`);
} else {
    console.log(`${isNumberMenor} es menor que -50`);
}

// 9.
let isNumberInRange = Math.floor(Math.random() * 50) + 10;
if (isNumberInRange <= 50 && isNumberInRange >= 20) {
    console.log(`${isNumberInRange} está en el rango`);
} else {
    console.log(`${isNumberInRange} No está en el rango`);
}

// 10.
let isNumberCero = Math.floor(Math.random() * 3);
if (isNumberCero == 0) {
    console.log(`${isNumberCero} es igual a 0.`);
} else {
    console.log(`${isNumberCero} no es igual a 0.`);
}

// 11. 
let numberRange = Math.floor(Math.random() * 41) - 20;

if ((numberRange > -10) && (numberRange < 10)) {
    console.log(`${numberRange} Es mayor que -10`);
} else {
    console.log(`${numberRange} Es menor que 10`);
}

// 12.
let isAge = Math.floor(Math.random() * 3000);
if ((isAge % 4 == 0) && ((isAge % 100 != 0) || (isAge % 400 == 0))) {
    console.log(`${isAge} El año es bisiesto.`);
} else {
    console.log(`${isAge} El año no es bisiesto.`);
}

// 13.
const age = Math.floor(Math.random() * 50);
if (age >= 18) {
    console.log(`La persona tiene ${age} años, es mayor de edad`);
} else {
    console.log(`La persona tiene ${age} años es menor de edad`);
}

// 15. revisar -----------------------------------------------
let numero = Math.floor(Math.random() * 100);
let raizCuadrada = Math.sqrt(numero);

if (raizCuadrada === Math.floor(raizCuadrada)) {
    console.log(`${numero} es un cuadrado perfecto`);
} else {
    console.log(`${numero} no un cuadrado perfecto`);
}

// 16 revisar -----------------------------------------
let a = 0;
let b = 1;
let c = 0;

let numeroEvaluar = 8

while (c <= numeroEvaluar) {
    c = a + b;
    a = b;
    b = c;
}

const numFibo = c - (c - a);

if (numeroEvaluar == numFibo) {
    console.log("El Número está en la serie Fibonacci");
} else {
    console.log("El Número no está en la serie Fibonacci");
}

// 17.-----reisar
let isNumberRamdom = Math.floor(Math.random() * 100);

if ((isNumberRamdom & (isNumberRamdom - 1)) === 0) {
    console.log(`Es potencia de dos. ${isNumberRamdom}`);
} else {
    console.log(`No es potencia de dos. ${isNumberRamdom}`);
}

// 18. ------revisar
// // Determina si un número es un palíndromo.

// let numero = Math.floor(Math.random() *1000);
// numero = numero.toString();
// let palindromo = numero.split('').reverse().join('');//Seapara la cadena en una lista, la voltea al revés y la vuelve a convertir en cadena

// if (numero === palindromo) {
//     console.log(`${numero} es palíndromo`);
// } else {
//     console.log(`${numero} No es palíndromo`);
// }



// 19. 
let stringText = "Voy a ser el mejor del mundo mundial en: JavaScript";

if (stringText.includes("JavaScript")) {
    console.log(`Contiene la palabra JavaScript`);
} else {
    console.log(`NO contiene la palabra JavaScript`);
}

// 20.
if (stringText.length > 10) {
    console.log(`La cadena tiene más de 10 caracteres`);
} else {
    console.log(`La cadena tiene menos de 10 caracteres`);
};

// 21
let string = "Hola, estar en Riwi es una bendición";
let stringMinus = string.toLocaleLowerCase();
if (string === stringMinus) {
    console.log(`La cadena es minúscula`);
} else {
    console.log(`La cadena no es minúscula`);
}

