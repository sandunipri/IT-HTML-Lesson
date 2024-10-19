console.log("Content Element Handling");

const div = document.createElement("div");

div.id = "alerts";
div.className = "alert alert-success";
div.textContent = "you have succesfullu registered";
div.style.color = "white";
div.style.backgroundColor = "green";
div.style.padding = "10px";
div.style.border = "1px solid black";
div.style.borderRadius = "5px";
console.log(div);

const card = document.querySelector(".card");

// card.append(div);
card.appendChild(div);
// card.insertBefore(div, card.firstChild);
// card.removeChild(div);

const Alert = document.createElement("new-div");
Alert.id = "alerts";
Alert.className = "alert alert-success";
Alert.textContent = "ERROR";
Alert.style.color = "white";
Alert.style.backgroundColor = "red";
Alert.style.padding = "10px";
Alert.style.border = "1px solid black";
Alert.style.borderRadius = "5px";
console.log(Alert);

// card.removeChild(div);
// card.appendChild(Alert);

card.replaceChild(Alert, div);

const clonediv = Alert.cloneNode(true);
card.appendChild(clonediv);

console.log(card.hasChildNodes());

card.remove;
