import Node from './node'
class Maze {
  constructor(domEl, cb = null) {
    if (!domEl) {
      return new Error('require domEl')
    }
    this.canvas = document.querySelector(domEl)
    this.cb = cb
    this.ctx = this.canvas.getContext('2d')
    this.width = 16
    this.height = 8
    this.nodeSideLength = 20 //12

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
    this.render = this.render.bind(this)
  }
  init () {
    this.canvas.width = (this.width * this.nodeWidth) + this.nodeWidth
    this.canvas.height = this.height * (this.nodeHeight / 2) + 100
    this.build()
  }
  build () {
    for(let i = 0; i < this.width; i++) {
      for(let j = 0; j < this.height; j++) {
        if (!this.mazeMap[i]) { this.mazeMap[i] = []}

        this.mazeMap[i][j] = new Node(i, j)
      }
    }
    const i = Math.floor(Math.random() * this.width)
    const j = Math.floor(Math.random() * this.height)

    this.currentNode = this.mazeMap[i][j] // random generator :D
    this.vistedNodes = 1

    this.loop()
  }
  loop () {
    if (this.vistedNodes === this.totalNodes) {
      window.setTimeout(() => {
        // this.build() // restart
        if (this.cb) {
          this.cb(this)
        }
      }, 2500)
      return
    }
    const neighbours = this.currentNode.getNeighbours(this.mazeMap)

    let nextNode = null
    if(neighbours.length) {
      nextNode = neighbours[Math.floor(Math.random() * neighbours.length)]

      this.currentNode.wallsToggle(nextNode)
      nextNode.wallsToggle(this.currentNode)

      this.nodeStack.push(nextNode)
      this.vistedNodes += 1

      this.currentNode = nextNode
      window.requestAnimationFrame(this.loop.bind(this))
    } else {
      this.currentNode = this.nodeStack.pop()
      this.loop()
    }
    this.render()
  }
  render () {
    this.ctx.fillStyle = 'yellow'
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

    for(let i = 0; i < this.width; i++) {
      for(let j = 0; j < this.height; j++) {
        this.mazeMap[i][j].render(this.ctx, {
          nodeWidth: this.nodeWidth, 
          nodeHeight: this.nodeHeight, 
          nodeOffset: this.nodeOffset, 
          nodeSideLength: this.nodeSideLength, 
          nodeHalfWidth: this.nodeHalfWidth
        })
      }
    }
  }
}
export default Maze