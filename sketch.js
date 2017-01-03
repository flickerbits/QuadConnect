var columns = [];
var currentPiece;
var currentPlayer = 1;
var currentCol = 0;
var spacing = 60;

function setup() {
  createCanvas(500, 500);
  var x = 40;
  var y = 455;

  for (var i = 0; i < 8; i++) {
    columns[i]= [];
    for (var j = 0; j < 6; j++) {
      var gamePiece = new GamePiece(x, y - (j * spacing), 0);
      ellipse(x, y - (j * spacing), 50, 50);
      columns[i].push(gamePiece);
    }
    x += spacing;
  }
  console.log(columns);
  currentPiece = new GamePiece(40, 95, currentPlayer);
}

function draw() {
  background(0, 0, 200);
  currentPiece.show();

  for (var i = 0; i < columns.length; i++) {
    for (var j = 0; j < columns[i].length; j++) {
      columns[i][j].show();
    }
  }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    currentPiece.move(1);
  } else if (keyCode === LEFT_ARROW) {
    currentPiece.move(-1);
  } else if (keyCode === DOWN_ARROW) {

    var flag = 1;
    for (var i =  0; i < columns[currentCol].length; i++) {
      if (columns[currentCol][i].color === 0 && flag === 1) {
        columns[currentCol][i].changeColor()
        flag = 0;
      }
    }
    currentPiece.changeColor();
    currentPlayer *= -1;
  }
}