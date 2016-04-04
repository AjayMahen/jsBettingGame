var bankroll = 100;



while (bankroll >= 5) {
  var betAmount = prompt("Place a bet between $5 and $10");
  var randomNum = Math.floor((Math.random() * 10) + 1);
  var guessNum = prompt("Guess a number between 1 to 10.");

  if (randomNum == guessNum) {
      bankroll += parseInt(betAmount);
      console.log("You guess right and your bankroll is " + bankroll);
      alert("You guess right and your bankroll is " + bankroll);
  } else if ((randomNum + 1 == guessNum) || (randomNum - 1 == guessNum)) {
      console.log("You guess is off by one and your bankroll is " + bankroll);
      alert("You guess is off by one and your bankroll is " + bankroll);
  } else {
      bankroll -= parseInt(betAmount);
      console.log("Sorry guess again and your bankroll is " + bankroll);
      alert("Sorry guess again and your bankroll is " + bankroll);
  }
}

