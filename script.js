let activeButton = 'clear';
let initialValue = 0;
let buttonPressed = '0';
let consoleAcumulator = '';
let consoleText = document.getElementById('consoleText');
const getNumberButtons = document.getElementsByClassName('numberButtons');
const maxNumbers = 9;

function getButtonNumber(buttonClick) {
    buttonPressed = buttonClick;
    consoleAcumulator += buttonPressed;
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
    consoleText.textContent = buttonClick;
    consoleAcumulator = '';
    activeButton = buttonClick;
};