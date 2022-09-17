// https://www.omnicalculator.com/conversion/inch-to-meter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const inchRadio = document.getElementById('inchRadio');
const meterRadio = document.getElementById('meterRadio');

let inch;
let meter = v; 

// labels of the inpust
const variable = document.getElementById('variable');

inchRadio.addEventListener('click', function() {
  variable.textContent = 'meter';
  meter = v;
  result.textContent = '';
});

meterRadio.addEventListener('click', function() {
  variable.textContent = 'inch';
  inch = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(inchRadio.checked)
    result.textContent = `inch = ${computeinch().toFixed(5)}`;

  else if(meterRadio.checked)
    result.textContent = `meter = ${computemeter().toFixed(5)}`;
})

// calculation

function computeinch() {
  return Number(meter.value) * 39.37;
}

function computemeter() {
  return Number(inch.value) / 39.37;
}