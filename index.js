var fahrenheitTemps = [32, 70, 80, 72, 68, 75, 82, 65, 77, 78, 73, 79, 71, 74, 76];
var celsiusTemps = [25, 18, 15, 28, 20, 23, 30, 22, 24, 21, 27, 19, 26, 17, 29];

function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function convertToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

var allTempsInFahrenheit = fahrenheitTemps.concat(celsiusTemps.map(convertToFahrenheit));
var allTempsInCelsius = celsiusTemps.concat(fahrenheitTemps.map(convertToCelsius));

var tot_temperature_in_fahrenheit = allTempsInFahrenheit.reduce((sum, temp) => sum + temp, 0);
var tot_temperature_in_celsius = allTempsInCelsius.reduce((sum, temp) => sum + temp, 0);

var avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / allTempsInFahrenheit.length;
var avg_temperature_in_celsius = tot_temperature_in_celsius / allTempsInCelsius.length;

module.exports = {
  tot_temperature_in_fahrenheit,
  tot_temperature_in_celsius,
  avg_temperature_in_fahrenheit,
  avg_temperature_in_celsius
};