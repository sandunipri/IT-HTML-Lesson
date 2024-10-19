console.log("Event Handling");

const btn = document.getElementById("btnSave");
// btn.addEventListener("click", function () {
//   // console.log("Save Button Clicked");
// ;  alert("save button clicked");
// })

btn.addEventListener('click', handleClick);

function handleClick() {
  alert("save button clicked");
  abc();
}

btn.removeEventListener('click', handleClick);
