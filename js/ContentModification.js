console.log("Content Modification");
// 01
const heading = document.getElementById("heading");
console.log(heading.textContent);
heading.textContent = " New Heading";

// 02
const card = document.querySelector(".card");
// console.log(card.innerHTML);
card.innerHTML = "<h3>Hello World</h3> <p>this is card </p>";

console.log(card.innerText);
card.innerText = "Hello World";

// 03
const input = document.querySelector('input[type ="text"]');
console.log(input);
input.value = "Hello World";
