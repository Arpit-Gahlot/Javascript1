const numberDisplay = document.getElementById("number-display");
const historyDiv = document.getElementById("history-section");

let errorState = false;
let currentHistory = "";

function addToDisplay(input){
    if (errorState === false){
        numberDisplay.value += input;
    }   
}

function clearDisplay(){
    numberDisplay.value = "";
    errorState = false;
}

function backspace(){
    numberDisplay.value = numberDisplay.value.substring(0, numberDisplay.value.length - 1);
}

function calculate(){
    if (errorState === false){
        try{
            numberDisplay.value = eval(numberDisplay.value);

            currentHistory = currentHistory + numberDisplay.value + "\n";
            console.log(currentHistory);
            console.log(typeof currentHistory);
        }
        catch(error){
            numberDisplay.value = "Error";
            errorState = true;
        }
    }
}

function showHistory(){
    historyDiv.textContent = currentHistory;
}