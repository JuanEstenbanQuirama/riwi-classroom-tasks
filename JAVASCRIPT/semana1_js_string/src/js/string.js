//1.
let num1 = 2
let num2 = 3
console.log(`1. La suma de ${num1} y ${num2} es`, num1 + num2)

// 2.
let simpleString1 = "Hola";
let simpleString2 = "mundo";
console.log(`2. longitud total de ${simpleString1} es:`, simpleString1.length, ` y longitud total de ${simpleString2} es:`, simpleString2.length)

// 3. 
let stringUsingString1 = String("JavaScript");
let stringUsingString2 = String("Ejercicios");
console.log(`3. ${stringUsingString1} y ${stringUsingString2} `)

// 4.
let stringUsingNewString1 = new String("Concatenar");
let stringUsingNewString2 = new String("Strings");
console.log(`4. ${stringUsingNewString1} y ${stringUsingNewString2}`)

// 5.
console.log(`5. la posición de "la" en ${simpleString1} es:`, simpleString1.search("la"))

// 6. 
console.log(`6. existe "ndo" en ${simpleString2}:`, simpleString2.includes("ndo"))

// 7.
console.log(`7. el resultado de usar el metodo .conact en ${simpleString1} y ${simpleString2} es:`, simpleString1.concat(simpleString2))

// 8. 
console.log(`8. el resultado de usar '+' para concatenar ${simpleString1} y ${simpleString2} es:`, simpleString1 + simpleString2)

// 9. 
console.log(`9. El resultado de usar template sring es: ${simpleString1} ${simpleString2}`)

// 10. 
let stringWithSpaces1 = " TrimStart"
let stringWithSpaces2 = "TrimEnd "
console.log(`10. usando .trimStar:`, stringWithSpaces1.trimStart(), ` y usando .trimEnd:`, stringWithSpaces2.trimEnd())

// 11. 
console.log(`11. usando el metodo .replace 'i' por 'o' `, simpleString1.replace("o", "i"))

// 12. 
console.log(`12. usando el megoodo .slice`, simpleString2.slice(0, 3))

// 13.  
console.log(`13. Usando el metodo .subtring`, simpleString2.substring(2))

// 14. 
console.log(`14. usando el metodo .repeat`, simpleString1.repeat(2))

// 15.
let simpleStringSplit = "Esto es una oración de ejemplo"
console.log(`15. Usando el metodo .split`, simpleStringSplit.split(" "))

// 16.  
console.log(`15. usando el metodo .toUpperCase`, simpleString2.toUpperCase())

// 17. 
console.log(`17. usando el metodo .toLowerCase`, simpleString1.toLowerCase())

// 18. 
let isBoolean = true;
console.log(`18. el valor true es un typo de dato:`, typeof (isBoolean))

// 19.  
let isArray = ['Colombia0', 'Chile', 'EE.UU', 'Mauritania', 'Senegal']
console.log(`19. usando el metodo .length, la longitud es de:`, isArray.length)

// 20.
let isObject = { serial: 12345, id: '02', objectName: "esTheBitan" }
console.log(`20. Mostrando priedad de un objeto:`, isObject.objectName)

// 21. 
let isNull = null
console.log(`21. el valor null es un typo de dato:`, typeof (isNull))

// 22.
let isUndefined;
console.log(`22. el valor undefined es un typo de dato:`, typeof (isUndefined))

// 23. 
let isNumberDecimal = 7.7
console.log(`23. el valor 7.7 es un typo de dato:`, typeof (isNumberDecimal))

// 24.
let isNumberNegative = -7
console.log(`24. el valor -7 es un typo de dato:`, typeof (isNumberDecimal))

// 25. 
let casa = "casa"
console.log(`25. Usando el metodo .indexOf`, casa.indexOf("a"))

// 26. 
let arrayJavascript = "Javascript"
console.log(`26. usando el metodo .includes: busando 'Script' en 'Javascript'`, arrayJavascript.includes("Script"))

// 27. 
let hola = "Hola"
let mundo = "Mundo"
console.log(`27. Usando el metodo .contact para los string 'Hola', 'Mundo', es: `, hola.concat(mundo))

// 28. 
console.log(`28. Usando el metodo '+' para los string 'Hola', 'Mundo', es: `, hola + mundo)

// 29. 
console.log(`29. Usando template string para los string 'Hola', 'Mundo', es: ${hola} ${mundo}`)

// 30. 
let cadenaConEspacios = "  Ejemplo con espacios  "
console.log(`30. Usando el metodo .tim Strar y end:`, cadenaConEspacios.trimStart().trimEnd())

// 31. 
let stringRepalce = "El cielo es azul"
console.log(`31. reemplazando 'azul' por 'rojo': `, stringRepalce.replace("azul", "rojo"))

// 32. 
let stringSlice = "programación"
console.log(`32. Usando el metodo .slice: `, stringSlice.slice(8))

// 33. 
let stringSubstring = "JavaScript"
console.log(`33. usando el metodo substring en 'JavaScript':`, stringSubstring.substring(2))

// 34.
let stringRepeat = "Hola"
console.log(`34. usando el metodo .repeat:`, stringRepeat.repeat(3))

// 35
let stringSplit = "Esto es una oracion de ejemplo"
console.log(`35. usando el metodo .split:`, stringSplit.split(" "))

// 36
console.log(`36. Usando el metodo .toUpperCase:`, stringSubstring.toUpperCase())

// 37
let stringToUpperCase = "EJEMPLO"
console.log(`37. Usando el metodo .toLowerCase:`, stringToUpperCase.toLowerCase())

// 38
let stringNumber = 7
console.log(`38. Usando el metodo typeOf:`, typeof (stringNumber))

// 39 
let isABoolean = false;
console.log(`39. el valor true es un typo de dato:`, typeof (isBoolean))

// 40
let arrayThings = ["reloj", "taza", "cargador", "llaves"]
console.log(`40. suando el metodo .length:`, arrayThings.length)

// 41
let objectThings = {
  reloj: 5,
  taza: "una",
  cargador: null,
  llaves: 3
}
console.log(`41. usando '.' para acceder al valor de un objeto`, objectThings.taza)

// 42
let stringNull = null
console.log(`42. el valor null es un typo de dato:`, typeof (stringNull))

// 43
let stringUndefined;
console.log(`43. el valor undefined es un typo de dato:`, typeof (stringUndefined))

// 44
let stringNumberDecimal = 8.7
console.log(`44. el valor 8.7 es un typo de dato:`, typeof (stringNumberDecimal))
