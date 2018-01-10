document.getElementById('ekran').value = "";
var varekran = document.getElementById('ekran');

function dodajwartosc(x){
  varekran.value += x;
  if(x==='c') {
    varekran = "";
  }
};

function rownasie(){
  x = varekran.value;
  x = eval(x);
  varekran.value = x;
}
