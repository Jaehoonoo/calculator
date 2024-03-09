document.addEventListener("DOMContentLoaded", () => {
    // Operations
    function add (num1, num2) {
        return num1 + num2;
    };

    function subtract (num1, num2) {
        return num1 - num2;
    };

    function multiply (num1, num2) {
        return num1 * num2;
    };

    function divide (num1, num2) {
        return num1 / num2;
    };

    // Operates expression
    function operate (num1, num2, operator) {
        return (operator === '+') ? add(num1, num2) :
               (operator === '-') ? subtract(num1, num2) :
               (operator === '*') ? multiply(num1, num2) :
               (operator === '/') ? divide(num1, num2) :
               'Invalid operator '; 
    };


    // Manipulates the display of the calculator based on user's click.
    let wasClicked = false;
    function displayScreen (e) {
        const buttonValue = e.target.textContent;

        const display = document.querySelector('.display');
        if (!wasClicked) {
            display.textContent = buttonValue;
            wasClicked = true;
        } else {
            display.textContent += buttonValue;
        }
    };

    let allButtons = document.querySelectorAll('button');
    allButtons.forEach((button) => {
        button.addEventListener('click', displayScreen);
    });


    const num1 = 3;
    const num2 = 5;
    const operator = '+';

});