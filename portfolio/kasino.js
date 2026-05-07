function noppa() {
  document.getElementById('noppaout').innerHTML = Math.floor(Math.random() * 6 + 1);
}

function lotto() {
  /* initialize variables */
  const output = document.getElementById('lottoout');
  const input = document.getElementsByClassName('numin');
  const corrbox = document.getElementById('correctout');
  let results = [];
  let correct = 0;

  /* add 7 random numbers to results */
  for(let i = 0; i < 7 ; i++){
    results.push(Math.floor(Math.random() * 40 + 1));
  }

  /* check results */
  for(const box of input){
    for(const value of results){
      if (box.value == value){
        correct++;
      }
    }
  }

  /* update html */
  output.innerText = '';
  corrbox.innerText = 'Sait oikein ' + correct + ' numeroa';
  for(const value of results){
    output.innerText += value;
    output.innerText += '\n';
  }
}
