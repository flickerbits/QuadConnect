function GamePiece(x, y, player) {
  this.x = x;
  this.y = y;

  this.show  = function() {
    fill(225);
    if (player === 1) { fill(255, 0, 0) };
    if (player === 2) { fill(255, 255, 0) };
    ellipse(this.x, this.y, 50, 50);
  }
}