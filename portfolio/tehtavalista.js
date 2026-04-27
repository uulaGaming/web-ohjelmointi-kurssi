const tasklist = document.getElementById("tasklist");
const textinput = document.getElementById("textinput");
const numberinput = document.getElementById("numberinput");

let lista = ["Tehtävä 1", "Tehtävä 2"];

function paivitaLista(){
  tasklist.innerHTML = '';
  for (let tehtava of lista){
    let item = document.createElement('li');
    item.innerHTML = tehtava;
    tasklist.append(item);
  }
}

paivitaLista();

function lisaa() {
  for (var i = 0 ; i < numberinput.value ; i++){
    lista.push(textinput.value);
  }
  textinput.value = '';
  paivitaLista();
}
