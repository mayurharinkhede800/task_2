// script.js
let currentInput = '';
let operation = '';
let previousInput = '';

const display = document.getElementById('display');

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}


function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = '';
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentInput || previousInput || '0';
}

function calculate() {
    if (currentInput === '' || previousInput === '' || operation === '') return;
    
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    let result;
    switch (operation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            if (curr === 0) {
                result = 'Error';
            } else {
                result = prev / curr;
            }
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operation = '';
    previousInput = '';
    updateDisplay();
}
