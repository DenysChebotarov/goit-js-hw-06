const value = document.querySelector('#value');
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
let counterValue = 0;


function setDecrement() {
    value.textContent = counterValue -= 1;
}
function setIncrement() {
    value.textContent = counterValue += 1;
}

buttonDecrement.addEventListener('click', setDecrement);
buttonIncrement.addEventListener('click', setIncrement);