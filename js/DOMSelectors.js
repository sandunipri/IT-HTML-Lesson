console.log("DOM Selectors");

console.log(document);

// 1.Selects an element by ID
const heading = document.getElementById("heading");
console.log(heading);

// 2.Selects an element by class name
const paragraphs = document.getElementsByClassName("paragraph");
console.log(paragraphs);

// 3.Selects an element by tag name
const tags = document.getElementsByTagName("p")
console.log(tags);

// 4.Selects an element by query selector
const QuerySelectors =document.querySelector("#heading");
console.log(QuerySelectors);

const QuerySelectors1 = document.querySelector(".paragraph");
console.log(QuerySelectors1);

const pr = document.querySelector(".container .box p");
console.log(pr);


//5.Selects an element by ALL query selector
const QuerySelectors2 =  document.querySelectorAll(".paragraph");
console.log(QuerySelectors2);