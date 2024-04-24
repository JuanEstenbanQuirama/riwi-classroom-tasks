// 1
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
for (let i = 0; i <= fruits.length; i++) {
  console.log(fruits[i]);
}

// 3
fruits.forEach((fruit) => {
  console.log(fruit.toLowerCase());
});

// 4
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 5
let i = 1
while (i<=10) {
    console.log(i)
    i+=1
}

// 6
fruits.push("watermelon")
console.log(fruits)

// 7
delete numbers[1]
// numbers.pop(1)
console.log(numbers)