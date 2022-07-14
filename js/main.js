'use strict'
const numberInput = document.querySelector('.js-number');
const button = document.querySelector('.js-bunton');
const clueText = document.querySelector('.js-clue');
const countText = document.querySelector('.js-count');
const winText = document.querySelector('.js-win');
const form = document.querySelector('.js-form');
const resetButton = document.querySelector('.js-reset');

const clueInitialText = clueText.textContent;


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
        printTextInHTML(winText, `¡¡¡Has ganado, el número era ${secretNumber}!!!`);
        printInClueText('¿Quieres intentarlo otra vez?')
    } 
    else if (numberValue > secretNumber) {
        printInClueText(`El número ${numberInput.value} es demasiado alto`);
    } 
    else if (numberValue < secretNumber) {
        printInClueText(`El número ${numberInput.value} es demasiado bajo`);
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

function resetNumber() {
    resetCounter();
    secretNumber = getRandomNumber(100);
}

function resetInput() {
    numberInput.value = ''
}

function resetClueText(){
    printInClueText(clueInitialText);
}

function resetWinText() {
    printTextInHTML(winText, '');

}

button.addEventListener('click', (ev) => {
    ev.preventDefault;
    const numberValue = (numberInput.value!==''? Number(numberInput.value) : Number.NaN);
    if (isValidNumber(numberValue)){
        checkNumber(numberValue);
        addToCounter();
        printCounter();
        resetInput();

    } else {
        printInClueText('Error. Debes introducir sólo números entre 0 y 100.')
    }
    
});

function resetGame() {
    resetNumber();
    resetInput();
    resetClueText();
    resetWinText();
}

resetButton.addEventListener("click", (ev) => {
    ev.preventDefault;
    resetGame()
} )

form.addEventListener("click", function(event){
    event.preventDefault()
  });

