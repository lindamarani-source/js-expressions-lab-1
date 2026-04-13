var fahrenheitTemps = [32, 70, 80, 72, 68, 75, 82, 65, 77, 78, 73, 79, 71, 74, 76];
var celsiusTemps = [25, 18, 15, 28, 20, 23, 30, 22, 24, 21, 27, 19, 26, 17, 29];

// Convert Celsius to Fahrenheit
var celsiusTempsToFahrenheit = celsiusTemps.map(temp => (temp * 9 / 5) + 32);

// Convert Fahrenheit to Celsius
var fahrenheitTempsToCelsius = fahrenheitTemps.map(temp => (temp - 32) * 5 / 9);

// All temperatures in Fahrenheit
var allTempsInFahrenheit = fahrenheitTemps.concat(celsiusTempsToFahrenheit);

// All temperatures in Celsius
var allTempsInCelsius = celsiusTemps.concat(fahrenheitTempsToCelsius);

// Calculate total temperatures
var tot_temperature_in_fahrenheit = allTempsInFahrenheit.reduce((sum, temp) => sum + temp, 0);
var tot_temperature_in_celsius = allTempsInCelsius.reduce((sum, temp) => sum + temp, 0);

// Calculate average temperatures
var avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;
var avg_temperature_in_celsius = tot_temperature_in_celsius / 30;

module.exports = {
  tot_temperature_in_fahrenheit,
  tot_temperature_in_celsius,
  avg_temperature_in_fahrenheit,
  avg_temperature_in_celsius
};