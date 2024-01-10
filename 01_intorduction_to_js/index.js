// Hello javascript

// 1. Variables
var john = "John"; // old way
let name = "John"; // new way
const pi = 3.14; // new way

// 2. Data types
// String
let instructor = "Tobi";
// Number
let age = 20;
// Boolean
let isMale = true; // examples of boolean is true or false
// Object
let person = {
  name: "Tobi",
  age: 20,
  isMale: true,
};
// Array
let fruits = ["Apple", "Orange", "Banana"];

// Null
// - Undefined
// - Symbol

// 3. Operators
// - Arithmetic Operators ( +, -, *, /, %, ** )
// - Assignment Operators ( =, +=, -=, *=, /=, %=, **= )
// - Comparison Operators ( ==, ===, !=, !==, >, <, >=, <= )
// - Logical Operators ( &&, ||, ! )
// - Bitwise Operators ( &, |, ^, ~, <<, >>, >>> )

// 4. Conditionals
// - if
if (1 > 2) {
  console.log("1 is greater than 2");
}
// - if else
if (1 > 2) {
  console.log("1 is greater than 2");
} else {
  console.log("1 is not greater than 2");
}
// - if() else if () else
if (1 > 2) {
  console.log("1 is greater than 2");
} else if (1 < 2) {
  console.log("1 is less than 2");
} else {
  console.log("1 is equal to 2");
}
// - switch case
let day = 1;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}
// - ternary operator ? :
let myAge = 20;
let isAdult = myAge > 17 ? true : false;

// 5. Loops
// - for
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// - while
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
// - do while
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 10);

// - for in => ES6 for Objects
// - for of => ES6 for Arrays

// 6. Functions
// - function declaration
function sum(a, b) {
  return a + b;
}
// - function expression
const sum = function (a, b) {
  return a + b;
};
// - arrow function => ES6
const sum = (a, b) => {
  return a + b;
};
// sum(1, 2); // 3

// 7. Objects
// - Object literal
let person1 = {
  name: "Tobi",
  age: 20,
  isMale: true,
};
// - Constructor function
function Person(name, age, isMale) {
  this.name = name;
  this.age = age;
  this.isMale = isMale;
}
let person2 = new Person("Tobi", 20, true);
// - Class => ES6
class Person {
  constructor(name, age, isMale, twitter) {
    this.name = name;
    this.age = age;
    this.isMale = isMale;
    this.twitterHandle = twitter;
  }

  sayHello() {
    console.log("Hello, my name is " + this.name);
  }
}
let person3 = new Person("Tobi", 20, true, "@eltobiloba");
person3.sayHello(); // Hello, my name is Tobi

let marcus = new Person("Marcus", 20, true, "@eltobiloba");
marcus.sayHello(); // Hello, my name is Marcus

// 8. Arrays
// - Array literal
let fruits1 = ["Apple", "Orange", "Banana"];
let things1 = ["Apple", 1, true, "Banana", { name: "Tobi" }];
// - Constructor function
let fruits2 = new Array("Apple", "Orange", "Banana");
// - Array methods
// - push()
fruits1.push("Mango"); // ["Apple", "Orange", "Banana", "Mango"]
// - pop()
fruits1.pop(); // ["Apple", "Orange", "Banana"]
// - shift()
fruits1.shift(); // ["Orange", "Banana"]
// - unshift()
fruits1.unshift("Mango"); // ["Mango", "Orange", "Banana"]
// - splice()
fruits1.splice(1, 1); // ["Mango", "Banana"]
// - slice()
let fruits3 = fruits1.slice(1, 2); // ["Orange"]
// - concat()
let fruits4 = fruits1.concat(fruits2); // ["Mango", "Orange", "Banana", "Apple", "Orange", "Banana"]
// - join()
let fruits5 = fruits1.join(", "); // "Mango, Orange, Banana"
// - sort()
let fruits6 = fruits1.sort(); // ["Banana", "Mango", "Orange"]
// - reverse()
let fruits7 = fruits6.reverse(); // ["Orange", "Mango", "Banana"]
