function reset() {
  columns = [];
  bg = {'r':0, 'g':0, 'b':200};
  winner = false;
  x = 40;
  y = 455;

  // fill columns with 'empty' gray game pieces to initialize game
  for (var i = 0; i < 7; i++) {
    columns[i]= [];
    for (var j = 0; j < 6; j++) {
      var gamePiece = new GamePiece(x, y - (j * spacing), 0, 1);
      ellipse (x, y - (j * spacing), 50, 50);
      columns[i].push(gamePiece);
    }
    x += spacing;
  }
}