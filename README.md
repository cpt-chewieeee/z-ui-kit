# Hexagons

```
  ...
  render() {
    const list = [
    ]
    for(var i = 0; i < 16; i++) {
      list.push({ title: `item ${i}`, context: 'info here', img: logo }) // title and context are required, img optional
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
  ...
``` 