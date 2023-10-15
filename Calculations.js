const display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendChar(char) {
    var display = document.getElementById('display');

    if (char === '√') {
        
        display.value = Math.sqrt(Number(display.value));
    } else if (char === 'X^2') {
        
        display.value = Math.pow(Number(display.value), 2);
    } else {
        display.value += char;
    }
}

function calculate() 
{
    let display = document.getElementById('display');
    let inputValue = display.value;

       let result = eval(inputValue);

        if (!isNaN(result)) {
            
            result = Math.round(result * 100) / 100;
            display.value = result;
        } else {
            display.value = 'Ugyldigt udtryk';
        }
}
display.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();  
        calculate();
    }
});
function goToAnotherPage() {
    window.location.href = 'newWorld.html';  // Replace with the actual path to the other HTML page
}
