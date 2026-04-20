const tasklist = document.getElementById("tasklist");
const textinput = document.getElementById("textinput");

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
  lista.push(textinput.value);
  textinput.value = '';
  paivitaLista();
}
