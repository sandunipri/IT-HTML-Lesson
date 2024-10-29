console.log("Data types JS loaded");

//1.primitive data types

//1.1 number
let num1 = 10;
console.log(num1);
console.log(typeof num1);

let num2 = 10.5;
console.log(num2);
console.log(typeof num2);

console.log("========================================================");

//1.2 string
let name = "Sanduni Priyadarshani";
console.log(name);
console.log(typeof name);

console.log("========================================================");

//1.3 boolean
let boolean = true;
console.log(boolean);
console.log(typeof boolean);

let customer = false;
console.log(customer);
console.log(typeof customer);

console.log("========================================================");

//1.4 undefined ++> Represent the unassignment values
let x;
console.log(x);
console.log(typeof x);

console.log("========================================================");

//1.5 null
let y = null;
console.log(y);
console.log(typeof y);

console.log("========================================================");

//1.6 symbol
let sym = Symbol();
console.log(sym);
console.log(typeof sym);

console.log("========================================================");

//2. reference data types

//2.1 object
let person = {
  firstName: "Sanduni",
  lastName: "Priyadarshani",
  age: 23,
};

console.log(person);
console.log(typeof person);

console.log("========================================================");

//2.2 array
let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(typeof arr);
console.log(Array.isArray(arr));
console.log(Array.isArray(person));

console.log("========================================================");

//2.3 function
function greet () {
    console.log("hello");
}
greet();
console.log(typeof greet);

console.log("========================================================");

//2.4 date
let date = new Date();
console.log(date);
console.log(typeof date);

console.log("========================================================");



