"use strict";

let secretNumber = Math.trunc(20 * Math.random() + 1);
let score = 20;
let hightScore = 0;

const displayMessage = function (message)
{
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);



  if (!guess) displayMessage("No Number  !!!");

  else if (guess === secretNumber) {
    displayMessage("Wooh! its a correct Number");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (hightScore < score) {
      hightScore = score;
      document.querySelector(".highscore").textContent = hightScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      ///When guess is too hight
      displayMessage(guess > secretNumber ? "Too high !" : "Too low !");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
 displayMessage("You Lost the Game :(");
    }
  }
});

//////////////When click reset button////////////
document.querySelector(".Again").addEventListener("click", function () {
  score = 20;
  console.log("Clicked");
  secretNumber = Math.trunc(20 * Math.random() + 1);
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
