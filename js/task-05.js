
const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onInputRefChange);

function onInputRefChange(event) {
    outputRef.textContent = event.currentTarget.value === "" ? "Anonymous" : event.currentTarget.value;
}