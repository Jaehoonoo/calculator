// Operations
function add (num1, num2) {
    return num1 + num2;
};

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}

// Operates expression
function operate (num1, num2, operator) {
    return (operator === '+') ? add(num1, num2) :
           (operator === '-') ? subtract(num1, num2) :
           (operator === '*') ? multiply(num1, num2) :
           (operator === '/') ? divide(num1, num2) :
           'Invalid operator ';
};

const num1 = 3;
const num2 = 5;
const operator = '+';
