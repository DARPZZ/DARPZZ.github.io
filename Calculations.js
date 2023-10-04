const display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendChar(char) {
    display.value += char;
}

function calculate() {
    let result = eval(display.value);
    result = Math.round(result * 100) / 100;
    display.value = result;
}


display.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();  
        calculate();
    }
});

