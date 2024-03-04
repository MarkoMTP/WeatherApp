import '../style.css';

function pushCityInfo(Wdata, divForInfo) {
  // city name
  const divLocation = document.createElement('div');
  divLocation.setAttribute('id', 'divLocation');

  const cityTitle = document.createElement('h1');

  cityTitle.textContent = Wdata.location.name;

  divLocation.appendChild(cityTitle);
  divForInfo.appendChild(divLocation);

  // city temp
  const divTemp = document.createElement('div');
  divTemp.setAttribute('id', 'divTemp');

  const cityTemp = document.createElement('h1');

  cityTemp.textContent = `${Wdata.current.temp_c}°C`;

  divForInfo.appendChild(cityTemp);

  // city description of weather

  const cityTextCondition = document.createElement('h1');

  cityTextCondition.textContent = Wdata.current.condition.text;

  divForInfo.appendChild(cityTextCondition);

  // city

  const cityTime = document.createElement('h1');

  cityTime.textContent = Wdata.location.localtime;

  divForInfo.appendChild(cityTime);
}

export default async function getWeather(cty, div) {
  const baseUrl = 'http://api.weatherapi.com/v1/current.json?key=d3ff1b220dbd4e5985695240242202&q=&aqi=yes';

  try {
    const newUrl = new URL(baseUrl);
    newUrl.searchParams.set('q', cty);

    const response = await fetch(newUrl);

    const WeatherData = await response.json();
    console.log(WeatherData);
    // const nameC = WeatherData.location.name;
    pushCityInfo(WeatherData, div);
    // pushCityTemp(WeatherData, div);
    // const currentTemp = WeatherData.current.temp_c;

    return WeatherData;
  } catch (err) {
    return console.log(err);
  }
}
