var winnerButton = Math.floor(Math.random() * 3) + 1;
function button(clicked_id) {
  if (winnerButton == clicked_id) {
    $('#removePrevText').remove();
    $('#winOrLose').append(`
      <div id="removePrevText">
        <div class="font">
        <p id="win" style="color:blue; font-size:35px;"> Congratulation, you won! </p>
        </div>
      </div>
      `);
  } else {
    $('#removePrevText').remove();
    $('#winOrLose').append(`
      <div id="removePrevText">
        <div class="font">
          <p id="lose" style="color:red; font-size:35px;"> Wrong button! The winner button was: Button `+ winnerButton +`. Better luck next time! </p>
        </div>
      </div>
      `);
  }
}
