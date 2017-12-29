import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { Hexagon } from 'z-ui-kit';
// import {}
class App extends Component {
  constructor(props) {
    super(props) 
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (item) {
    console.log(item)
  }
  render() {
    const list = [
    ]
    for(var i = 0; i < 16; i++) {
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
       
      </div>
    );
  }
}

export default App;
