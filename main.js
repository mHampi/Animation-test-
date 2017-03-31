let myid = setInterval(sayIt, 100);
let count = 0;
function sayIt(){
  count++;
  console.log("Hi: " + count);

  if(count > 14){
    clearInterval ()
  }
}
