
function convertTemperature() {
    const conversionType = document.getElementById('conversionType').value;
    const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    let result = 0;
  
    if (conversionType === 'fahrenheitToCelsius') {
      result = Math.round ((temperatureInput - 32) * 5 / 9) ;
       document.getElementById('result').innerText = `Result in Celsius: ${result}°C`;
    } else if (conversionType === 'celsiusToFahrenheit') {
      result = Math.round((temperatureInput * 9 / 5) + 32);
       document.getElementById('result').innerText = `Result in Fahrenheit: ${result}°F`;
    }
  } 
 
  function resetTemperature() {
     document.getElementById('temperatureInput').value = '';
       document.getElementById('result').innerText = '';
      
  
  }