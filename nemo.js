//elements defined from html
let nemo = document.querySelector("#nemo");
let dory = document.querySelector("#dory");
let bubbles = document.querySelector("#bubbles");
let button = document.querySelector("#btnstart");
let svg = document.querySelector("#svg-container");
let audioUnderwater = document.querySelector("audio#underwater");
let imgShells = document.querySelector('#img-shells-container');
let waterSound = document.querySelector('#water');
let bubblesEnd = document.querySelector('.bubbles-goingup');
// under water sound
console.log("underwater sound effect");
audioUnderwater.play();
audioUnderwater.volume = 0.5;
audioUnderwater.loop = true;

// Title Nemo
console.log('Nemo title appears');
svg.addEventListener("animationend", fade);

function fade() {
  console.log('Nemo title fades out');
  svg.classList.add("fade");
  svg.addEventListener('animationend', btnappears);
  svg.addEventListener('animationend', bubblesappears);
}

// Button for animation and bubbles appers after title fades out
function btnappears() {
  console.log('Button for animation appears');
  button.classList.add('btnappears');
}

function bubblesappears() {
  console.log('Bubbles');
  bubbles.classList.add('bubblesappears');
}

// bubbly sound playes after a button #btnstart is clicked
let sound = document.querySelector("#btnstart");
sound.addEventListener("click", play);
console.log('After a click bubbly sound starts');
bubblysound.volume = 0.4;
bubblysound.loop = false;

function play() {
  bubblysound.play();
}

// Dory animation
button.addEventListener("click", dorymoves);

function dorymoves() {
  console.log('Dory comes');
  dory.classList.add("dorymoves");
  dory.addEventListener('animationend', move);
  dorytalks.play();
  dorytalks.volume = 0.6;
  dorytalks.loop = false;
}


function move() {
  console.log('bubbles going up');
  button.classList.remove('btnappears');
  bubbles.classList.add("move");
  bubbles.addEventListener('animationend', nemocomes);
}

function nemocomes() {
  console.log('Nemo comes to scene');
  nemo.classList.add('nemocomes');
  nemo.addEventListener('animationend', nemojumps);
  nemotalks.play();
  nemotalks.volume = 0.4;
  nemotalks.loop = false;
}

function nemojumps() {
  console.log('Nemo jumping');
  nemo.classList.add('nemojumps');
  nemo.addEventListener('animationend', picturesFade);

}

function picturesFade() {
  console.log('pictutes disapear');
  nemo.classList.add('picturesFade');
  dory.classList.add('picturesFade');
  bubbles.classList.add('picturesFade');
  btnstart.classList.add('picturesFade');
  shellsAppear()
}

function shellsAppear() {
  console.log('Shell game');
  imgShells.classList.add('shells-appear');
}

let imgShell = document.querySelectorAll('.img-shell');

imgShell.forEach(addEvl);

function addEvl(img) {
  img.addEventListener("click", imgClicked);
}

function imgClicked() {
  this.classList.add("fade-shell");
  let picked = document.querySelectorAll('.fade-shell');
  if (picked.length == 3) {
    console.log("3 clicked");
    waterSound.play();
    waterSound.volume = 0.4;
    fnbubblesGoingUp()
  }
}

function fnbubblesGoingUp() {
  console.log('Shell game');
  bubblesEnd.classList.add('showbubbles');
}
