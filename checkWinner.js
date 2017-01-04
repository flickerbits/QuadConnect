function checkWinner(col, row) {
  var streak = 0;

  // check current column for winner
  for (var i = 0; i < 6; i++) {
    if (columns[col][i].color === currentPlayer) {
      streak++;
      if (streak === 4) return true
    } else streak = 0;
  }

  // check current row for winner
  streak = 0;
  for (var j = 0; j < 8; j++) {
    if (columns[j][row].color === currentPlayer) {
      streak++;
      if (streak === 4) return true;
    } else streak = 0;
  }

  // check diagonal forward slash
  streak = 0;
  // check col values > 0
  var base = col - row;
  if (base > 0 && base < 5) {
    for (var k = 0; k < 6; k++) {
      // console.log('checking:', k + base, k);
      if (columns[base + k] && columns[base + k][k].color === currentPlayer) {
        streak++;
        if (streak === 4) return true;
      } else streak = 0;
    }
  } else {
    streak = 0;
    // check row values > 0
    base = row - col;
    if (base >= 0 && base < 3) {
      for (var l = 0; l < 6; l++) {
        // console.log('checking:', l , base + l);
        if (columns[l][base + l] && columns[l][base + l].color === currentPlayer) {
          streak++;
          if (streak === 4) return true
        } else streak = 0;
      }
    }
  }

  return false;
}
