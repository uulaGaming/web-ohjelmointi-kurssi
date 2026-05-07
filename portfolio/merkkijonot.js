/* fuckass tehtävä 💔💔💔💔 */

function poimi() {
  const out = document.getElementById('poimiout');
  const in1 = document.getElementById('poimiin1');
  const in2 = document.getElementById('poimiin2');

  out.innerText = in1.value[in2.value];
}

function loyda() {
  const out = document.getElementById('loydaout');
  const in1 = document.getElementById('loydain1');
  const in2 = document.getElementById('loydain2');

  out.innerText = in1.value.indexOf(in2.value);
}

function leikkaa() {
  const out = document.getElementById('leikkaaout');
  const in1 = document.getElementById('leikkaain1');
  const in2 = document.getElementById('leikkaain2');
  const in3 = document.getElementById('leikkaain3');

  out.innerText = in1.value.slice(in2.value, in3.value);
}

function korvaa() {
  const out = document.getElementById('korvaaout');
  const in1 = document.getElementById('korvaain1');
  const in2 = document.getElementById('korvaain2');
  const in3 = document.getElementById('korvaain3');

  out.innerText = in1.value.replaceAll(in2.value, in3.value);
  
}

function pinoon() {
  const out = document.getElementById('pinoonout');
  const in1 = document.getElementById('pinoonin1');
  const in2 = document.getElementById('pinoonin2');

  const items = in1.value.split(in2.value);

  out.innerText = '';

  for (const item of items){
    let newli = document.createElement('li');
    newli.innerText = item;
    out.append(newli);
  }
}
