let cb = document.querySelector("#box");
let numberOfClicks = 0;

cb.addEventListener("click", boxClicked);

function boxClicked() {
  //numberOfClicks = numberOfClicks +1;
  numberOfClicks++;
  console.log("working", numberOfClicks);
  if (numberOfClicks == 1) {
    cb.classList.add("halfway");
  }
  if (numberOfClicks == 2) {
    cb.classList.add("halfway2");
  }
  if (numberOfClicks == 3) {
    cb.classList.add("halfway3");
  }
  if (numberOfClicks == 4) {
    cb.classList.add("halfway4");
  }
  if (numberOfClicks == 5) {
    cb.classList.add("halfway5");
  } else if (numberOfClicks == 6) {
    cb.classList.add("halfway6");
  }
}
