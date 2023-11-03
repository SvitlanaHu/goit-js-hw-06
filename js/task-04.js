const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const number = document.querySelector('#value');

let totalNumber = 0;

buttonDecrement.addEventListener('click', () => {
    totalNumber -= 1;
    number.textContent = totalNumber;
});

buttonIncrement.addEventListener('click', () => {
    totalNumber += 1;
    number.textContent = totalNumber;
});