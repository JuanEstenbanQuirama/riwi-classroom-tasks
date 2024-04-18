// 1. Sumar dos números.
let num1=2
let num2=2
console.log(num1+num2)

// 2.   Restar dos números.
let restNum1=4
let restNum2=2
console.log(restNum1-restNum2)

// 3. Multiplicar dos números.
let multiNum1=4
let multiNum2=2
console.log(multiNum1*multiNum2)

// 4. Dividir dos números.
let diviNum1=10
let diviNum2=3
console.log(diviNum1/diviNum2)

// 5.  Calcular el módulo (resto) de una división.
let dividendo = 10;
let divisor = 3;
let resto = dividendo % divisor;
console.log("El resto de dividir", dividendo, "por", divisor, "es:", resto);

// 6.  Generar un número aleatorio entre 1 y 10.
console.log("Numero Aleatorio", Math.round(Math.random()*(1-10)+10))

// 7.  Elevar un número a la potencia de otro.
console.log(Math.pow(2, 5))

//  8.  Calcular la raíz cuadrada de un número.
console.log(Math.sqrt(25))

//  9. Convertir grados Celsius a Fahrenheit.
let celsius = 20;
let fahrenheit = (9 / 5) * celsius + 32; // Convertimos Celsius a Fahrenheit usando la fórmula
console.log(celsius + " grados Celsius son equivalentes a " + fahrenheit + " grados Fahrenheit.");

// 10. Calcular el área de un círculo.
let radio = 5;
let area = Math.PI * Math.pow(radio, 2); // Calculamos el área del círculo
console.log("El área del círculo con radio", radio, "es:", area);

// 11. Calcular el perímetro de un cuadrado.
let lado=2
let perimetro = lado*4
console.log("El perímetro del cuadrado con un lado de longitud", lado, "es:", perimetro);

// 12. Calcular el volumen de una esfera.
let radioEsfera=6;
let volumen=(4/3)*Math.PI*Math.pow(radioEsfera,3)
console.log("El volumen de la esfera con radio", radioEsfera, "es:", volumen);

// 13. Calcular el área de un triángulo.
let base = 10
let altura = 8
let areaTriangle = (1/2)*base*altura
console.log("El área del triángulo con base", base, "y altura", altura, "es:", areaTriangle);

// 14. Generar la tabla de multiplicar del número 5.
for (let i = 1; i <= 10; i++) {
    element = 5*i;
    console.log("multipar", 5, "x", i, "es:", element)
}

// 15. Encontrar el número mayor entre 3, 7 y 2
let maxNum=[3,7,2]
console.log("El numero maximo es:",Math.max(...maxNum))

// 16. Encontrar el número menor entre 10, 20 y 5.
let minNum=[10, 20, 5]
console.log("El numero minimo es:",Math.min(...minNum))

// 17. .Calcular el promedio de 4, 6 y 8.
let promedioNum1= 4;
let promedioNum2= 6;
let promedioNum3= 8;
let suma = promedioNum1 + promedioNum2 + promedioNum3;
let promedio = suma /3
console.log("El promedio de " + promedioNum1 + ", " + promedioNum2 + " y " + promedioNum3 + " es: " + promedio);

// 18. Calcular la factorial de 5
let resultado=1
for (let i = 1; i <= 5; i++) {
    resultado *= i; 
}
console.log(resultado)

// 19 Redondear el número 3.6
console.log(Math.trunc(3.6))

// 20. Calcular el doble de 9.
let numero = 9;
let doble = numero * 2;
console.log("El doble de 9 es: " + doble);

// 21. .Calcular el triple de 4.
let numero1 = 4;
let triple = numero1 * 3;
console.log("El triple de 4 es: " + triple);

// 22. 