var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
var buttonUp = document.getElementById("adicionar");
var buttonDown = document.getElementById("subtrair");


function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber <10) {
        buttonUp.disabled = false;
        buttonDown.disabled = false;
    }  
    else {
        buttonUp.disabled = true;
    }   
    if(currentNumber > 0){
        document.getElementById('currentNumber').style.color = 'blue';
    }else if(currentNumber == 0){
        document.getElementById('currentNumber').style.color = 'black';
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber >-10) {
        buttonDown.disabled = false
        buttonUp.disabled = false
    }
    else {
        buttonDown.disabled = true
    }
    if(currentNumber < 0){
        document.getElementById('currentNumber').style.color = 'red';
    }else if(currentNumber == 0){
        document.getElementById('currentNumber').style.color = 'black';
    }
}
