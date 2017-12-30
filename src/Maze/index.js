import Node from './node'
class Maze {
  constructor(domEl) {
    if (!domEl) {
      return new Error('require domEl')
    }
    this.canvas = document.querySelector(domEl)

    this.ctx = this.canvas.getContext('2d')
    this.width = 6
    this.height = 4
    this.nodeSideLength = 12

    this.nodeOffset = Math.sin(Math.PI / 180 * 30) * this.nodeSideLength // sin (30°) * s
    this.nodeHalfWidth = Math.cos(Math.PI / 180 * 30) * this.nodeSideLength // distance: radius = cos( 30° ) * s
    this.nodeWidth = 2 * this.nodeHalfWidth // height around rectangle: b = s + 2 * h
    this.nodeHeight = this.nodeSideLength + (2 * this.nodeOffset) // width around rectangle: a = 2 * r

    this.mazeMap = []
    this.nodeStack = []
    this.currentNode = null
    this.vistedNodes = 0
    this.totalNodes = this.width * this.height

    this.init = this.init.bind(this)
    this.build = this.build.bind(this)
    this.loop = this.loop.bind(this)
    this.draw = this.draw.bind(this)
  }
  init () {
    this.canvas.width = (this.width * this.nodeWidth) + this.nodeWidth
    this.canvas.height = this.height * this.nodeHeight - 16
    this.build()
  }
  build () {
    for(let i = 0; i < this.width; i++) {
      for(let j = 0; j < this.height; j++) {
        if (!this.mazeMap[i]) { this.mazeMap[i] = []}

        this.mazeMap[i][j] = new Node(i, j)
      }
    }
    console.log(this.mazeMap)
    // this.currentCell = this.mazeMap[0][0]
    const i = Math.floor(Math.random() * this.width)
    const j = Math.floor(Math.random() * this.height)
    // console.log('i', i)
    // console.log('j', j)
    this.currentNode = this.mazeMap[i][j] // random generator :D
    // console.log('===>', this.currentCell)
    this.vistedNodes = 1

    this.loop()
  }
  loop () {
    if (this.vistedNodes === this.totalNodes) {
      window.setTimeout(() => {
        this.build()
      }, 2500)
      return
    }
    const neighbours = this.currentNode.getNeighbours(this.mazeMap)
    // console.log('--neighbors->', neighbours)
    let nextCell = null
    if(neighbours.length) {
      // console.log('1')
      nextCell = neighbours[Math.floor(Math.random() * neighbours.length)]

      this.currentNode.knockdownWallTo(nextCell)
      nextCell.knockdownWallTo(this.currentNode)

      this.nodeStack.push(nextCell)
      this.vistedNodes += 1

      this.currentNode = nextCell
      window.requestAnimationFrame(this.loop.bind(this))
    } else {
      // console.log('2')
      this.currentNode = this.nodeStack.pop()
      this.loop()
    }
    this.draw()
  }
  draw () {
    // console.log('drawing--->')
    this.ctx.fillStyle = 'blue'
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

    for(let i = 0; i < this.width; i++) {
      for(let j = 0; j < this.height; j++) {
        this.mazeMap[i][j].draw(this.ctx, {
          cellWidth: this.nodeWidth, 
          cellHeight: this.nodeHeight, 
          cellOffset: this.nodeOffset, 
          cellSideLength: this.nodeSideLength, 
          cellHalfWidth: this.nodeHalfWidth
        })
      }
    }
  }
}
export default Maze