const c = document.getElementById('game');
const ctx = c.getContext('2d');

ctx.fillCircle = (x, y, rad) => {
  ctx.beginPath();
  ctx.arc(x, y, rad, 0, 2 * Math.PI);
  ctx.fill();
};

const gamew = 640;
const gameh = 480;

const playerrad = 4;

let playerx = gamew / 2;
let playery = gameh / 2; 
let pdx = 0;
let pdy = 0;
let speed = 0.2;

let score = 0;

let bullets = [];

class bullet {
  constructor(x, y, rad){
    this.x = x;
    this.y = y;
    this.rad = rad;
    this.direction = (Math.random() * 0.25 - 0.125);
    this.speed = Math.random() * 0.1 + 0.1;
  }
  draw(){
    ctx.fillCircle(this.x, this.y, this.rad);
  }
  checkCol(){
    let distx = Math.abs(this.x - playerx);
    let disty = Math.abs(this.y - playery);
    let dist = Math.sqrt(distx * distx + disty * disty);
    if (dist < playerrad + this.rad) {
      return 1;
    }
    return 0;
  }
  move(delta){
    this.x += Math.sin(this.direction) * delta * this.speed;
    this.y += Math.cos(this.direction) * delta * this.speed;
    if(this.x < 0 - this.rad) {
      this.x = gamew + this.rad;
    };
    if(this.x > gamew + this.rad) {
      this.x = 0 - this.rad;
    };
    if(this.y < 0 - this.rad) {
      this.y = gameh + this.rad;
    };
    if(this.y > gameh + this.rad) {
      this.y = 0 - this.rad;
    };
  }
}

let last = 0;

let keys = {
  'left':0,
  'right':0,
  'up':0,
  'down':0
};

document.addEventListener('keydown', (ev) => {
  switch (ev.key.toLowerCase()) {
    case 'arrowright':
      keys.right = 1;
      break;
    case 'arrowleft':
      keys.left = 1;
      break;
    case 'arrowup':
      keys.up = 1;
      break;
    case 'arrowdown':
      keys.down = 1;
      break;
    case 'l':
      keys.right = 1;
      break;
    case 'h':
      keys.left = 1;
      break;
    case 'k':
      keys.up = 1;
      break;
    case 'j':
      keys.down = 1;
      break;
    case 'shift':
      speed = 0.1;
      break;
  }
});

document.addEventListener('keyup', (ev) => {
  switch (ev.key.toLowerCase()) {
    case 'arrowright':
      keys.right = 0;
      break;
    case 'arrowleft':
      keys.left = 0;
      break;
    case 'arrowup':
      keys.up = 0;
      break;
    case 'arrowdown':
      keys.down = 0;
      break;
    case 'l':
      keys.right = 0;
      break;
    case 'h':
      keys.left = 0;
      break;
    case 'k':
      keys.up = 0;
      break;
    case 'j':
      keys.down = 0;
      break;
    case 'shift':
      speed = 0.2;
      break;
  }
});

function resetGame() {
  bullets = [];
  playerx = gamew / 2;
  playery = gameh / 2;

  score = 0;

  for (let i = 0; i < 128; i++) {
    bullets.push(new bullet(Math.random() * gamew, gameh / 1.5, Math.random() * 4 + 4));
  }
}

function runGame(timestamp){
  requestAnimationFrame(runGame);
  const delta = timestamp - last;
  last = timestamp;

  /* make sure no first 2 frame errors happen */
  if (!delta){
    console.log('first 2 frames gloop prevention measures in progress');
    return 1;
  }

  score += delta / 1000;

  pdx = keys.right - keys.left;
  pdy = keys.down - keys.up;

  if (pdx && pdy) {
    pdx /= 1.414
    pdy /= 1.414
  }

  if (pdx || pdy){
    playerx += pdx * delta * speed;
    playery += pdy * delta * speed;
    if(playerx < 0 - playerrad) {
      playerx = gamew + playerrad;
    };
    if(playerx > gamew + playerrad) {
      playerx = 0 - playerrad;
    };
    if(playery < 0 - playerrad) {
      playery = gameh + playerrad;
    };
    if(playery > gameh + playerrad) {
      playery = 0 - playerrad;
    };
  }

  ctx.fillStyle = '#000000';
  ctx.fillRect(0,0,gamew,gameh);

  for (const bul of bullets) {
    bul.move(delta);
    let coolcol = 255;

    let distx = Math.abs(bul.x - playerx);
    let disty = Math.abs(bul.y - playery);
    let dist = Math.sqrt(distx * distx + disty * disty);
    coolcol -= dist / 1.5;
    if (coolcol < 0){
      coolcol = 0;
    }
    
    ctx.fillStyle = 'rgb('+coolcol+',0, 255, .8)';
    if(bul.checkCol()){
      ctx.fillStyle = '#ff0000';
      resetGame();
    }
    bul.draw();
  }

  ctx.fillStyle = '#44dfdf';
  ctx.fillCircle(playerx, playery, playerrad + 2);

  ctx.fillStyle = '#00000089';
  ctx.fillRect(0,0,200,38);
  
  ctx.fillStyle = '#424242';
  ctx.fillText('fps: ' + Math.round( 1000 / delta) , 2, 36);
  ctx.fillText('delta: ' + delta.toFixed(2), 2, 24);
  ctx.fillStyle = '#666666';
  ctx.fillText('Time alive: ' + score.toFixed(4), 2, 12);

}

runGame();
resetGame();
