console.log("Object JS loaded");

//Objects
let person = {
  firstName: "sanduni",
  lastName: "priyadarshani",
  age: 23,
  hobbies: ["sports", "music"],
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
  },
  getBirthYear: function () {
    return 2024 - this.age;
  },
};

console.log("PERSON :", person);
console.log(typeof person);

console.log("========================================================");
//accessing object properties
//1. dot notation

console.log("First Name : " + person.firstName);
console.log("Last Name : " + person.lastName);

console.log("========================================================");

console.log("city name :" + person.address.city);
console.log("city name :" + person.address.street);
console.log("city name :" + person.address.state);

console.log("========================================================");
console.log("Birth Year : " + person.getBirthYear());

console.log("========================================================");
console.log("Hobbies : " + person.hobbies[0] + "," + person.hobbies[1]);

//2. bracket notation

console.log("First Name : " + person["firstName"]);
console.log("Last Name : " + person["lastName"]);

console.log("========================================================");

console.log("city name :" + person["address"]["city"]);
console.log("city name :" + person["address"]["street"]);
console.log("city name :" + person["address"]["state"]);

console.log("========================================================");

console.log("Birth Year : " + person["getBirthYear"]());

console.log("========================================================");

console.log("Hobbies : " + person["hobbies"][0] + "," + person["hobbies"][1]);

//add phone number
person.number = "0764489984";
console.log("PERSON :", person);
console.log(typeof number);

person.firstName = "pubudu";
person.lastName = "sampath";
console.log("PERSON :", person);

delete person.number;
console.log("PERSON :", person);

let Car = {
  brand: "Ford",
  model: "Mustang",

  getDescription: function () {
    // return this.brand + "-" + this.model;
    return `${this.brand}-${this.model}`;
  },
};

// console.log(Car);
console.log(Car.getDescription());
console.log(typeof Car);

console.log("===================================================")

// function displayName(Student){
//     console.log(Student.firstName +"  "+Student.lastName);
// }
// let Student = { 
//     firstName : "sanduni",
//     lastName:"Priyadarshani"
// }
// displayName(Student);

// //loopin object properties
// for(let key in person){
//     console.log(key);
// }

console.log("===================================================")
//object descriptures
let {firstName,lastName,age,address,hobbies} = person;
console.log(firstName,lastName,age);
console.log(address);
console.log(hobbies);

console.log("=========///////////////////////////////////////===========")

// built in object functions 
//object.keys
console.log(Object.keys(person));
console.log("=====================================================");
//object.values
console.log(Object.values(person));
console.log("=====================================================");
//object.entries
console.log(Object.entries(person));
console.log("=====================================================");

//constructor function
function Student(firstName,lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
let student =new Student("Sanduni","Priyadarshani",23);
console.log(student);
console.log(typeof student);

//form ES6
class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName(){
        return `${this.firstName}- ${this.lastName}`;
    }
}
let person1 = new Person("Sanduni","Priyadarshani",23);
console.log(person1);
console.log(typeof person1);
console.log(person1.getFullName());