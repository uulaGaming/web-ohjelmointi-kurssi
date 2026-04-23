console.log('js sivu avattu');

let hevosCounter = 0;

function hevosfunktio() {
  const hevoset = document.getElementById('hevoset');
  const hevosaani = new Audio("gallop.mp3");
  hevosCounter = 0;
  hevosaani.play();
  hevoset.style.right = '0px';
}

function hevosetpois() {
  const hevoset = document.getElementById('hevoset');
  let hevosaani;
  if (hevosCounter > 9) {
    hevosaani = new Audio("horseDeath.ogg");
    hevoset.style.right = '100%';
  } else {
    hevosaani = new Audio("horse.mp3");
    hevosCounter++;
  }
  hevosaani.play();
}
