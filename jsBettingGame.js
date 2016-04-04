bankroll = 100;
document.querySelector('#bankroll').innerHTML = bankroll;

document.getElementById('button').addEventListener('click', function(event) {
  var betAmount = document.getElementById('betAmount').value;
  if (bankroll >= betAmount) {
    var randomNum = Math.floor((Math.random() * 10) + 1);
    document.querySelector('#randomNum').textContent= randomNum;
    // debugger;
    var guessNum = document.getElementById('guessNum').value;

    if (randomNum == guessNum) {
        bankroll += parseInt(betAmount);
        console.log("You guess right and your bankroll is " + bankroll);
        document.querySelector('#result').innerHTML = "You guess right!";
        document.querySelector('#bankroll').innerHTML = bankroll;
    } else if ((randomNum + 1 == guessNum) || (randomNum - 1 == guessNum)) {
        console.log("You guess is off by one and your bankroll is " + bankroll);
        document.querySelector('#result').innerHTML = "You guess is off by one!";
        document.querySelector('#bankroll').innerHTML = bankroll;
    } else {
        bankroll -= parseInt(betAmount);
        console.log("Sorry guess again and your bankroll is " + bankroll);
        document.querySelector('#result').innerHTML = "Sorry guess again.";
        document.querySelector('#bankroll').innerHTML = bankroll;
    }
  } else {
    document.querySelector('#result').innerHTML = "Insiginificant funds, please hit reset to try agian.";
  }
});

document.getElementById('reset').addEventListener('click', function(event) {
  location.reload();
});