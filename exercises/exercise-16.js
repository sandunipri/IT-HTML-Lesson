const number = setInterval(() => {
    for (let index = 1; index < 11; index++) {
        console.log(index);
        clearInterval(number);  
    }
}, 1000);

let counter=0;
const num = setInterval(() => {
    counter++;
    console.log("NUMBER :" + counter);
   
}, 1000);
setTimeout(() => {
    clearInterval(num);
}, 10500);