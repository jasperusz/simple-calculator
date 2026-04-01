let activeButton = 'clear';
let initialValue = 0;
let numberPressed = '0';
let consoleAcumulator = '';
let consoleText = document.getElementById('consoleText');
const getNumberButtons = document.getElementsByClassName('numberButtons');
const maxNumbers = 9;

function getButtonNumber(buttonClick) {
    numberPressed = buttonClick;
    consoleAcumulator += numberPressed;
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
        consoleAcumulator = '';
        numberPressed = '0';
        document.getElementById('consoleText').textContent = '0';
        for (let buttons of getNumberButtons) {
            buttons.disabled = false;
        };
    };
};
