console.log("Arrays JS loaded");

//used to store multiple values in a single variable

//using array literal
let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log("========================================================");

//using array constructor
let cars = new Array("Volvo", "BMW", "Ford", "Mazda");
console.log(cars);

console.log("========================================================");

//
let myarray = [
  "Sanduni",
  "Priyadarshani",
  23,
  "London",
  { street: "123 Main St", city: "New York", state: "NY" },
];
console.log(myarray);
console.log(typeof myarray);

console.log("========================================================");

//accessing array elements
console.log(myarray[0]);
console.log(myarray[1]);
console.log(myarray[2]);
console.log(myarray[3]);
console.log(myarray[4]);

console.log("========================================================");

//length of an array
console.log(myarray.length); //returns the number of elements in an array

console.log("========================================================");

//modifying array elements
cars[0] = "Toyota";
console.log(cars);

console.log("========================================================");

//building an array function
//1 push()
cars.push("Honda");
console.log(cars);

// let customers = [
//   { itemID: 1, name: "item1" },
//   { itemID: 2, name: "item2" },
//   { itemID: 3, name: "item3" },
// ];
// let newItem = { itemID: 4, name: "item4" };
// customers.push(newItem);
// console.log(customers);

 console.log("========================================================");

//2 pop()-->removes last element
cars.pop();
console.log(cars);

console.log("========================================================");

//3 shift()-->removes first element
cars.shift();
console.log(cars);

console.log("========================================================");

//4 unshift()-->adds element to the beginning
cars.unshift("Nissan");
console.log(cars);

console.log("========================================================");

//5 splice() -->adds or removes elements
cars.splice(1, 1); //Start index, delete count 
console.log(cars);

cars.splice(1, 0, "Mercedes", "Audi", "BMW");
console.log(cars);

console.log("========================================================");

//6 slice()-->returns a new array
console.log(cars);
let newCars = cars.slice(0, 6);//Start index, end index
console.log(newCars);

//7 concat()
let newcars = cars.concat(newCars);
console.log(newcars);

//8 forEach()
cars.forEach(function (item) {
  console.log(item);
});

console.log("========================================================");

//9 map()
let UppercaseCars = cars.map(cars => cars.toUpperCase());
console.log(UppercaseCars); 

console.log("========================================================");

//10 filter()
let numbers = [10, 20, 30, 40, 50];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

console.log("========================================================");

//11 find()
let find = numbers.find(num => num % 2 === 0);
console.log(find);

