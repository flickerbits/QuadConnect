function GamePiece(x, y, color, stroke) {
  this.x = x;
  this.y = y;
  this.color = color;
  this.stroke = stroke;

  this.show  = function() {
    push();
    strokeWeight(this.stroke);
    // empty space = GRAY
    if (this.color === 0) {fill(200, 200, 200, 200) };
    // player 1 = RED
    if (this.color === 1) { fill(255, 0, 0) };
    // player 2 = YELLOW
    if (this.color === -1) { fill(255, 255, 0) };
    ellipse(this.x, this.y, 50, 50);
    pop();
  }

  this.move = function(dir) {
    // prevent currentPiece from moving off screen
    if(this.x + (dir * spacing) > 0 && this.x + (dir * spacing) < width) {
      this.x += dir * spacing;
      currentCol += dir;
    }
  }

  this.changeColor = function() {
    if (this.color === 0) {
      this.color = currentPlayer;
    } else {
      this.color *= -1;
    }
  }
}
