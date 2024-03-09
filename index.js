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
    const display = document.querySelector('.display');
    let displayEmpty = true;
    let num1 = '';
    let operator = '';
    let num2 = '';

    function displayScreen (e) {
        const buttonValue = e.target.textContent;
        if (operator === '') {
            if (displayEmpty) {
                display.textContent = buttonValue;
                num1 = buttonValue;
                displayEmpty = false;
            } else {
                display.textContent += buttonValue;
                num1 += buttonValue;
            }
        } else {
            if (display.textContent === '') {
                display.textContent = buttonValue;
                num2 = buttonValue;
            } else {
                display.textContent += buttonValue;
                num2 += buttonValue;
            }
        };
    };

    // Updates display.textContent with only numbers by calling displayScreen function.
    let numBtns = document.querySelectorAll('#num');
    numBtns.forEach((button) => {
        button.addEventListener('click', displayScreen);
    });

    // Function to handle operator button click
    function operatorClicked(op) {
        operator = op;
        display.textContent = '';
    }
    const operatorButtons = document.querySelectorAll('#operator');
    operatorButtons.forEach(button => {
        button.addEventListener('click', function() {
            operatorClicked(button.dataset.operator);
        });
    });
        
});