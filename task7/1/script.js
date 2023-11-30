function convertTemperature(temperature, fromSystem, toSystem) {
    if (fromSystem === "Celsius" && toSystem === "Fahrenheit") {
        return (temperature * 9/5) + 32;
    } else if (fromSystem === "Fahrenheit" && toSystem === "Celsius") {
        return (temperature - 32) * 5/9;
    } else {

        return "Unsupported temperature conversion";
    }
}


console.log(convertTemperature(20, "Celsius", "Fahrenheit"));
