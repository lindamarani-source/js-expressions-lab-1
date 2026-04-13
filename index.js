var fahrenheitTemps = [32, 70, 80, 72, 68, 75, 82, 65, 77, 78, 73, 79, 71, 74, 76];
var celsiusTemps = [25, 18, 15, 28, 20, 23, 30, 22, 24, 21, 27, 19, 26, 17, 29];

function convertToCelsius(fahrenheit) {
    if ( temperatureData === fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
    else {
    return temperatureData;
    }
}
}

//! Start the calculation of the total temperatures
function sumAppTempratures() {
    const tot_temperature_in_fahrenheit = day1TempF + day3TempF + day5TempF + day7TempF + day9TempF + day11TempF + day13TempF + day15TempF + day17TempF + day19TempF + day21TempF + day23TempF + day25TempF + day27TempF + day29TempF;
    const tot_temperature_in_celsius = convertToCelsius(day2TempC) + convertToCelsius(day4TempC) + convertToCelsius(day6TempC) + convertToCelsius(day8TempC) + convertToCelsius(day10TempC) + convertToCelsius(day12TempC) + convertToCelsius(day14TempC) + convertToCelsius(day16TempC) + convertToCelsius(day18TempC) + convertToCelsius(day20TempC) + convertToCelsius(day22TempC) + convertToCelsius(day24TempC) + convertToCelsius(day26TempC) + convertToCelsius(day28TempC) + convertToCelsius(day30TempC);
    return tot_temperature_in_fahrenheit, tot_temperature_in_celsius;
}

//! Start the calculation of the average temperatures
function avgAppTempratures() {
    const avg_temperature_in_fahrenheit = sumAppTempratures() / 15; // 15 days recorded in Fahrenheit
    const avg_temperature_in_celsius = sumAppTempratures() / 15; // 15 days recorded in Celsius
    return avg_temperature_in_fahrenheit, avg_temperature_in_celsius;
    console.log(avg_temperature_in_fahrenheit, avg_temperature_in_celsius);
}



//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
  tot_temperature_in_fahrenheit,
  tot_temperature_in_celsius,
  avg_temperature_in_fahrenheit,
  avg_temperature_in_celsius
};