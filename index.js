const kelvin = 0; // Kelvin is a variable set to 293
let celsius = 273 - kelvin; // celsius is substracted by kelvin to get its value
let fahrenheit = celsius * (9/5) + 32; // convert celsius to farienheit
fahrenheit = Math.floor(fahrenheit); // rounds dowm fahrenheit to nearest whole number
let newton  = celsius * (32/100);
newton = Math.floor(newton);

console.log('The Temperture is ' + fahrenheit + ' Degrees ' + 'Fahrenheit');
console.log('The Temperture is ' + newton + ' Degrees ' + 'newton');
