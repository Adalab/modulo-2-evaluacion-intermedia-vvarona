'use strict'
const numberInput = document.querySelector('.js-number');
const button = document.querySelector('.js-bunton');
const clueText = document.querySelector('.js-clue');
const countText = document.querySelector('.js-count');


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
};

const secretNumber = getRandomNumber(100);
console.log(secretNumber);

function tryCounter(count) {
    let newCount = count += 1;
    count = newCount;
    return count;
}

button.addEventListener('click', (ev) => {
    ev.preventDefault;
    console.log(tryCounter(0));
    console.log('Funciona');
});