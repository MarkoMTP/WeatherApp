import '../style.css';
import getWeather from './getWeather';

function createForm(div, divForInfo) {
  const form1 = document.createElement('form');
  const label1 = document.createElement('label');
  const input1 = document.createElement('input');
  const buttonSbmt = document.createElement('button');

  // form all attributes
  form1.setAttribute('action', 'search');
  form1.setAttribute('method', 'get');
  form1.setAttribute('id', 'form');

  form1.appendChild(label1);
  form1.appendChild(input1);
  form1.appendChild(buttonSbmt);

  // label all attributes
  label1.setAttribute('for', 'searchInput');
  // input all attr
  input1.setAttribute('type', 'text');
  input1.setAttribute('id', 'searchInput');
  // btn all attr
  buttonSbmt.setAttribute('type', 'button');
  buttonSbmt.setAttribute('id', 'buttonSbmt');

  buttonSbmt.innerHTML = 'Submit';

  buttonSbmt.addEventListener('click', (e) => {
    e.preventDefault();

    const city = input1.value;
    divForInfo.innerHTML = '';
    getWeather(city, divForInfo);
  });

  // cont
  div.appendChild(divForInfo);
  div.setAttribute('id', 'container');
  div.appendChild(form1);
}

export default function createAll(div) {
  const h1 = document.createElement('h1');
  h1.textContent = 'Weather App ';
  h1.style.fontSize = '6rem';
  div.appendChild(h1);

  const divForInfo = document.createElement('div');
  divForInfo.setAttribute('id', 'infoDiv');

  createForm(div, divForInfo);
}

// dodat div jos jedan u create all i dodat parametar u createForm za taj drugi div i tako prikazat>
