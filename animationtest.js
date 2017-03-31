// define cat and dog characters for animations
let cat = document.querySelector("#cat");
let dog = document.querySelector("#dog");

// define button for hitter
let btnKick = document.querySelector("#hitter");

// start animation after click button hitter and call the function
btnKick.addEventListener("click", hitter)

// define function hitter
function hitter() {
  console.log("hitter")

  // toggle class headbutt
  cat.classList.toggle("headbutt")
}


let btnMove = document.querySelector("#move");

btnMove.addEventListener("click", move);

function move() {
  console.log('move forward');
  dog.classList.toggle("move");
}


let btnJump = document.querySelector("#jump");

btnJump.addEventListener("click", jump);

function jump() {
  dog.classList.toggle("jump");
}

let btnJumping = document.querySelector("#jumping");

btnJumping.addEventListener("click", jumping);

function jumping() {
  dog.classList.toggle("jumping");
}

let btnshake = document.querySelector("#shake");

btnshake.addEventListener("click", shake);

function shake() {
  cat.classList.toggle("shake");
}

let btnmoveTo30 = document.querySelector("#moveTo30");

btnmoveTo30.addEventListener("click", moveTo30);

function moveTo30() {
  dog.classList.toggle("moveTo30");
}

let btnmoveFrom30 = document.querySelector("#moveFrom30");

btnmoveFrom30.addEventListener("click", moveFrom30);

function moveFrom30() {
  cat.classList.toggle("moveFrom30");
}

let btnfade = document.querySelector("#fade");

btnfade.addEventListener("click", fade);

function fade() {
  cat.classList.toggle("fade");
}

let btnfallDown = document.querySelector("#fallDown");

btnfallDown.addEventListener("click", fallDown);

function fallDown() {
  cat.classList.toggle("fallDown");
}

let btnglow = document.querySelector("#glow");

btnglow.addEventListener("click", glow);

function glow() {
  dog.classList.toggle("glow");
}

var meow = document.querySelector("#meow")
var meow = document.querySelector("#meow")
let sound = document.querySelector("#sound")
sound.addEventListener("click", play)
meow.addEventListener("ended", doSomething)

function play() {
  meow.play();
}

function doSomething() {
  console.log("meow");
  meow.play();
}





// function throwDogBack() {
//   console.log("throw dog");
//   dog.classList.add("dogHasBeenHit");
// }
