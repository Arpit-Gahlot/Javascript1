const inputWeight = document.getElementById("input-weight");
const weightUnit = document.getElementById("weight-unit");
const converter = document.getElementById("converter");
const kgOutput = document.getElementById("kg-output");
const gOutput = document.getElementById("g-output");
const ozOutput = document.getElementById("oz-output");
const lbOutput = document.getElementById("lb-output");
const clearOutput = document.getElementById("clear-output");

let currentUnit = "kg";

weightUnit.onclick = function(){
    switch (true){
        case currentUnit === "kg":
            currentUnit = "g";
            break;
        case currentUnit === "g":
            currentUnit = "oz";
            break;
        case currentUnit === "oz":
            currentUnit = "lb";
            break;
        case currentUnit === "lb":
            currentUnit = "kg";
            break;
    }

    weightUnit.textContent = currentUnit; 
}

converter.onclick = function(){
    let weightInKg;

    switch (true){
        case currentUnit === "kg":
            weightInKg = inputWeight.value;
            break;
        case currentUnit === "g":
            weightInKg = inputWeight.value / 1000;
            break;
        case currentUnit === "oz":
            weightInKg = inputWeight.value / 35.274;
            break;
        case currentUnit === "lb":
            weightInKg = inputWeight.value / 2.205;
            break;
    }

    let weightInG;
    let weightInOz;
    let weightInLb;

    weightInG = weightInKg * 1000;
    weightInOz = weightInKg * 35.274;
    weightInLb = weightInKg * 2.205;

    weightInKg = Math.round(weightInKg * 100) / 100;
    weightInG = Math.round(weightInG * 100) / 100;
    weightInOz = Math.round(weightInOz * 100) / 100;
    weightInLb = Math.round(weightInLb * 100) / 100;

    kgOutput.textContent = weightInKg;
    gOutput.textContent = weightInG;
    ozOutput.textContent = weightInOz;
    lbOutput.textContent = weightInLb;
}

clearOutput.onclick = function(){

    kgOutput.textContent = "";
    gOutput.textContent = "";
    ozOutput.textContent = "";
    lbOutput.textContent = "";
}

