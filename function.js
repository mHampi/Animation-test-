let cb = document.querySelector("div");
let numberOfClicks = 0;

cb.addEventListener("click", boxClicked);

function boxClicked (){
  numberOfClicks = numberOfClicks +1;
  numberOfClicks++;
  console.log("working", numberOfClicks);
  if(numberOfClicks=3){
    console.log("3 clicks!!! hurrah")
    cb.classList.add("halfway");
  } else if (numberOfClicks==6) {
    cb.classList.add("there");
  }
}
