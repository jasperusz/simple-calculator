let activeButton = 'clear';
let initialValue = 0;
let buttonPressed = '0';
let consoleAcumulator = '';
let consoleText = document.getElementById('consoleText');
const getNumberButtons = document.getElementsByClassName('numberButtons');
const maxNumbers = 9;


// Function to get the numbers pressed //
function getButtonNumber(buttonClick) {
    buttonPressed = buttonClick;
    consoleAcumulator += buttonPressed; // concat the buttons pressed into consoleAcumulator
    consoleText.textContent = `${consoleAcumulator}`;
    if (consoleAcumulator.length == maxNumbers) {
        for (let buttons of getNumberButtons) {
            buttons.disabled = true;
        }
    }
};

// Function to Clear the Calculator when the C button is pressed //
function clearCalculator(buttonClick) {
    if (buttonClick === 'clear') {
        initialValue = 0;
        consoleAcumulator = '';
        buttonPressed = '0';
        document.getElementById('consoleText').textContent = '0';
        for (let buttons of getNumberButtons) {
            buttons.disabled = false;
        };
    };
};

// Function to get active operator and acumulate the first numbers //
function getActiveOperator(buttonClick) {
    initialValue = parseInt(consoleAcumulator);
    if (activeButton !== 'clear') {
        operate(buttonClick);
        initialValue = parseInt(consoleAcumulator);
        consoleText.textContent = `${consoleAcumulator}`;
        consoleAcumulator = '';
        activeButton = buttonClick;
    };
    consoleText.textContent = buttonClick;
    consoleAcumulator = '';
    activeButton = buttonClick;
};


// Operate function which get the activebutton and activate within pressing result button //
function operate(buttonClick) {
    buttonPressed = '=';
    if (activeButton === '+') {
        consoleAcumulator = initialValue + parseInt(consoleAcumulator);
        } else if (activeButton === '-') {
        consoleAcumulator = initialValue - parseInt(consoleAcumulator);
        } else if (activeButton === '*') {
        consoleAcumulator = initialValue * parseInt(consoleAcumulator);
        } else if (activeButton === '/') {
            if (parseInt(consoleAcumulator) === 0) {
                consoleAcumulator = initialValue;
            } else {
            consoleAcumulator = initialValue / parseInt(consoleAcumulator);
            };
        };
        // It only shows the result when resultButton is pressed
        if (buttonClick === '=') {
            consoleText.textContent = `${consoleAcumulator}`
        };  
    };

