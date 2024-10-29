console.log("Function Hoisting JS loaded");

test();
function test() {
  console.log("test function");
}
test();
console.log("========================================================");

sayHI();

var sayHI = function () {
  console.log("Hello World");
};
sayHI();
console.log("========================================================");

sayHI2();
let sayHI2 = function () {
  console.log("Hello World");
};
sayHI2();