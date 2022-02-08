
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorRef = document.querySelector(".change-color");
const spanColorRef = document.querySelector(".color")

changeColorRef.addEventListener("click", onChangeColorClick);

function onChangeColorClick(event) {

  document.body.style.backgroundColor = getRandomHexColor();
  spanColorRef.textContent = getRandomHexColor();

};

