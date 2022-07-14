'use strict'
const numberInput = document.querySelector('.js-number');
const button = document.querySelector('.js-bunton');
const clueText = document.querySelector('.js-clue');
const countText = document.querySelector('.js-count');
const winText = document.querySelector('.js-win');
const form = document.querySelector('.js-form');
const resetButton = document.querySelector('.js-reset');
const printClueText = clueText;

function printTextInHTML(element, text){
    element.innerHTML = text
};


function printInClueText(text){
    printTextInHTML(clueText, text);
};

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
};

let secretNumber = getRandomNumber(100);
console.log(secretNumber);

function checkNumber(numberValue){
    if (numberValue === secretNumber){
        printInClueText('Has ganado campeona!!!');
    } 
    else if (numberValue > secretNumber) {
        printInClueText('Demasiado alto');
    } 
    else if (numberValue < secretNumber) {
        printInClueText('Demasiado bajo');
    }
}

//printInClueText(comprobNumbr());

function isValidNumber(numberValue){

    const isANumber = !Number.isNaN(numberValue);
    const isWithinLimits = numberValue <= 100 && numberValue >= 0;

    return isANumber && isWithinLimits;
    
}

let count = 0;

function addToCounter(){
    ++count;
}

function printCounter() {
    printTextInHTML(countText, 'Número de intentos: ' + (count));
}

function resetCounter() {
    count = 0;
    printCounter();
}

function resetGame() {
    resetCounter();
    secretNumber = getRandomNumber(100);
}

function resetInput() {
    numberInput.value = ''
}

function resetClue() {
     const printClueText = clueText.textContent;
    printInClueText(pritnClueText);
}

button.addEventListener('click', (ev) => {
    ev.preventDefault;
    const numberValue = (numberInput.value!==''? Number(numberInput.value) : Number.NaN);
    if (isValidNumber(numberValue)){
        checkNumber(numberValue);
        addToCounter();
        printCounter();
    } else {
        printInClueText('Error. Debes introducir sólo números entre 0 y 100.')
    }
    
});



resetButton.addEventListener("click", (ev) => {
    ev.preventDefault;
    resetGame();
    resetInput();
    resetClue();
} )

form.addEventListener("click", function(event){
    event.preventDefault()
  });