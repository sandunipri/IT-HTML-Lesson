console.log("Dynamic Typing JS loaded");

let x= 10;

console.log(typeof x);

x = "Hello wrold";
console.log(typeof x);  

x = true;
console.log(typeof x);

x = null;
console.log(typeof x);

x = undefined;
console.log(typeof x);

x = {
    name: "Sanduni",
    age: 23
};
console.log(typeof x);


x = [1,2,3,4,5];
console.log(typeof x);
console.log(Array.isArray(x));