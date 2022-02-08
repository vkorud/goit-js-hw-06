
const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onInputRefBlur);

function onInputRefBlur(event) {
    inputRef.classList.add('invalid');

    if (event.currentTarget.value.length == inputRef.dataset.length) {
        inputRef.classList.replace('invalid', 'valid');
    }    
}
