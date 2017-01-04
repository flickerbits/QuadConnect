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

  // check diagonal forwardslash that intersects location
  streak = 0;
  var base = col - row;
  if (base > 0 && base < 5) {
    for (var k = 0; k < 6; k++) {
      if (columns[base + k] && columns[base + k][k].color === currentPlayer) {
        streak++;
        if (streak === 4) return true;
      } else streak = 0;
    }
  } else {
    streak = 0;
    base = row - col;
    if (base >= 0 && base < 3) {
      for (var l = 0; l < 6; l++) {
        if (columns[l][base + l] && columns[l][base + l].color === currentPlayer) {
          streak++;
          if (streak === 4) return true
        } else streak = 0;
      }
    }
  }

  // check diagonal backslash that intersects location
  streak = 0;
  base = col + row;
  if (base > 2 && base < 8) {
    for (var m = 0; m < 6; m++) {
      if (columns[base - m] && columns[base - m][m].color === currentPlayer) {
        streak++;
        if (streak === 4) return true;
      } else streak = 0;
    }
  } else {
    streak = 0;
    if (base > 7 && base < 10) {
      for (var n = 0; n < 6; n++) {
        if (columns[base - n] && columns[base - n][n].color === currentPlayer) {
          streak++;
          if (streak === 4) return true
        } else streak = 0;
      }
    }
  }
  return false;
}
