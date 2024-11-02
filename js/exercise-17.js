let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");

let boxSet = [box1, box2, box3, box4, box5];
let count = 0;

let index = 0;

function changeColor(){
  boxSet.forEach((box) => {
    box.style.backgroundColor ="gray";
  });
  
  // boxSet[index++].style.backgroundColor = "yellow";

  // if (index == boxSet.length) {
  //   index = 0;
  // } 
  // boxSet[index].style.backgroundColor = "red";

  boxSet[index].style.backgroundColor = "red";
  let previousIndex = (index - 1 + boxSet.length) % boxSet.length;
  boxSet[previousIndex].style.backgroundColor = "yellow";
  index = (index+1) % boxSet.length;

}

let color = setInterval(() => {
  changeColor();
}, 1000);
