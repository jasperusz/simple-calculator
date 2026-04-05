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
        activeButton = 'clear';
        document.getElementById('consoleText').textContent = 'CLEAR';
        for (let buttons of getNumberButtons) {
            buttons.disabled = false;
        };
    };
};

// Function to get active operator and acumulate the first numbers //
function getActiveOperator(buttonClick) {
    if (consoleAcumulator === '') {
        return;
    };
    if (activeButton !== 'clear') {
        operate(buttonClick); 
    };
    initialValue = parseInt(consoleAcumulator);
    consoleText.textContent = buttonClick;
    consoleAcumulator = '';
    activeButton = buttonClick;
};


// Operate function which get the activebutton and activate within pressing result button //
function operate(buttonClick) {
    buttonPressed = '=';
            // It only shows the result when resultButton is pressed
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
        if (buttonClick === '=' && consoleAcumulator !== '') {
        consoleText.textContent = `${consoleAcumulator}`
        } else if (buttonClick === '=' && consoleAcumulator === '') {
            consoleAcumulator = initialValue;
            consoleText.textContent = `${consoleAcumulator}` 
        };
        if (buttonClick === '=' && Number.isNaN(consoleAcumulator) === true) {
            consoleAcumulator = 0;
            consoleText.textContent = `${consoleAcumulator}`
        };
    };

