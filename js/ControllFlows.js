console.log("Controll Flows JS loaded");

//1. conditional statements
//2. if...else
let age = 20;

if (age >= 18) {
    console.log("You are Adult");
}else{
    console.log("You are not Adult");
}
console.log("========================================================");

//-if...else if...else

let marks = 70;
if (marks >= 90) {
    console.log("You got A+");
}else if(marks >= 80){
    console.log("You got A");
}else if(marks >= 70){
    console.log("You got B");
}else if(marks >= 60){
    console.log("You got C");
}else if(marks >= 50){
    console.log("You got D");
}else{
    console.log("You got F");
}

console.log("========================================================");

//3. switch

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

console.log("========================================================");

//4. ternary operator

let num = 10;

num > 5 ? console.log("Greater") : console.log("Lesser");

console.log("========================================================");

//5. loop

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log("========================================================");

//6. break and continue

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }   
    console.log(i);
}

console.log("========================================================");    

for (let i = 0; i < 10; i++) {  
    if (i === 5) {
        continue;
    }
    console.log(i);
}

console.log("========================================================");
//for -in loop

let person = {
    name: "Sanduni",
    age: 23
};  

for (let key in person) {
    console.log(key);
    console.log(person[key]);
}

console.log("========================================================");

//7. while loop

let i = 0;

while (i < 10) {    
    console.log(i);
    i++;
}

console.log("========================================================");

// for-of loop

let arr = [1, 2, 3, 4, 5];

for (let value of arr) {
    console.log(value);
}

console.log("========================================================");
//jump statement

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

console.log("========================================================");


