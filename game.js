let winnerButton = Math.floor(Math.random() * 3) + 1, text = document.createElement("text");

function button(clicked_id) {
  if (winnerButton === Number(clicked_id)) {
    text.innerHTML = "Congratulation, you won!";
    text.style.color = "blue";
    text.style.fontSize = "x-large";
    document.getElementById("winOrLose").append(text);
  } else {
    text.innerHTML = "Wrong button! The correct button is: Button " + winnerButton + ". Better luck next time!";
    text.style.color = "red";
    text.style.fontSize = "x-large";
    document.getElementById("winOrLose").append(text);
  }
}
