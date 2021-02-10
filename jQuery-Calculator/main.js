// Global Variables
var firstNumber = 0
var secondNumber = 0
var operator = "";
var isFirstNumber = true;
var finished = false

// Gets Button Value & Pushes to Appropriate Array

$(".number").click(function (event) {
    if (finished){
        firstNumber = 0
        secondNumber = 0
        operator = "";
        isFirstNumber = true;
    }
    var a = event.currentTarget.value;

    // Pushes first number and operator to their arrays
    if (isFirstNumber){
        firstNumber += a;
    }
    else{
        secondNumber += a;
    }
   $("#result").append(a)
});

$(".operator").click(function (event){
    var a = event.currentTarget.value;
    operator = a;
    isFirstNumber = false;
    $("#result").append(a)

});

$("#button-equal").click(function (event){
    var result = performOperation(firstNumber, secondNumber, operator);
});

$("#button-clear").click(() => {
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
    isFirstNumber = true;
    $("#result").text("");
});





function performOperation(firstNumber, secondNumber, operator){
    // Performs a mathmatical operation based on the given operator.
    switch (operator){
        case "plus":
            $("#result").text(parseInt(firstNumber) + parseInt(secondNumber))
            break;
        case "minus":
            $("#result").text(parseInt(firstNumber) - parseInt(secondNumber))
            break;
        case "times":
            $("#result").text(parseInt(firstNumber) * parseInt(secondNumber))
            break;
        case "divide":
            $("#result").text(parseInt(firstNumber) / parseInt(secondNumber))
            break;
        case "power":
            $("#result").text(Math.pow(parseInt(firstNumber), parseInt(secondNumber)))
            break;
    }
    finished = true;
};
