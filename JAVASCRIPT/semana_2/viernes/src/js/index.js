/**
    FUNCIONES
        - Realiza algo especifico
        - Una sola responsabilidad
        - si bien el codigo se lee de arriba hacía abajo, se puede llamar una función antes de inicializarla (lecturajs: primero busca funciones, luego variables)
*/

//confirm("seguro") // esta función retorna true o false

// crear una función
// diferencia de parametro y un argumento
// function saludarCoders(params) { // parametro
    
// }
// saludarCoders() //argumento

// paramrtros viven y mueren dentro de la función
function saludarCoders (coder) {
    console.log(`saluda a: ${coder} `)
}
// saludarCoders("jeli");
// saludarCoders("aguacates");
// saludarCoders("mi mama");

function saluditoCodercito (coderName, coderClan) {
    console.log(`Hola ${coderName}, eres del clan ${coderClan}`);
    chaitoCodercito()
}

function chaitoCodercito () {
    console.log("Hasta lueguito ");
}

// saluditoCodercito("juan", "gates")

// funcion declarativa - sin parametros
function nombrefuncion(){

}

// función experesiva - de esta forma primero tengo que crear la función luego de llamarlas - diferencia a la declarativa
let nombrevariable = function (){

}

// 
function sumNumbers (n1, n2) {
    let response = n1 + n2
    return response
}
