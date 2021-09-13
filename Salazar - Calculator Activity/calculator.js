let operation = Number(prompt("Enter an operation to be used: [1-Addition, 2-Subtraction, 3-Multiplication, 4-Division]"));
let firstNum = Number(prompt("Enter the first number: "));
let secondNum = Number(prompt("Enter the second number: "));


switch(operation) {
    case 1: alert("The result is" + " " + addOperation(firstNum,secondNum)); break;
    case 2: alert("The result is" + " " + subOperation(firstNum,secondNum)); break;
    case 3: alert("The result is" + " " + mulOperation(firstNum,secondNum)); break;
    case 4: alert("The result is" + " " + divOperation(firstNum,secondNum)); break;
    default: alert("Invalid input. Enter number from 1-4 only."); break;
};

function addOperation(firstNum,secondNum) {
    return firstNum+secondNum
};

function subOperation(firstNum,secondNum) {
    return firstNum-secondNum
};

function mulOperation(firstNum,secondNum) {
    return firstNum*secondNum
};

function divOperation(firstNum,secondNum) {
    return firstNum/secondNum
};