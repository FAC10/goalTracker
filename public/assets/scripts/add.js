const date = new Date();
let day = ('0' + date.getDate()).slice(-2);
let month = ('0' + (date.getMonth() + 1)).slice(-2);
let year = date.getFullYear();

document.getElementById("date").value=`${year}-${month}-${day}`;

const addToDate = (n) => {
  n=parseInt(document.getElementById("slider1").value) * 24 * 60 * 60 * 1000;
  console.log(n);
  let msDate = date.getTime();
  const newDate = new Date(msDate+n);
  day = ('0' + newDate.getDate()).slice(-2);
  month = ('0' + (newDate.getMonth() + 1)).slice(-2);
  year = newDate.getFullYear();
	console.log(newDate);
	console.log(day);
	console.log(month);
	console.log(year);
  document.getElementById("date").value=`${year}-${month}-${day}`;
}

document.getElementById("slider1").addEventListener('input', addToDate);

const setFreq = (n) => {
  n=parseInt(document.getElementById("slider2").value);
  console.log(n);
  switch (n) {
    case 0:
      document.getElementById("frequency").innerHTML='&nbsp;';
      break;
    case 25:
      document.getElementById("frequency").innerHTML='Every Day';
      break;
    case 50:
      document.getElementById("frequency").innerHTML='Every Week';
      break;
    case 75:
      document.getElementById("frequency").innerHTML='Every Month';
      break;
    case 100:
      document.getElementById("frequency").innerHTML='At the end';
      break;
    default: 0;
    }
}

document.getElementById("slider2").addEventListener('input', setFreq);