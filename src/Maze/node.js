class Node {
  constructor(x, y) {
    this.x = x
    this.y = y

    this.walls = [1, 1, 1, 1, 1, 1] // [ne, e, se, sw, w, nw]

    this.getNeighbours = this.getNeighbours.bind(this)
    this.allWallsIntact = this.allWallsIntact.bind(this)
    this.knockdownWallTo = this.knockdownWallTo.bind(this)
    this.draw = this.draw.bind(this)
  }
  getNeighbours (maze) {
    const neighbours = []
    const x = this.x
    const y = this.y
    const intactNeightbours = []

    if (y % 2 !== 0) { // odd
      if (maze[x + 1] && maze[x + 1][y - 1]) neighbours.push(maze[x + 1][y - 1]) // ne
      if (maze[x + 1] && maze[x + 1][y + 0]) neighbours.push(maze[x + 1][y]) // e
      if (maze[x + 1] && maze[x + 1][y + 1]) neighbours.push(maze[x + 1][y + 1]) // se
    
      if (maze[x][y + 1]) neighbours.push(maze[x][y + 1]) // sw
      if (maze[x - 1] && maze[x - 1][y + 0]) neighbours.push(maze[x - 1][y]) // w
      if (maze[x][y - 1]) neighbours.push(maze[x][y - 1]) // nw
    } else { // even
      if (maze[x + 0][y - 1]) neighbours.push(maze[x][y - 1]); //ne
      if (maze[x + 1] && maze[x + 1][y + 0]) neighbours.push(maze[x + 1][y]); //e
      if (maze[x + 0][y + 1]) neighbours.push(maze[x][y + 1]); //se

      if (maze[x - 1] && maze[x - 1][y + 1]) neighbours.push(maze[x - 1][y + 1]); //sw
      if (maze[x - 1] && maze[x - 1][y + 0]) neighbours.push(maze[x - 1][y]); //w
      if (maze[x - 1] && maze[x - 1][y - 1]) neighbours.push(maze[x - 1][y - 1]); //nw
    }

    for (let i = 0; i < neighbours.length; i++) {
      if (neighbours[i].allWallsIntact()) intactNeightbours.push(neighbours[i])
    }
    return intactNeightbours
  }
  allWallsIntact () {
    return (this.walls.join('') === '111111')
  }
  knockdownWallTo (node) {
    const x_diff = node.x - this.x
    const y_diff = node.y - this.y
    let wall = null

    // edge cases:
    if (y_diff === 0 && x_diff === 1) wall = 1 // e
    if (y_diff === 0 && x_diff === -1) wall = 4; //w

    if (y_diff === -1 && x_diff === -1) wall = 5; //nw
    if (y_diff === -1 && x_diff === 1) wall = 0; //ne

    if (y_diff === 1 && x_diff === -1) wall = 3; //sw
    if (y_diff === 1 && x_diff === 1) wall = 2; //se

    // even
    if (x_diff === 0 && this.y % 2 === 0) {
      if (y_diff === -1) wall = 0 // ne
      if (y_diff === 1) wall = 2 // se
    }
    // odd
    if (x_diff === 0 && this.y % 2 !== 0) {
      if (y_diff === -1) wall = 5 // nw
      if (y_diff === 1) wall = 3 // sw
    }

    this.walls[wall] = 0
  }
  /**
   * 
   * @param {*} ctx 
   * @param {object} stats - { cellWidth, cellHeight, cellOffset, cellSideLength, cellHalfWidth} 
   */
  draw (ctx, stats) {
    // console.log('--1->', ctx)
    // console.log('--2->', stats)
    if (this.allWallsIntact()) return
    let px = this.x * stats.cellWidth
    const py = this.y * (stats.cellOffset + stats.cellSideLength)

    if (this.y % 2 !== 0) {
      px += stats.cellHalfWidth
    }
    ctx.beginPath()

    if (this.walls[0]) { 
      ctx.moveTo(px + stats.cellHalfWidth, py)
      ctx.lineTo(px + stats.cellWidth, py + stats.cellOffset)
    }
    if (this.walls[1]) { 
      ctx.moveTo(px + stats.cellWidth, py + stats.cellOffset)
      ctx.lineTo(px + stats.cellWidth, py + stats.cellHeight - stats.cellOffset)
    }
    if (this.walls[2]) { 
      ctx.moveTo(px + stats.cellWidth, py + stats.cellHeight - stats.cellOffset)
      ctx.lineTo(px + stats.cellHalfWidth, py + stats.cellHeight)
    }
    if (this.walls[3]) { 
      ctx.moveTo(px + stats.cellHalfWidth, py + stats.cellHeight)
      ctx.lineTo(px, py + stats.cellHeight - stats.cellOffset)
    }
    if (this.walls[4]) { 
      ctx.moveTo(px, py + stats.cellHeight - stats.cellOffset)
      ctx.lineTo(px, py + stats.cellOffset)
    }
    if (this.walls[5]) { 
      ctx.moveTo(px, py + stats.cellOffset)
      ctx.lineTo(px + stats.cellHalfWidth, py)
    }

    ctx.closePath()
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 2
    ctx.stroke()
  }
}

export default Node