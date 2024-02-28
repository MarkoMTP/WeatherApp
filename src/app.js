import getWeather from './getWeather';

const btnSearch = document.querySelector('button');

btnSearch.addEventListener('click', (e) => {
  e.preventDefault();

  const searchInp = document.querySelector('#searchInput');

  const city = searchInp.value;

  getWeather(city);
});
