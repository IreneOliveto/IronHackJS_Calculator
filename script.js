function button(value) {
    let calculatorScreen = document.getElementById("calculator-screen")
    calculatorScreen.innerHTML = calculatorScreen.innerHTML + value;
}

var operator
function operator(value) {
    operator = value
}

function calculate() {
    let calculatorScreen = document.getElementById("calculator-screen")
    let calculatorScreenValue = calculatorScreen.innerHTML

    if (calculatorScreenValue.includes("+")) {
        let values = calculatorScreenValue.split("+")
        let result = +values[0] + +values[1]
        calculatorScreen.innerHTML = result
    }

    if (calculatorScreenValue.includes("-")) {
        let values = calculatorScreenValue.split("-")
        let result = +values[0] - +values[1]
        calculatorScreen.innerHTML = result
    }

    if (calculatorScreenValue.includes("x")) {
        let values = calculatorScreenValue.split("x")
        let result = +values[0] * +values[1]
        calculatorScreen.innerHTML = result
    }

    if (calculatorScreenValue.includes("/")) {
        let values = calculatorScreenValue.split("/")
        let result = +values[0] / +values[1]
        calculatorScreen.innerHTML = result
    }
}