console.log("prototype JS loaded");
function person (firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;

}

person.prototype.age = 23;
person.prototype.sayHello = function(){
    console.log("hello");
}
// console.log(person);

let person1 = new person("sanduni","priyadarshani");
console.log(person1);
console.log(person1.age);
console.log(person1.sayHello());