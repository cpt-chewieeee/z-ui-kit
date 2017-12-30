var canvas = document.querySelector('#canvas'),
  ctx = canvas.getContext('2d'),
// <canvas id="canvas" width="600" height="500"></canvas>
  width = 20,
  height = 15,
  cellSideLength = 12,

  cellOffset = Math.sin(Math.PI / 180 * 30) * cellSideLength,	// The height "h": h = sin( 30°) * s
  cellHalfWidth = Math.cos(Math.PI / 180 * 30) * cellSideLength,	// The distance: r = cos( 30°) * s
  cellWidth = 2 * cellHalfWidth,			// The height of the surrounding rectangle: b = s + 2 * h
  cellHeight = cellSideLength + (2 * cellOffset), 	// The width of the surrounding rectangle: a = 2 * r

  mazeMap = [],
  cellStack = [],

  currentCell,
  visitedCells = 0,
  totalCells = width * height;

var Cell = function (x, y) {

  this.x = x;
  this.y = y;

  //ne, e, se, sw, w, nw
  this.walls = [1, 1, 1, 1, 1, 1];
}

Cell.prototype = {

  getNeighbours: function () {

    var neighbours = [],
      x = this.x,
      y = this.y,
      intactNeightbours = [];

    //odd row
    if (y % 2 !== 0) {

      if (mazeMap[x + 1] && mazeMap[x + 1][y - 1]) neighbours.push(mazeMap[x + 1][y - 1]); //ne
      if (mazeMap[x + 1] && mazeMap[x + 1][y + 0]) neighbours.push(mazeMap[x + 1][y]); //e
      if (mazeMap[x + 1] && mazeMap[x + 1][y + 1]) neighbours.push(mazeMap[x + 1][y + 1]); //se

      if (mazeMap[x][y + 1]) neighbours.push(mazeMap[x][y + 1]); //sw
      if (mazeMap[x - 1] && mazeMap[x - 1][y + 0]) neighbours.push(mazeMap[x - 1][y]); //w
      if (mazeMap[x][y - 1]) neighbours.push(mazeMap[x][y - 1]); //nw

      //even row
    } else {

      if (mazeMap[x + 0][y - 1]) neighbours.push(mazeMap[x][y - 1]); //ne
      if (mazeMap[x + 1] && mazeMap[x + 1][y + 0]) neighbours.push(mazeMap[x + 1][y]); //e
      if (mazeMap[x + 0][y + 1]) neighbours.push(mazeMap[x][y + 1]); //se

      if (mazeMap[x - 1] && mazeMap[x - 1][y + 1]) neighbours.push(mazeMap[x - 1][y + 1]); //sw
      if (mazeMap[x - 1] && mazeMap[x - 1][y + 0]) neighbours.push(mazeMap[x - 1][y]); //w
      if (mazeMap[x - 1] && mazeMap[x - 1][y - 1]) neighbours.push(mazeMap[x - 1][y - 1]); //nw
    }

    for (var i = 0; i < neighbours.length; i++) {
      if (neighbours[i].allWallsIntact()) intactNeightbours.push(neighbours[i]);
    }

    return intactNeightbours;
  },

  allWallsIntact: function () {

    return (this.walls.join('') === '111111');
  },

  knockdownWallTo: function (cell) {

    var xDiff = cell.x - this.x,
      yDiff = cell.y - this.y,
      wall;

    if (yDiff === 0 && xDiff === 1) wall = 1; //e
    if (yDiff === 0 && xDiff === -1) wall = 4; //w

    if (yDiff === -1 && xDiff === -1) wall = 5; //nw
    if (yDiff === -1 && xDiff === 1) wall = 0; //ne

    if (yDiff === 1 && xDiff === -1) wall = 3; //sw
    if (yDiff === 1 && xDiff === 1) wall = 2; //se

    //even
    if (xDiff === 0 && this.y % 2 === 0) {

      if (yDiff === -1) wall = 0; //ne
      if (yDiff === 1) wall = 2; //se
    }

    //odd
    if (xDiff === 0 && this.y % 2 !== 0) {

      if (yDiff === -1) wall = 5; //nw
      if (yDiff === 1) wall = 3; //sw
    }

    this.walls[wall] = 0;
  },

  draw: function () {

    if (this.allWallsIntact()) return;

    var px = this.x * cellWidth,
      py = this.y * (cellOffset + cellSideLength);

    if (this.y % 2 !== 0) {

      px += cellHalfWidth;
    }

    ctx.beginPath();

    if (this.walls[0]) {
      ctx.moveTo(px + cellHalfWidth, py);
      ctx.lineTo(px + cellWidth, py + cellOffset);
    }

    if (this.walls[1]) {
      ctx.moveTo(px + cellWidth, py + cellOffset);
      ctx.lineTo(px + cellWidth, py + cellHeight - cellOffset);
    }

    if (this.walls[2]) {
      ctx.moveTo(px + cellWidth, py + cellHeight - cellOffset);
      ctx.lineTo(px + cellHalfWidth, py + cellHeight);
    }

    if (this.walls[3]) {
      ctx.moveTo(px + cellHalfWidth, py + cellHeight);
      ctx.lineTo(px, py + cellHeight - cellOffset);
    }

    if (this.walls[4]) {
      ctx.moveTo(px, py + cellHeight - cellOffset);
      ctx.lineTo(px, py + cellOffset);
    }

    if (this.walls[5]) {
      ctx.moveTo(px, py + cellOffset);
      ctx.lineTo(px + cellHalfWidth, py);
    }

    ctx.closePath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}


function init() {

  canvas.width = (width * cellWidth) + cellWidth;
  canvas.height = height * cellHeight;
  setup();
}

function setup() {

  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      if (!mazeMap[x]) mazeMap[x] = [];
      mazeMap[x][y] = new Cell(x, y);
    }
  }

  currentCell = mazeMap[Math.floor(Math.random() * width)][Math.floor(Math.random() * height)];
  visitedCells = 1;

  loop();
}

function loop() {

  if (visitedCells === totalCells) {

    window.setTimeout(function () {
      setup();
    }, 2500);

    return;
  }

  var neighbours = currentCell.getNeighbours(),
    nextCell;

  if (neighbours.length) {

    nextCell = neighbours[Math.floor(Math.random() * neighbours.length)];

    currentCell.knockdownWallTo(nextCell);
    nextCell.knockdownWallTo(currentCell);

    cellStack.push(nextCell);
    visitedCells += 1;

    currentCell = nextCell;

    window.requestAnimationFrame(loop);

  } else {

    currentCell = cellStack.pop();

    loop();
  }

  draw();
}

function draw() {

  var x, y;

  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (x = 0; x < width; x++) {
    for (y = 0; y < height; y++) {

      mazeMap[x][y].draw();
    }
  }
}

init();