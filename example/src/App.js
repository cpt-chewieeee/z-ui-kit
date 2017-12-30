import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { Hexagon, Maze } from 'z-ui-kit';

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      started: false
    }
    this.maze = null
    this.handleClick = this.handleClick.bind(this)
    this.startMaze = this.startMaze.bind(this)
  }
  startMaze () {
    this.maze.init()
    this.setState({ started: true })
  }
  componentDidMount () {
    this.maze = new Maze('#maze-demo', (status) => this.setState({ started: false }))
  }
  handleClick (item) {
    console.log(item)
  }
  render() {
    // console.log(this.maze)
    const list = [
    ]
    for(var i = 0; i < 2; i++) {
      list.push({ title: `item ${i}`, context: 'info here', img: logo })
    }
    return (
      <div className="App">

        <Hexagon 
          list={list}
          defaultIcon={logo}
          onClick={this.handleClick}
          style={{
            backgroundColor: 'red',
            color: 'white'
          }}
        />
       <hr />
        <div className='maze-demo'>
          {
            this.state.started?
            '':
              <button className='maze-start' onClick={() => this.startMaze()}>Start</button>
          }
          <canvas id='maze-demo' width='145' height='80' style={{backgroundColor: 'red'}} />
        </div>
      </div>
    );
  }
}

export default App;
