const convertToCelsius = function(value) {
    return +((value - 32) / 1.8).toFixed(1)
};

const convertToFahrenheit = function(value) {
    return +(value * 1.8 + 32).toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
