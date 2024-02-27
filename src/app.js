async function getWeather() {
  const response = await fetch('http://api.weatherapi.com/v1/current.json?key=d3ff1b220dbd4e5985695240242202&q=Split&aqi=yes');

  const WeatherData = await response.json();

  console.log(WeatherData);
}

getWeather();
