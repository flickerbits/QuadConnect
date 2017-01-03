var board = [];

function setup() {
  createCanvas(450, 500);
  var x = 45;
  var y = 450;

  for (var i = 1; i < 8; i++) {
    for (var j = 0; j < 6; j++) {
      var gamePiece = new GamePiece(x, y - (j * 60))
      ellipse(x, y - (j * 60), 50, 50)
      board.push(gamePiece);
    }
    x += 60;
  }
  // console.log(board)
}

function draw() {
  background(0, 0, 200);
  for (var i = 0; i < board.length; i++) {
    board[i].show()
  }
}

