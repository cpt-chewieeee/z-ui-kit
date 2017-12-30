class Node {
  constructor(x, y) {
    this.x = x
    this.y = y

    this.walls = [1, 1, 1, 1, 1, 1] // [ne, e, se, sw, w, nw]

    this.getNeighbours = this.getNeighbours.bind(this)
    this.allWallsIntact = this.allWallsIntact.bind(this)
    this.wallsToggle = this.wallsToggle.bind(this)
    this.render = this.render.bind(this)
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
  wallsToggle (node) {
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
  render (ctx, stats) {
    // console.log('--1->', ctx)
    // console.log('--2->', stats)
    if (this.allWallsIntact()) return
    let px = this.x * stats.nodeWidth
    const py = this.y * (stats.nodeOffset + stats.nodeSideLength)

    if (this.y % 2 !== 0) {
      px += stats.nodeHalfWidth
    }
    ctx.beginPath()

    if (this.walls[0]) { 
      ctx.moveTo(px + stats.nodeHalfWidth, py)
      ctx.lineTo(px + stats.nodeWidth, py + stats.nodeOffset)
    }
    if (this.walls[1]) { 
      ctx.moveTo(px + stats.nodeWidth, py + stats.nodeOffset)
      ctx.lineTo(px + stats.nodeWidth, py + stats.nodeHeight - stats.nodeOffset)
    }
    if (this.walls[2]) { 
      ctx.moveTo(px + stats.nodeWidth, py + stats.nodeHeight - stats.nodeOffset)
      ctx.lineTo(px + stats.nodeHalfWidth, py + stats.nodeHeight)
    }
    if (this.walls[3]) { 
      ctx.moveTo(px + stats.nodeHalfWidth, py + stats.nodeHeight)
      ctx.lineTo(px, py + stats.nodeHeight - stats.nodeOffset)
    }
    if (this.walls[4]) { 
      ctx.moveTo(px, py + stats.nodeHeight - stats.nodeOffset)
      ctx.lineTo(px, py + stats.nodeOffset)
    }
    if (this.walls[5]) { 
      ctx.moveTo(px, py + stats.nodeOffset)
      ctx.lineTo(px + stats.nodeHalfWidth, py)
    }

    ctx.closePath()
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 2
    ctx.stroke()
  }
}

export default Node