var winnerButton = Math.floor(Math.random() * 3) + 1;
function button1(clicked_id) {
  var clickedButton = clicked_id;
  if (winnerButton == clickedButton) {
    $('#winOrLose').append(`
      <div class="font">
      <p id="win" style="color:blue; font-size:35px;"> </p>
      </div>
      `);
    document.getElementById("win").innerHTML = "Congratulation, you won!";
  } else {
    $('#winOrLose').append(`
      <div class="font">
      <p id="lose" style="color:red; font-size:35px;"> </p>
      </div>
      `);
    document.getElementById("lose").innerHTML = "Wrong button! The winner button was: Button " + winnerButton + ". Better luck next time!";
  }
}
