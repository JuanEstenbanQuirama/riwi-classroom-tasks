/**
1. if-else con uso de operadores de comparación, Operadores de asignación con 
Resta y asignación, y algún método de string:
Enunciado del Problema: Crea un programa que tome dos números del usuario y 
utilice una estructura de control 
if-else para determinar 
si el primer número es mayor que el segundo. Si es así, resta el segundo número al primero y muestra el 
resultado en consola. Además, utiliza algún método de string para indicar si el 
resultado es un número positivo o negativo.
 */

let number1 = Number(prompt("ingresa el numero 1:"))
let number2 = Number(prompt("ingresa el numero 2:"))

// if (number1>number2){
//     console.log(`1. el numero: ${number1} es menor que ${number2}:`, number1-number2, "La resta es positivo")
// } else {
//     console.log(`1. el numero: ${number1} no es mayor que ${number2}:`, number1-number2, "La resta es negativo")
// }

/**
 2. switch case con uso de operadores de comparación, Método Math y 
Number.parseFloat(text):

Enunciado del Problema: Desarrolla un programa que solicite al usuario 
seleccionar una operación matemática (suma, resta, multiplicación o división) 
mediante un menú. Utiliza un switch case para realizar la operación seleccionada 
en dos números ingresados por el usuario. Además, utiliza el método Math para 
redondear el resultado y conviértelo a un número decimal utilizando 
Number.parseFloat(text) antes de mostrarlo en consola.
 */
console.log(` 
calculadora
1. suma.
2. resta.
3. multiplicacion.
4. division.
`)
let op = Number(prompt("Elige la opcion"))
let option = Number(op);


switch (option) {
    case 1:
        console.log(`La suma es:`, number1+number2)
        break;
    case 2:
        console.log(`La resta es:`,number1-number2)
        break;
    case 3:
        console.log(`La multiplicacion es:`,number1*number2)
        break;    
    case 4:
        console.log(`la division es:`, number1/number2)
        break;
    default:
        console.log("Elige una opción correcta")
        break;
}
