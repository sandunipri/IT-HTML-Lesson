console.log("EventListerner Types");

const box = document.querySelector(".box");

//single click event
box.addEventListener("click", function () {
  console.log("you click the box !");
});

//double click event
box.addEventListener("dblclick", function () {
  console.log("you double click the box !");
});

//mouse down event
box.addEventListener("mousedown", function () {
  console.log("mouse pressed !");
});

//mouse up event
box.addEventListener("mouseup", function () {
  console.log("mouse released!");
});

//mouse move event
box.addEventListener("mousemove", function () {
  console.log("mouse moved!");
});

//mouse over event
box.addEventListener("mouseover", function () {
  console.log("mouse over!");
});

//mouse out event
box.addEventListener("mouseout", function () {
  console.log("mouse out!");
});
