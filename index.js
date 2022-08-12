
let y = Math.floor(Math.random() * 100 + 1);

let guess = 0; 

document.querySelector('.again').addEventListener('click', function() {
  document.querySelector('.guessField').value = '0';
});
document.getElementById("submitguess").onclick = function () {
  let x = document.getElementById("guessField").value;
   if (x == y) {
    alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
      + guess + " GUESS ");
  }
  else if (x > y) {
    guess++;
    alert("SORRY!! TRY A SMALLER NUMBER");
  }
  else {
    guess++;
    alert("SORRY!! TRY A GREATER NUMBER");
  }
}
