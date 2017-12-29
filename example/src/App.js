import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { Hexagon } from 'z-ui-kit';
// import {}
class App extends Component {
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
        />
       
      </div>
    );
  }
}

export default App;
