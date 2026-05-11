/*
 * fuckass tehtävä 2: funktioiden kosto
*/

let numerot = [8, 3, 55, 420, 1, -5, 69, -999, 0, 321];
let numerot2 = numerot.slice();
let sanat = ["skibidi", "rizz", "gyat", "sigma", "sus", "cap", "yeet", "lit", "simp", "cringe"];
const jarjestaout = document.getElementById('jarjestaout');
const suodataout = document.getElementById('suodataout');

function arrlist(arr, target) {
  target.innerText = '';
  for (const value of arr){
    let newthing = document.createElement('ul');
    newthing.innerText = value;
    target.append(newthing);
  }
}

function poimi() {
  const in1 = document.getElementById('poimi1');
  const out = document.getElementById('poimiout');

  out.innerText = sanat[in1.value];
}

function indeksi() {
  const in1 = document.getElementById('indeksi1');
  const out = document.getElementById('indeksiout');

  out.innerText = sanat.indexOf(in1.value);
}

function leikkaa() {
  const in1 = document.getElementById('leikkaa1');
  const in2 = document.getElementById('leikkaa2');
  const out = document.getElementById('leikkaaout');
  arrlist(sanat.slice(in1.value, in2.value), out);
}

function jtt() {
  arrlist(sanat, jarjestaout);
}
function jtj() {
  sanat.sort();
}
function jtk() {
  sanat.reverse();
}
function jnt() {
  arrlist(numerot, jarjestaout);
}
function jnj() {
  numerot.sort((a,b) => {return a - b});
}
function jnk() {
  numerot.reverse();
}
function st() {
  arrlist(numerot2, suodataout);
}
function sp() {
  const in1 = document.getElementById('suodata1');
  numerot2 = numerot.filter((value) => {return value < in1.value});
}
function si() {
  const in1 = document.getElementById('suodata1');
  numerot2 = numerot.filter((value) => {return value > in1.value;});
}
