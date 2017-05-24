
const date = new Date();
let day = ('0' + date.getDate()).slice(-2);
let month = ('0' + (date.getMonth() + 1)).slice(-2);
let year = date.getFullYear();

document.getElementById("date").value=`${year}-${month}-${day}`;

const addToDate = (n) => {
  let value = n.detail.value;
  console.log(value);
  value=parseInt(value) * 24 * 60 * 60 * 1000;
  console.log(value);
  let msDate = date.getTime();
  const newDate = new Date(msDate+value);
  day = ('0' + newDate.getDate()).slice(-2);
  month = ('0' + (newDate.getMonth() + 1)).slice(-2);
  year = newDate.getFullYear();
  document.getElementById("date").value=`${year}-${month}-${day}`;
}

document.getElementById("slider1").addEventListener('immediate-value-change', addToDate);

const setFreq = (n) => {
  let value = n.detail.value;
  value=parseInt(value);
  console.log(value);
  switch (value) {
    case 0:
      document.getElementById("frequency").innerHTML='&nbsp;';
      break;
    case 25:
    console.log('hi');
      document.getElementById("frequency").innerHTML='Every Day';
      break;
    case 50:
      document.getElementById("frequency").innerHTML='Every Week';
      break;
    case 75:
      document.getElementById("frequency").innerHTML='Every Month';
      break;
    case 100:
      document.getElementById("frequency").innerHTML='On Deadline';
      break;
    default: 0;
    }
}

document.getElementById("slider2").addEventListener('immediate-value-change', setFreq);
