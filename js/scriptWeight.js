const inputWeight = document.getElementById("input-weight");
const weightUnit = document.getElementById("weight-unit");
const converter = document.getElementById("converter");

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
}

