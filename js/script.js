//variables corresponding to every covert-from radio input
const CFKelvin = document.getElementById("cf-kelvin-option");
const CFCelsius = document.getElementById("cf-celsius-option");
const CFFahrenheit = document.getElementById("cf-fahrenheit-option");

//variables corresponding to every covert-to radio input
const CTKelvin = document.getElementById("ct-kelvin-option");
const CTCelsius = document.getElementById("ct-celsius-option");
const CTFahrenheit = document.getElementById("ct-fahrenheit-option");

//variable for user input
const temperatureInput = document.getElementById("user-input");

//variable for submitting the input and then converting
const submit = document.getElementById("converter");

//variable for displaying the output temperature
const result = document.getElementById("output-temperature");

let cfUnitFinal;
let ctUnitFinal;

submit.onclick = function(){

    if (!checkConvertFrom()){
        result.textContent = "No unit selected in 'Convert from'";
        return;
    }
     
    if (!checkConvertTo()){
        result.textContent = "No unit selected in 'Convert to'";
    }

    if (temperatureInput.value === null){
        result.textContent = "No value entered";
        return;
    }

    if (isNaN(temperatureInput.value)){
        console.log(temperatureInput.value, typeof temperatureInput.value);
        result.textContent = "Incorrect type of value entered";
        return;
    }

    if (cfUnitFinal === "kelvin" && temperatureInput.value < 0){
        result.textContent = "minimum temperature in kelvin is 0";
        return;
    }
    if (cfUnitFinal === "celsius" && temperatureInput.value < -273.15){
        result.textContent = "minimum temperature in celsius is -273.15";
        return;
    }
    if (cfUnitFinal === "fahrenheit" && temperatureInput.value < -459.6){
        result.textContent = "minimum temperature in fahrenheit is -459.6";
        return;
    }

    switch (true){
        case (cfUnitFinal === ctUnitFinal):
            result.textContent = "same units selected";
            break;
        case (cfUnitFinal === "kelvin" && ctUnitFinal === "fahrenheit"):
            result.textContent = kelvinToFahrenheit(temperatureInput.value);
            break;
        case (cfUnitFinal === "kelvin" && ctUnitFinal === "celsius"):
            result.textContent = kelvinToCelsius(temperatureInput.value);
            break;
        case (cfUnitFinal === "fahrenheit" && ctUnitFinal === "kelvin"):
            result.textContent = fahrenheitToKelvin(temperatureInput.value);
            break;
        case (cfUnitFinal === "fahrenheit" && ctUnitFinal === "celsius"):
            result.textContent = fahrenheitToCelsius(temperatureInput.value);
            break;
        case (cfUnitFinal === "celsius" && ctUnitFinal === "kelvin"):
            result.textContent = celsiusToKelvin(temperatureInput.value);
            break;
        case (cfUnitFinal === "celsius" && ctUnitFinal === "fahrenheit"):
            result.textContent = celsiusToFahrenheit(temperatureInput.value);
            break;
    }
}

function checkConvertFrom(){
    if (CFKelvin.checked){
        cfUnitFinal = "kelvin";
        return true;
    }
    else if (CFCelsius.checked){
        cfUnitFinal = "celsius";
        return true;
    } 
    else if (CFFahrenheit.checked){
        cfUnitFinal = "fahrenheit";
        return true;
    }
    else {
        return false;
        
    }
}

function checkConvertTo(){
    if (CTKelvin.checked){
        ctUnitFinal = "kelvin";
        return true;
    }
    else if (CTCelsius.checked){
        ctUnitFinal = "celsius";
        return true;
    }
    else if (CTFahrenheit.checked){
        ctUnitFinal = "fahrenheit";
        return true;
    }
    else {
        return false
    }
}

function kelvinToFahrenheit(K){
    K = Number(K);
    F = (K - 273.15) * 1.8 + 32;
    return F;
}

function kelvinToCelsius(K){
    K = Number(K);
    C = K - 273.15;
    return C;
}

function fahrenheitToKelvin(F){
    F = Number(F);
    K = (F - 32) * (5/9) + 273.15;
    return K;
}

function fahrenheitToCelsius(F){
    F = Number(F);
    C = (F - 32) * (5/9);
    return C;
}

function celsiusToKelvin(C){
    C = Number(C);
    K = C + 273.15;
    return K;
}

function celsiusToFahrenheit(C){
    C = Number(C);
    F = ((9/5) * C) + 32;
    return F;
}