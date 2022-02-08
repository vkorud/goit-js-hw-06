
const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector("#text");

console.dir(textRef);

inputRef.addEventListener("input", onInputRefChange);

function onInputRefChange(event) {
    textRef.style.fontSize = inputRef.value + "px";
};

