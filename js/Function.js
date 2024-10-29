console.log("Function JS loaded");

//1 function declaration
function greet(firstName) {
  if (typeof firstName === "undefined") {
    console.log("hello Wrold");
  } else {
    console.log(`hello ${firstName}`);
  }
}
greet("sanduni");
console.log("========================================================");

//2 function expression
let greet2 = function (firstName) {//anonymous function
  console.log(`hello ${firstName}`);
};
greet2("sanduni");

console.log("========================================================");

//3 arrow function
let greet3 = (firstName) => {
  console.log(`hello ${firstName}`);
};
greet3("sanduni");

console.log("========================================================");

//4 default parameter
let greet4 = (firstName = "") => {
  console.log(`hello ${firstName}`);
};
greet4("sanduni");
greet4();
console.log("========================================================");

//5 rest parameter
let greet5 = (firstName, ...name) => {
  console.log(`hello ${firstName}`);
  console.log(name);
};
greet5("sanduni", "priyadarshani", "pubudu");

console.log("========================================================");
