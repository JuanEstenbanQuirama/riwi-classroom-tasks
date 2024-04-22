//1.	Declara dos variables, num1 y num2, asignándoles valores numéricos diferentes y muestra en consola el resultado de sumarlos.
let num1=2
let num2=3
console.log("Ejercicio 1: ", num1 + num2)

// 2.	Define dos variables de tipo string, simpleString1 y simpleString2, con valores "Hola" y "Mundo" respectivamente. Muestra en consola la longitud total de ambas cadenas.
let simpleString1="hello";
let simpleString2="word";
console.log("Ejercicio 2: ", simpleString1.length)
console.log("Ejercicio 2: ", simpleString2.length)

// 3.	Crea dos variables de tipo string usando la función String(): stringUsingString1 con el valor "JavaScript" y stringUsingString2 con el valor "Ejercicios".

let stringUsingString1 = String("JavaScript");
let stringUsingString2 = String("Ejercicios");
console.log("Ejercicio 3:", typeof(stringUsingString1))

// 4.	Utiliza el operador new para crear dos variables de tipo string: stringUsingNewString1 con el valor "Concatenar" y stringUsingNewString2 con el valor "Strings".

let stringUsingString3 = new String("JavaScript");
let stringUsingString4 = new String("Ejercicios");
console.log("Ejercicio 4:", typeof(stringUsingString3))
console.log(stringUsingString3)
// 5.	Calcula e imprime en consola la posición del substring "la" en la variable simpleString1.

let simpleString5 = "holola"
console.log(simpleString5.search("la"))

// 6
// 20
let person = {
    1:"cafes",
    cabello: "rojo",
    edad: 3
}


console.log( person.edad)
console.log(person)
console.log(person[1])

// 20.	Declara una variable objeto y asígnale un objeto con al menos tres propiedades. Muestra en consola una de las propiedades del objeto.

// 21.	Declara una variable nulo y asígnale el valor null. Muestra en consola su tipo de dato utilizando el operador typeof().

let nulo = null;
console.log(typeof(nulo))

// 22.	Declara una variable indefinido y no le asignes ningún valor. Muestra en consola su tipo de dato utilizando el operador typeof().

