function GamePiece(x, y, color) {
  this.x = x;
  this.y = y;
  this.color = color;

  this.show  = function() {
    // empty space = GRAY
    if (this.color === 0) { fill(200) };
    // player 1 = RED
    if (this.color === 1) { fill(255, 0, 0) };
    // player 2 = YELLOW
    if (this.color === -1) { fill(255, 255, 0) };
    ellipse(this.x, this.y, 50, 50);
  }

  this.move = function(dir) {
    if(this.x + dir * spacing > 0 && this.x + dir * spacing < width) {
      this.x += dir * spacing;
      currentColumn += dir;
    }
  }

  // this.changePlayer = function() {
  //   if (currentPlayer === 1) {
  //     this.color = -1;
  //     currentPlayer = 2;
  //   } else if(currentPlayer === 2) {
  //     this.color = 1
  //     currentPlayer = 1;
  //   }
  // }

  this.changeColor = function() {
    if (this.color === 0) {
      this.color = currentPlayer;
    } else {
      this.color *= -1;
    }
  }
}