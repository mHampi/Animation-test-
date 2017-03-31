var bird = document.querySelector("#bird")
var birdsSound = document.querySelector("#birdsSound")
let playbtn = document.querySelector("#playbtn")
playbtn.addEventListener("click", play)
birdsSound.addEventListener("ended", doSomething)

function play() {
  birdsSound.play();
}

function doSomething() {
  console.toggle("birds singing");
  birdsSound.play();
}
