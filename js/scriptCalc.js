const numberDisplay = document.getElementById("number-display");
let errorState = false;

function addToDisplay(input){
    if (errorState === false){
        numberDisplay.value += input;
    }   
}

function clearDisplay(){
    numberDisplay.value = "";
    errorState = false;
}

function calculate(){
    if (errorState === false){
        try{
            numberDisplay.value = eval(numberDisplay.value);
        }
        catch(error){
            numberDisplay.value = "Error";
            errorState = true;
        }
    }
}