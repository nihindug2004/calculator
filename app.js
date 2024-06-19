function calc() {
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    let operators = document.getElementById("operators").value;
    let output = document.getElementById("output");

    let result;

    switch (operators) {
        case "sum":
            result = number1 + number2;
            break;
        case "sub":
            result = number1 - number2;
            break;
        case "mul":
            result = number1 * number2;
            break;
        case "div":
            result = number1 / number2;
            break;
        default:
            result = "Invalid operator";
    }

    output.innerHTML = result;
}