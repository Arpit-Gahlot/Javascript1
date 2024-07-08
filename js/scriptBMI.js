const heightInput = document.getElementById("height-input");
const weightInput = document.getElementById("weight-input");
const heightUnit = document.getElementById("height-unit");
const weightUnit = document.getElementById("weight-unit");
const result = document.getElementById("result");
let currentHeightUnit = "centimeter";
let currentWeightUnit = "kilogram";
let heightInCentimeter;
let weightInKilogram;

function heightUnitSwitch(){
    if (currentHeightUnit === "centimeter"){
        heightUnit.textContent = "ft";
        currentHeightUnit = "feet";
    }
    else if(currentHeightUnit === "feet"){
        heightUnit.textContent = "cm";
        currentHeightUnit = "centimeter";
    }
}

function weightUnitSwitch(){
    if (currentWeightUnit === "kilogram"){
        weightUnit.textContent = "lbs";
        currentWeightUnit = "pound";
    }
    else if(currentWeightUnit === "pound"){
        weightUnit.textContent = "kg";
        currentWeightUnit = "kilogram";
    }
}

function calculate(){
    heightInCentimeter = heightInput.value;
    weightInKilogram = weightInput.value;

    if (heightInput.value === "" || weightInput.value === ""){
        result.textContent = "Invalid input, try again";
        return;
    }  
    if (currentHeightUnit === "feet"){
        heightInCentimeter = heightInput.value * 30.48;
    }
    if (currentWeightUnit === "pound"){
        weightInKilogram = weightInput.value * 0.454;
    }
    
    let BMI; 
    BMI = weightInKilogram/(heightInCentimeter*0.01)**2;
    BMI = Math.round(BMI * 100)/100;
    result.textContent = "Your BMI is, " + BMI;
}