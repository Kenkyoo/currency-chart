import _ from 'lodash';
import axios from 'axios';
import { chart } from './chart';

async function getData() {
  try {
    const response = await axios.get('http://localhost:3000/api/latest');
    const data = response.data.rates;
    let keys = Object.keys(data);
    let values = Object.values(data);
    chart(keys, values)
  } catch (error) {
    console.error(error);
  }
}

async function getCurrencies() {
  try {
    const response = await axios.get('http://localhost:3000/api/currencies');
    const data = response.data;
    const entries = Object.entries(data);
    renderCurrencies(entries)
  } catch (error) {
    
  }
}

function renderCurrencies(array) {
  let dl = '';
  array.forEach(([key, value]) => {
    dl += `  
    <dl class="f6 lh-title mv2">
      <dt class="dib b">${key}</dt>
      <dd class="dib ml0 gray">${value}</dd>
    </dl>
    `;
  });
  document.getElementById('container').innerHTML = dl;
}

getData()
getCurrencies()
