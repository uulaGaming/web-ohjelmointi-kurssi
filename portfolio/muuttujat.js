let a = 3;
let b = 5;
let c = 7;
let d = 15;

function summa(x,y) {
  alert( x + y );
}
function vahennys(x,y) {
  alert( x - y );
}
function kerto(x,y) {
  alert( x * y );
}
function jako(x,y) {
  alert( x * y );
}

/* kuka ylhäällä javaamassa niien skriptiä rn */

function laskin_summa() {
  let eka = Number(document.getElementById('input1').value);
  let toka = Number(document.getElementById('input2').value);
  summa(eka,toka);
}

function laskin_vahennys() {
  let eka = document.getElementById('input1').value;
  let toka = document.getElementById('input2').value;
  vahennys(eka,toka);
}

function laskin_kerto() {
  let eka = document.getElementById('input1').value;
  let toka = document.getElementById('input2').value;
  kerto(eka,toka);
}

function laskin_jako() {
  let eka = document.getElementById('input1').value;
  let toka = document.getElementById('input2').value;
  jako(eka,toka);
}

const viikonpaivat = ["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"];
const kuukaudet = ["Tammikuu",
    "Helmikuu",
    "Maaliskuu",
    "Huhtikuu",
    "Toukokuu",
    "Kesäkuu",
    "Heinäkuu",
    "Elokuu",
    "Syyskuu",
    "Lokakuu",
    "Marraskuu",
    "Joulukuu" ];

function paivapainike() {
  let paiva = new Date();
  document.getElementById('paivamaara').innerHTML = paiva.toLocaleDateString('fi');
  document.getElementById('aika').innerHTML = paiva.toLocaleTimeString('fi');
  document.getElementById('paivaJaAika').innerHTML = paiva.toLocaleString('fi');
  document.getElementById('viikonpaiva').innerHTML = viikonpaivat[paiva.getDay()];
  document.getElementById('kuukausi').innerHTML = kuukaudet[paiva.getMonth()];
}
