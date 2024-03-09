document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector('.display');
    let displayEmpty = true;
    let num1 = '';
    let operator = '';
    let num2 = '';

    function operate(num1, num2, operator) {
        switch (operator) {
            case '+':
                return add(Number(num1), Number(num2));
            case '-':
                return subtract(Number(num1), Number(num2));
            case '/':
                return divide(Number(num1), Number(num2));
            case '*':
                return multiply(Number(num1), Number(num2));
        }
    }

    function add(num1, num2) {
        return num1 + num2;
    }

    function subtract(num1, num2) {
        return num1 - num2;
    }

    function multiply(num1, num2) {
        return num1 * num2;
    }

    function divide(num1, num2) {
        if (num2 === 0) {
            return 'Error: Division by zero';
        }
        return num1 / num2;
    }

    function displayScreen(e) {
        const buttonValue = e.target.textContent;
        if (operator === '') {
            if (displayEmpty) {
                display.textContent = buttonValue;
                num1 += buttonValue;
                displayEmpty = false;
            } else {
                display.textContent += buttonValue;
                num1 += buttonValue;
            }
        } else {
            if (display.textContent === '') {
                display.textContent = buttonValue;
                num2 += buttonValue;
            } else {
                display.textContent += buttonValue;
                num2 += buttonValue;
            }
        }
    }

    const numBtns = document.querySelectorAll('#num');
    numBtns.forEach((button) => {
        button.addEventListener('click', displayScreen);
    });

    function operatorClicked(op) {
        operator = op;
        display.textContent = '';
        displayEmpty = true;
    }

    const operatorButtons = document.querySelectorAll('#operator');
    operatorButtons.forEach(button => {
        button.addEventListener('click', function() {
            operatorClicked(button.dataset.operator);
        });
    });

    const equal = document.querySelector('#equal');
    equal.addEventListener('click', function() {
        const result = operate(num1, num2, operator);
        display.textContent = result;
        num1 = ''; // Store result as num1 for potential further calculations
        num2 = ''; // Reset num2
        totalRunning = result.toString();
        operator = ''; // Reset operator
        displayEmpty = true; // Reset displayEmpty
    });
});
