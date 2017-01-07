function checkWinner(col, row) {
  var winStroke = 5;
  
  // check current COLUMN for winner
  var streak = 0;
  for (var i = 0; i < 6; i++) {
    if (columns[col][i].color === currentPlayer) {
      streak++;
      columns[col][i].stroke = winStroke;
      if (streak === 4) return true;
    } else {
      streak = 0; 
      for (var r = 0; r <= i; r++) {
        columns[col][r].stroke = 1;
      }
    }
  }

  // check current ROW for winner
  streak = 0;
  for (var j = 0; j < 7; j++) {
    if (columns[j][row].color === currentPlayer) {
      streak++;
      columns[j][row].stroke = winStroke;
      if (streak === 4) return true;
    } else {
      streak = 0;
      for (var r = 0; r <= j; r++) {
        columns[r][row].stroke = 1;
      }
    }
  };

  // check only diagonal Forwardslash that intersects location
  streak = 0;
  var base = col - row;
  if (base > 0 && base < 4) {
    for (var k = 0; k < 6; k++) {
      if (columns[base + k] && columns[base + k][k].color === currentPlayer) {
        streak++;
        columns[base + k][k].stroke = winStroke;
        if (streak === 4) return true;
      } else streak = 0;
    }
    // for (var k = 0; k < 6; k++) {
    //   if (columns[base + k]) {
    //     columns[base + k][k].stroke = 1;
    //   }
    // }
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

  // check only diagonal Backslash that intersects location
  streak = 0;
  base = col + row;
  if (base > 2 && base < 9) {
    for (var m = 0; m < 6; m++) {
      if (columns[base - m] && columns[base - m][m].color === currentPlayer) {
        streak++;
        columns[base - m][m].stroke = winStroke;
        if (streak === 4) return true;
      } else streak = 0;
    }
    // for (var m = 0; m < 6; m++) {
    //   if (columns[base - m]) {
    //     columns[base - m][m].stroke = 1;
    //   }
    // }
  }
  return false;
}
