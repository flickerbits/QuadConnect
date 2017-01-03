var columns = [];

function setup() {
  createCanvas(500, 500);
  var x = 40;
  var y = 450;

  for (var i = 0; i < 8; i++) {
    columns[i]= [];
    for (var j = 0; j < 6; j++) {
      var gamePiece = new GamePiece(x, y - (j * 60), 0);
      ellipse(x, y - (j * 60), 50, 50);
      columns[i].push(gamePiece);
    }
    x += 60;
  }
  console.log(columns);
}

function draw() {
  background(0, 0, 200);
  for (var i = 0; i < columns.length; i++) {
    for (var j = 0; j < columns[i].length; j++) {
      columns[i][j].show();
    }
  }
}

