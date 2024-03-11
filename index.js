document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector('.display');
    let displayEmpty = true;
    let num1 = '';
    let operator = '';
    let num2 = '';
    let equalPressed = false;
    let isFloat = false;

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
            alert('Error: Division by zero');
        }
        return +(Math.round((num1 / num2) + "e+6") + "e-6");
    }

    // Handles the display screen of the calculator
    function displayScreen(e) {
        const buttonValue = e.target.textContent;
        if (equalPressed) {
            display.textContent = '';
            num1 = '';
            operator = '';
            num2 = '';
            equalPressed = false;
        }
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

    // Handles when an operator is clicked
    function operatorClicked(op) {
        if (operator !== '') {
            // If there's already an operator, perform the calculation
            const result = operate(num1, num2, operator);
            // Display the result
            display.textContent = result;
            // Store the result as num1 for future calculations
            num1 = result.toString();
            // Reset num2
            num2 = '';
        }
        // Set the operator
        operator = op;
        // Display the operation
        display.textContent = num1 + ' ' + operator + ' ';
        // Reset displayEmpty
        displayEmpty = true;
        isFloat = false; // Reset isFloat
    }
    
    
    const operatorButtons = document.querySelectorAll('#operator');
    operatorButtons.forEach(button => {
        button.addEventListener('click', function() {
            operatorClicked(button.dataset.operator);
        });
    });

    // Handles when equal is pressed
    const equal = document.querySelector('#equal');
    equal.addEventListener('click', function() {
        if (num2 != '' && operator != '') {
            const result = operate(num1, num2, operator);
            display.textContent = result;
            num1 = result.toString(); // Set num1 to running total for future calculations
            num2 = ''; // Reset num2
            operator = ''; // Reset operator
            displayEmpty = true; // Reset displayEmpty
            equalPressed = false; // Reset equalPressed
            isFloat = false; // Reset isFloat
        };
    });


    // AC button to clear display and all values.
    const clear = document.querySelector('#clear');
    clear.addEventListener('click', () => {
        display.textContent = '';
        num1 = '';
        num2 = '';
        operator = '';
        displayEmpty = true;
        equalPressed = false;
    });

    // Deletes char one at a time
    const del = document.querySelector('#delete');
    del.addEventListener('click', () => {
        const currentDisplay = display.textContent;
        const lastChar = currentDisplay.slice(-1);

        if (lastChar === ' ') {
            operator = '';
        } else if (operator === '') {
            num1 = num1.slice(0, -1);
        } else {
            num2 = num2.slice(0, -1);
        }

        display.textContent = currentDisplay.slice(0, -1);
    })
    
    // Allows user to use a '.' for a floating point number
    const decimal = document.querySelector('#decimal');
    decimal.addEventListener('click', () => {
        if (!isFloat) {
            if (num1 != '' && operator === '' && num2 === '') {
                display.textContent += '.';
                num1 += '.';
                isFloat = true;
            } else if (operator !== '') {
                display.textContent += '.';
                num2 += '.';
                isFloat = true;
            }
        };
    });
});
