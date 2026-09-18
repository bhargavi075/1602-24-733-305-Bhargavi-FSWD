function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function calculate() {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;

    let result;

    if (operator == "+") {
        result = addition(num1, num2);
    }
    else if (operator == "-") {
        result = subtraction(num1, num2);
    }
    else if (operator == "*") {
        result = multiplication(num1, num2);
    }
    else if (operator == "/") {
        if (num2 == 0) {
            result = "Cannot divide by zero";
        }
        else {
            result = division(num1, num2);
        }
    }

    document.getElementById("result").innerHTML = "Result = " + result;
}