
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorRef = document.querySelector(".change-color");
const spanColorRef = document.querySelector(".color")

changeColorRef.addEventListener("click", onChangeColorClick);

function onChangeColorClick() {

  document.body.style.backgroundColor = getRandomHexColor();
  spanColorRef.textContent = document.body.style.backgroundColor;

};

