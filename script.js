let display = document.querySelector('.display');
let calculation = '';

function addToDisplay(value) {
  calculation += value;
  display.value = calculation;
}

function clearDisplay() {
  calculation = '';
  display.value = '';
}

function deleteLastCharacter() {
  calculation = calculation.slice(0, -1);
  display.value = calculation;
}
function calculateResult() {
    try {
      let result = eval(calculation);
      if (result === Infinity || result === -Infinity || isNaN(result)) {
        display.value = "Error";
      } else {
        calculation = result;
        display.value = result;
      }
    } catch (error) {
      display.value = "Error";
    }
  }

