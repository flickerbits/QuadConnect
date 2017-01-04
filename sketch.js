var columns = [];
var currentPiece;
var lastPiece;
var currentPlayer = 1;
var currentCol = 0;
var spacing = 60;
var bg = {'r':0, 'g':0, 'b':200};

// required P5.js function
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
  // console.log(columns);
  currentPiece = new GamePiece(40, 95, currentPlayer);
}

// required P5.js function
function draw() {
  background(bg.r, bg.g, bg.b);

  // title text
  fill(255);
  textSize(45);
  text("quadCONNECT", 160, 50);

  currentPiece.show();
  for (var i = 0; i < columns.length; i++) {
    for (var j = 0; j < columns[i].length; j++) {
      columns[i][j].show();
    }
  }
}

// native P5.js function
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    currentPiece.move(1);
  } else if (keyCode === LEFT_ARROW) {
    currentPiece.move(-1);
  } else if (keyCode === DOWN_ARROW) {
    var flag = 0;
    for (var i =  0; i < columns[currentCol].length; i++) {
      if (columns[currentCol][i].color === 0 && flag === 0) {
        columns[currentCol][i].changeColor()
        flag = 1;
        if (checkWinner(currentCol, i)) {
          console.log("The Winner is Player ", currentPlayer);
          // change background to green when there is a winner
          bg = {'r':0, 'g':180, 'b':0};
          redraw();
        }
        currentPiece.changeColor();
        currentPlayer *= -1;
      }
    }
  }
}

































