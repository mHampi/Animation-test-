let hobbies = ["drawing", "painting", "sewing", "traveling", "cooking"];

console.log(hobbies[0]);

console.log(hobbies[5]);

console.log(hobbies.length);

console.log([hobbies.length-1]);

hobbies.forEach(logMyhobbies)

function logMyhobbies(hobbie, index){
  console.log(" My hobbie" + index + " hobbie ");
}
