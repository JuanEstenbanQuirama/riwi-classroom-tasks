// ejercicio 1

// let num1 = Number(prompt("Ingresa el primer número"));
// let num2 = Number(prompt("Ingresa el segundo número"));

// console.log(num1 + num2);
// console.warn(num1 - num2);
// console.error(num1 * num2);
// console.info(num1 / num2);

// ejercicio 2

// let fruits = ["apple", "banana", "pear", "orange", "cucumber"]
// for (let index = 0; index < fruits.length; index++) {
//     const element = fruits[index];
//     console.log(element)
// }

// ejercicio 3

// let note1 = Number(prompt("Ingresar nota 1: "))
// let note2 = Number(prompt("Ingresar nota 2: "))
// let note3 = Number(prompt("Ingresar nota 3: "))
// let note4 = Number(prompt("Ingresar nota 4: "))
// let note5 = Number(prompt("Ingresar nota 5: "))

// let notes = [note1, note2, note3, note4, note5]

// console.table(notes)
// let element=0;
// for (let i = 0; i < notes.length; i++) {
//     element += notes[i];
// }

// let notaFinal = element / notes.length;
// console.log(notaFinal);

// function decirNota(nota) {
//     if (nota >= 3) {
//         return "Pasaste";
//     } else {
//         return "No pasas";
//     }
// }

// console.log(decirNota(notaFinal));

// ejercicio 4



// ejercicio #5

let age=Number(prompt("Ingresa tu edad"));

function calcAge(myAge){
    if(myAge>=24) {
        return "Mayor de edad"
    } else {
        return "Menor de edad"
    }
}

console.log(calcAge(age));