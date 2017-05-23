const date = (new Date()).toISOString().slice(0,10);
document.getElementById("date").value=date;
console.log(document.getElementById("slider1").value);

const addToDate = (n) => {
  n=parseInt(document.getElementById("slider1").value);
  n+=1;
  console.log('++++',n);
  document.getElementById("deadline").innerHTML=n;
}

document.getElementById("slider1").addEventListener('input', addToDate);


function showFrequency(newValue) {
document.getElementById("frequency").innerHTML=newValue;
}
