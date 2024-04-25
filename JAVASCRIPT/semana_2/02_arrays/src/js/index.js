// 1
console.log("EJERCICIOS ARRAYS # -------1------")
let fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Cucumber",
  "Pineapple",
  "Onion",
  "Tomato",
];

// 2
console.log("EJERCICIOS ARRAYS # -------2------")
for (let i = 0; i <= fruits.length; i++) {
  console.log(fruits[i]);
}

// 3
console.log("EJERCICIOS ARRAYS # -------3------")
fruits.forEach((fruit) => {
  console.log(fruit.toLowerCase());
});

// 4
console.log("EJERCICIOS ARRAYS # -------4------")
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 5
console.log("EJERCICIOS ARRAYS # -------5------")
let i = 1
while (i <= 10) {
  console.log(i)
  i += 1
}

// 6
console.log("EJERCICIOS ARRAYS # -------6------")
fruits.push("watermelon")
console.log(fruits)

// 7
console.log("EJERCICIOS ARRAYS # -------7------")
// delete numbers[1]
// numbers.pop(1)
// console.log(delete numbers[1])

// 8
console.log("EJERCICIOS ARRAYS # -------8------")
console.log(fruits.reverse())

// 9
console.log("EJERCICIOS ARRAYS # -------9------")
console.log(numbers.reverse())

// 10
console.log("EJERCICIOS ARRAYS # -------10------")
function searchFruit(fruit) {
  console.log(fruits.includes(fruit))
}
searchFruit("Apple")

// 11
console.log("EJERCICIOS ARRAYS # -------11------")
console.log(fruits[0])

// 12 Imprime en la consola el último elemento del array numeros.
console.log("EJERCICIOS ARRAYS # -------12------")
console.log(numbers.length)

// 13 Utiliza el método forEach para imprimir cada fruta pero convertida a array.
console.log("EJERCICIOS ARRAYS # -------13------")
fruits.forEach(fruit => {
  console.log(fruit)
});

// 14 Utiliza un bucle for of para imprimir cada número del array numeros en la consola.
console.log("EJERCICIOS ARRAYS # -------14------")
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i])

}

// 15 Crea un nuevo array llamado duplicados que contenga el doble de cada número en el array numeros utilizando el método map.
console.log("EJERCICIOS ARRAYS # -------15------")
let duplicados = numbers.map(number => {
  console.log(number * 2)
})

// 16 Crea dos arrays llamados array1 y array2, cada uno con al menos 3 números
console.log("EJERCICIOS ARRAYS # -------16------")
let array1 = [2, 4, 6]
let array2 = [1, 3, 5]

// 17 Calcula la suma de los elementos de array1 y array2 por separado y muestra los resultados en la consola.
console.log("EJERCICIOS ARRAYS # -------17------")
console.log(array1[0] + array1[1] + array1[2])
let resultadoArray2 = 0;
for (let i = 0; i < array2.length; i++) {
  resultadoArray2 += array2[i]
}
console.log(resultadoArray2)

// 18.  Crea una función llamada buscarNumero que tome como argumentos un número y un array de números, y devuelva true si el número está en el array, y false en caso contrario
console.log("EJERCICIOS ARRAYS # -------18------")
function buscarNumero(arrayN, n) {
  console.log(arrayN.includes(n))
}
buscarNumero(numbers, 3)

// 19. Crea un array llamado edades que contenga al menos 5 números (edades).
console.log("EJERCICIOS ARRAYS # -------19------")
let ages = [22, 18, 33, 9]

// 20.  Filtra el array edades para obtener un nuevo array llamado mayoresDeEdad que contenga solo las edades mayores o iguales a 18.
console.log("EJERCICIOS ARRAYS # -------20------")
let realMayores = ages.filter(age => {
  let mayores = 0;
  if (age > 18) {
    mayores = age
    console.log(mayores)
    return mayores
  }
})
console.log(realMayores)

// 21.  Crea un array llamado precios que contenga al menos 3 números (precios de productos)
console.log("EJERCICIOS ARRAYS # -------21------")
let precios = [800.000, 500.000, 3000000]
console.log(precios)

// 22
console.log("EJERCICIOS ARRAYS # -------22------")
let preciosConIVA = precios.map(price => {
  let newPrice = price * (price * 21 / 100)
  return newPrice
})
console.log(preciosConIVA);

// 23. Crea un array llamado duplicados que contenga algunos números duplicados.
console.log("EJERCICIOS ARRAYS # -------23------")
let dupli = [2, 2, 4, 3, 5, 6, 4, 3, 5, 7]
console.log(dupli)

// 24. Elimina los elementos duplicados del array duplicados y muestra el nuevo array sin duplicados en la consola
console.log("EJERCICIOS ARRAYS # -------24------")
let noDupli = []
for (let i = 0; i < dupli.length; i++) {
  if (noDupli.includes(dupli[i]) !== true) {
    noDupli.push(dupli[i])
  }
}
console.log(noDupli)
console.log("forma sin metodos");

let numerosDuplicados = [2, 2, 4,3, 5, 6,3,4, 7];
let sinDuplicados = [];


for (let i = 0; i < numerosDuplicados.length; i++) {
  let duplicado = false;
  for (let j = 0; j < sinDuplicados.length; j++) {
      if (numerosDuplicados[i] === sinDuplicados[j]) {
          duplicado = true;
          break;
      }
  }
  if (!duplicado) {
      sinDuplicados.push(numerosDuplicados[i]);
  }
}
console.log(sinDuplicados)



