
const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector("#text");
textRef.style.fontSize = inputRef.value + "px";

console.dir(textRef);

inputRef.addEventListener("input", onInputRefChange);

function onInputRefChange(event) {
    textRef.style.fontSize = event.currentTarget.value + "px";
};

