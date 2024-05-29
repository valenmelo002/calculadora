let history = document.getElementById('history');
let result = document.getElementById('result');

function appendToDisplay(value) {
    result.textContent += value;
}

function clearDisplay() {
    result.textContent = '';
    history.textContent = '';
}


function calculateResult() {
    try {
        let calculation = result.textContent;
        let calculatedResult = eval(calculation);
        history.innerHTML += `${calculation} = ${calculatedResult}<br>`;
        result.textContent = calculatedResult;
    } catch (error) {
        result.textContent = 'Error';
    }
}