function checkWinner(col, row) {
  console.log(col, row);
  var streak = 0;

  // check current column for winner
  for (var i = 0; i < 6; i++) {
    if (columns[col][i].color === currentPlayer) {
      streak++;
      if(streak === 4) return true
    } else streak = 0;
  }

  return false;
}
