
let counterValue = 0;

const onIncrementBtnClick = event => {
    value.textContent = counterValue += 1;
}
const onDecrementBtnClick = event => {
    value.textContent = counterValue -= 1;
}

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector('#value');

incrementBtn.addEventListener('click', onIncrementBtnClick);
decrementBtn.addEventListener('click', onDecrementBtnClick);
