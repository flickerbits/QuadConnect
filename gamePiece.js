function GamePiece(x, y, player) {
  this.x = x;
  this.y = y;
  this.player = player;

  this.show  = function() {
    // empty space GRAY
    if (player === 0) { fill(200) };
    // player 1 RED
    if (player === 1) { fill(255, 0, 0) };
    // player 2 YELLOW
    if (player === 2) { fill(255, 255, 0) };
    ellipse(this.x, this.y, 50, 50);
  }

  this.move = function(dir) {
    this.x += dir * spacing;
  }
}