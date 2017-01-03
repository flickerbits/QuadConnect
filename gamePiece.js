function GamePiece(x, y, player) {
  this.x = x;
  this.y = y;
  this.player = player;

  this.show  = function() {
    // empty space = GRAY
    if (this.player === 0) { fill(200) };
    // player 1 = RED
    if (this.player === 1) { fill(255, 0, 0) };
    // player 2 = YELLOW
    if (this.player === 2) { fill(255, 255, 0) };
    ellipse(this.x, this.y, 50, 50);
  }

  this.move = function(dir) {
    if(this.x + dir * spacing > 0 && this.x + dir * spacing < width) {
      this.x += dir * spacing;
      currentColumn += dir;
    }
  }

  this.changePlayer = function() {
    if (currentPlayer === 1) {
      this.player = 2;
      currentPlayer = 2;
    } else if(currentPlayer === 2) {
      this.player = 1
      currentPlayer = 1;
    }
  }


}