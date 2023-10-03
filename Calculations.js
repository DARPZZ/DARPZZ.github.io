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
            result = Math.round(result * 100) / 100; // Round to 2 decimal places
            display.value = result;
        }
