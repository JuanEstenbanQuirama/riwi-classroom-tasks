// 1. y 2.  Verifica si un número es positivo o negativo
let number = 4
if(number > 0 ) {
    console.log(`el numero ${number} es positivo`)
} else {
    console.log(`el numero ${number} es negativo`)
}

// 3.  Comprueba si un número es par.
if (number%2 == 0) {
    console.log(`El numero ${number} es par`)
}
// 4.  Comprueba si un número es impar.
if (number%2 !== 0) {
    console.log(`El numero ${number} es impar`)
}

// 5.  Determina si un número es múltiplo de 5.
let numberMultiplo = 50
if (numberMultiplo%5 == 0) {
    console.log(`El numero ${numberMultiplo} es impar`)
}



// 16 fibo
let fib = function(n) {
    const fibo = [0, 1];

    for (let i = 2; i<= n; i++) {
        fibo[i] = fibo[i -1] + fibo[i - 2];
    }

    return fibo[n];
};
console.log(fib(6))

