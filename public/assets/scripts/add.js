//First slider - Set the date
let date = new Date();
let day = ('0' + date.getDate()).slice(-2);
let month = ('0' + (date.getMonth() + 1)).slice(-2);
let year = date.getFullYear();

const dateElem = document.getElementById("date");
const popup = document.getElementById("popup");
dateElem.value ? date = new Date(dateElem.value) : dateElem.value=`${year}-${month}-${day}`;

const popobj = { 0:'&nbsp;',
              1:'day(s)',
              7:'Week(s)',
              30:'~Month(s)'
              };

const addToDate = (n) => {
  let value = n.detail.value;
  console.log(popobj[value]);
  // popup.value = value;
  if (value<7) value=1;
  if (value<30) value=7;
  if (value>30) value=30;

  document.getElementById("popup").innerHTML = popobj[value];
  value=parseInt(value) * 24 * 60 * 60 * 1000;
  console.log(value);
  let msDate = date.getTime();
  const newDate = new Date(msDate+value);
  day = ('0' + newDate.getDate()).slice(-2);
  month = ('0' + (newDate.getMonth() + 1)).slice(-2);
  year = newDate.getFullYear();
  document.getElementById("date").value=`${year}-${month}-${day}`;
}

document.getElementById("slider1").addEventListener('immediate-value-changed', addToDate);

// Second slider - Frequency of remainders
const freqElem = document.getElementById("frequency");
const freqSlider = document.getElementById("slider2");

const freq = { 0:'Never',
              25:'Every Day',
              50:'Every Week',
              75:'Every Month',
             100:'On Deadline'};

freqElem.innerHTML = freq[freqSlider.value];

const setFreq = (n) => {
  let value = parseInt(n.detail.value);
  freqSlider.value = value;
  freqElem.innerHTML = freq[freqSlider.value];
}

freqSlider.addEventListener('immediate-value-changed', setFreq);
