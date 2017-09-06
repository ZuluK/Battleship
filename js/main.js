//battle ship game

//variables to store the ship's location
var location1 = 3;
var location2 = 4;
var location3 = 5;


//var won't have value until the user makes a guess
var guess;
var hits = 0;
var guesses = 0;

//variable get value of false
var isSunk = false;

//loop while the ship is not sunk ; uses a conditional test
while (isSunk == false) {
//set variable of guess to prompt user for a guess
  guess = prompt ("Ready, aim, fire!(enter a number 0-6):");
//checkes validtiy by to makes sure the guess is between zero and six
  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
  } else {
    guesses = guesses + 1;
    if (guess == location1 || guess == location2 || guess == location3) {
      alert("BOOM! Thats a hit!")
      hits = hits + 1;
        if (hits == 3) {
          isSunk = true;
          alert("You sank my muthafuckin ship!");
        }
    } else {
      alert("SIKE!! You gots nothhing!!");
    }
  }
}
var stats = "You took " + guesses + " guesses to sink the battleship, " + " which means your shooting accuracy was " + (3/guesses);
alert(stats);
