function checkWinner(col, row) {
  
  // check current column for winner
  var streak = 0;
  for (var i = 0; i < 6; i++) {
    if (columns[col][i].color === currentPlayer) {
      streak++;
      if (streak === 4) return true;
    } else streak = 0;
  }

  // check current row for winner
  streak = 0;
  for (var j = 0; j < 7; j++) {
    if (columns[j][row].color === currentPlayer) {
      streak++;
      if (streak === 4) return true;
    } else streak = 0;
  }

  // check only diagonal forwardslash that intersects location
  streak = 0;
  var base = col - row;
  if (base > 0 && base < 4) {
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
          if (streak === 4) return true;
        } else streak = 0;
      }
    }
  }

  // check only diagonal backslash that intersects location
  streak = 0;
  base = col + row;
  if (base > 2 && base < 9) {
    for (var m = 0; m < 6; m++) {
      if (columns[base - m] && columns[base - m][m].color === currentPlayer) {
        streak++;
        if (streak === 4) return true;
      } else streak = 0;
    }
  }
  return false;
}
