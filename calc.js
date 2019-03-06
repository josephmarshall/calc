var buttons = document.getElementsByTagName("button")
var displayLine1 = document.getElementById("displayLine1")
var displayLine2 = document.getElementById("displayLine2")
var inputBuffer = null;
var operatorPressed = false;
var equalsPress = false;
var operator;
var firstInput;
var secondInput = null;

for (var i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", function(){
  buttonClicked(this)
  })
}

function buttonClicked(button){

  inputBuffer = displayLine1.innerText += button.innerText 

  if (button.id === "clear-button") {
    clear();
  } else if (button.id === "equals-button"){
    compute(firstInput, operator, secondInput)
  } else if (button.className !== "number"){
    operatorPressed = true
    operator = button.id
  } else if (operatorPressed === false){
    firstInput = inputBuffer
  } else {
      if (secondInput === null){
      secondInput = button.innerText
    } else {
      secondInput += button.innerText
    }
  }

}

function compute(firstInput, operator, secondInput){
  firstNumber = parseFloat(firstInput)
  secondNumber = parseFloat(secondInput)

 switch (operator) {
    case "add-button":
    displayLine2.innerText = firstNumber + secondNumber
    break;
    case "subtract-button":
    displayLine2.innerText = firstNumber - secondNumber
    break;
    case "divide-button":
    displayLine2.innerText = firstNumber / secondNumber
    break;
    case "multiply-button":
    displayLine2.innerText = firstNumber * secondNumber
    break;
  }
}

function clear(){
displayLine1.innerText = ""
displayLine2.innerText = ""
inputBuffer = null;
operatorPressed = false;
equalsPress = false;
operator = null;
firstInput = null;
secondInput = null;
}


