const cityD = document.querySelector('#grad');

export default async function getWeather(cty) {
  const baseUrl = 'http://api.weatherapi.com/v1/current.json?key=d3ff1b220dbd4e5985695240242202&q=&aqi=yes';

  try {
    const newUrl = new URL(baseUrl);
    newUrl.searchParams.set('q', cty);

    const response = await fetch(newUrl);

    const WeatherData = await response.json();

    const nameC = WeatherData.location.name;
    cityD.innerHTML = nameC;
    //   const weatherCondition = WeatherData.current.condition;
    console.log(nameC);
  } catch (err) {
    console.log(err);
  }
}
