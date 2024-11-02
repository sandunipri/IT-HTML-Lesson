console.log("OOP JS loaded");
class vehicle {
  constructor(name, model, color) {
    this.name = name;
    this.model = model;
    this.color = color;
  }
  printDetails() {
    // console.log(
    //   `Name: ${this.name}, Model: ${this.model}, Color: ${this.color}`
    // );
    return `Name: ${this.name}, Model: ${this.model}, Color: ${this.color}`;
  }
}

let vehicle1 = new vehicle("Toyota", "MUSTANG", "Red");
console.log(vehicle1.printDetails()); 

class Car extends vehicle{
 constructor(name, model, color, year){
     super(name, model, color);
     this.year = year;
 }
 printDetails(){
    return `Name: ${this.name}, Model: ${this.model}, Color: ${this.color}, Year: ${this.year}`;
};
}

let car = new Car("Toyota", "MUSTANG", "Red", 2020);
console.log(car.printDetails());





