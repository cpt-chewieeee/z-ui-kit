'use strict';

function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  head.appendChild(style);
  
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  return returnValue;
}

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Item = function (_React$Component) {
  inherits(Item, _React$Component);

  function Item() {
    classCallCheck(this, Item);
    return possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
  }

  createClass(Item, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var style = {
        backgroundColor: '#fff',
        color: '#000'
      };
      if (this.props.style) {
        style = this.props.style;
      }
      return React.createElement(
        'li',
        { className: 'zuk-hex-item', onClick: function onClick() {
            return _this2.props.onClick && _this2.props.onClick(_this2.props.item);
          } },
        React.createElement(
          'div',
          { className: 'zuk-hex-container' },
          React.createElement(
            'a',
            { className: 'zuk-hex-a' },
            React.createElement('img', { src: this.props.item.src ? this.props.item.src : this.props.defaultIcon, alt: '' }),
            React.createElement(
              'h1',
              { style: style },
              this.props.item.title
            ),
            React.createElement(
              'p',
              { style: style },
              this.props.item.context
            )
          )
        )
      );
    }
  }]);
  return Item;
}(React.Component);

Item.propTypes = {
  item: PropTypes.object.isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func
};

var List = function (_React$Component) {
  inherits(List, _React$Component);

  function List() {
    classCallCheck(this, List);
    return possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  createClass(List, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'ul',
        { className: 'zuk-hex-list' },
        this.props.list.map(function (item, key) {
          return React.createElement(Item, { key: key,
            item: item,
            onClick: _this2.props.onClick,
            defaultIcon: _this2.props.defaultIcon,
            style: _this2.props.style
          });
        })
      );
    }
  }]);
  return List;
}(React.Component);

List.propTypes = {
  list: PropTypes.array.isRequired,
  defaultIcon: PropTypes.string.isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func
};

__$styleInject(".zuk-hex-wrapper {\n  margin-top: 6%;\n}\n.zuk-hex-list {\n  display: flex;\n  flex-wrap: wrap;\n  width: 90%;\n  margin: 0 auto;\n  overflow: hidden;\n  font-size: 15px;\n  list-style-type: none;\n}\n\n.zuk-hex-item {\n  position: relative;\n  visibility: hidden;\n  outline: 1px solid transparent; /* fix for jagged edges in FF on hover transition */\n}\n.zuk-hex-item::after{\n  content: '';\n  display: block;\n  padding-bottom: 86.602%;  /* =  100 / tan(60) * 1.5 */\n}\n.zuk-hex-container{\n  position: absolute;\n  width: 96%;\n  padding-bottom: 110.851%; /* =  width / sin(60) */\n  margin: 0 2%;\n  overflow: hidden;\n  visibility: hidden;\n  outline:1px solid transparent; /* fix for jagged edges in FF on hover transition */\n  -webkit-transform: rotate3d(0,0,1,-60deg) skewY(30deg);\n      -ms-transform: rotate3d(0,0,1,-60deg) skewY(30deg);\n          transform: rotate3d(0,0,1,-60deg) skewY(30deg);\n}\n.zuk-hex-container * {\n  position: absolute;\n  visibility: visible;\n  outline: 1px solid transparent; /* fix for jagged edges in FF on hover transition */\n}\n.zuk-hex-a {\n    display: block;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    color: #000;\n    overflow: hidden;\n    -webkit-transform: skewY(-30deg) rotate3d(0,0,1,60deg);\n        -ms-transform: skewY(-30deg) rotate3d(0,0,1,60deg);\n            transform: skewY(-30deg) rotate3d(0,0,1,60deg);\n}\n\n/*** HEX CONTENT ***/\n.zuk-hex-item img {\n  left: -100%;\n  right: -100%;\n  width: auto;\n  height: 100%;\n  margin: 0 auto;\n  -webkit-transform: rotate3d(0,0,0,0deg);\n  -ms-transform: rotate3d(0,0,0,0deg);\n  transform: rotate3d(0,0,0,0deg);\n}\n\n.zuk-hex-item h1, .zuk-hex-item p {\n  width: 100%;\n  padding: 5%;\n  box-sizing:border-box;\n  font-weight: 300;\n  -webkit-transition:  -webkit-transform .2s ease-out, opacity .3s ease-out;\n  transition: transform .2s ease-out, opacity .3s ease-out;\n}\n.zuk-hex-item h1 {\n  bottom: 50%;\n  padding-top:50%;\n  font-size: 1.5em;\n  z-index: 1;\n  -webkit-transform: translate3d(0,-100%,0);\n      -ms-transform: translate3d(0,-100%,0);\n          transform: translate3d(0,-100%,0);\n}\n.zuk-hex-item h1::after {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  left: 45%;\n  width: 10%;\n  text-align: center;\n}\n.zuk-hex-item p {\n  top: 50%;\n  padding-bottom:50%;\n  -webkit-transform: translate3d(0,100%,0);\n      -ms-transform: translate3d(0,100%,0);\n          transform: translate3d(0,100%,0);\n}\n\n\n/*** HOVER EFFECT  ***/\n.zuk-hex-a:hover h1, .zuk-hex-a:focus h1,\n.zuk-hex-a:hover p, .zuk-hex-a:focus p{\n  -webkit-transform: translate3d(0,0,0);\n      -ms-transform: translate3d(0,0,0);\n          transform: translate3d(0,0,0);\n}\n\n/*** HEXAGON SIZING AND EVEN ROW INDENTATION ***/\n@media (min-width:1201px) { /* <- 5-4  hexagons per row */\n  .zuk-hex-list {\n    padding-bottom: 4.4%\n  }\n  .zuk-hex-item {\n    width: 20%; /* = 100 / 5 */\n  }\n  .zuk-hex-item:nth-child(9n+6) { /* first hexagon of even rows */\n    margin-left: 10%;  /* = width of .hex / 2  to indent even rows */\n  }\n}\n\n@media (max-width: 1200px) and (min-width:901px) { /* <- 4-3  hexagons per row */\n  .zuk-hex-list {\n    padding-bottom: 5.5%\n  }\n  .zuk-hex-item {\n    width: 25%; /* = 100 / 4 */\n  }\n  .zuk-hex-item:nth-child(7n+5) { /* first hexagon of even rows */\n    margin-left:12.5%;  /* = width of .hex / 2  to indent even rows */\n  }\n}\n\n@media (max-width: 900px) and (min-width:601px) { /* <- 3-2  hexagons per row */\n  .zuk-hex-list {\n    padding-bottom: 7.4%\n  }\n  .zuk-hex-item {\n    width: 33.333%; /* = 100 / 3 */\n  }\n  .zuk-hex-item:nth-child(5n+4) { /* first hexagon of even rows */\n    margin-left:16.666%;  /* = width of .hex / 2  to indent even rows */\n  }\n}\n\n@media (max-width: 600px) { /* <- 2-1  hexagons per row */\n  .zuk-hex-list {\n    padding-bottom: 11.2%\n  }\n  .zuk-hex-item {\n    width: 50%; /* = 100 / 3 */\n  }\n  .zuk-hex-item:nth-child(3n+3) { /* first hexagon of even rows */\n    margin-left:25%;  /* = width of .hex / 2  to indent even rows */\n  }\n}\n\n@media (max-width: 400px) {\n    .zuk-hex-list {\n        font-size: 13px;\n    }\n}\n", undefined);

var HexagonList = function (_React$Component) {
  inherits(HexagonList, _React$Component);

  function HexagonList() {
    classCallCheck(this, HexagonList);
    return possibleConstructorReturn(this, (HexagonList.__proto__ || Object.getPrototypeOf(HexagonList)).apply(this, arguments));
  }

  createClass(HexagonList, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'zuk-kex-wrapper' },
        React.createElement(List, this.props)
      );
    }
  }]);
  return HexagonList;
}(React.Component);

HexagonList.propTypes = {
  list: PropTypes.array.isRequired,
  defaultIcon: PropTypes.string.isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func
};

var Node = function () {
  function Node(x, y) {
    classCallCheck(this, Node);

    this.x = x;
    this.y = y;

    this.walls = [1, 1, 1, 1, 1, 1]; // [ne, e, se, sw, w, nw]

    this.getNeighbours = this.getNeighbours.bind(this);
    this.allWallsIntact = this.allWallsIntact.bind(this);
    this.knockdownWallTo = this.knockdownWallTo.bind(this);
    this.draw = this.draw.bind(this);
  }

  createClass(Node, [{
    key: 'getNeighbours',
    value: function getNeighbours(maze) {
      var neighbours = [];
      var x = this.x;
      var y = this.y;
      var intactNeightbours = [];

      if (y % 2 !== 0) {
        // odd
        if (maze[x + 1] && maze[x + 1][y - 1]) neighbours.push(maze[x + 1][y - 1]); // ne
        if (maze[x + 1] && maze[x + 1][y + 0]) neighbours.push(maze[x + 1][y]); // e
        if (maze[x + 1] && maze[x + 1][y + 1]) neighbours.push(maze[x + 1][y + 1]); // se

        if (maze[x][y + 1]) neighbours.push(maze[x][y + 1]); // sw
        if (maze[x - 1] && maze[x - 1][y + 0]) neighbours.push(maze[x - 1][y]); // w
        if (maze[x][y - 1]) neighbours.push(maze[x][y - 1]); // nw
      } else {
        // even
        if (maze[x + 0][y - 1]) neighbours.push(maze[x][y - 1]); //ne
        if (maze[x + 1] && maze[x + 1][y + 0]) neighbours.push(maze[x + 1][y]); //e
        if (maze[x + 0][y + 1]) neighbours.push(maze[x][y + 1]); //se

        if (maze[x - 1] && maze[x - 1][y + 1]) neighbours.push(maze[x - 1][y + 1]); //sw
        if (maze[x - 1] && maze[x - 1][y + 0]) neighbours.push(maze[x - 1][y]); //w
        if (maze[x - 1] && maze[x - 1][y - 1]) neighbours.push(maze[x - 1][y - 1]); //nw
      }

      for (var i = 0; i < neighbours.length; i++) {
        if (neighbours[i].allWallsIntact()) intactNeightbours.push(neighbours[i]);
      }
      return intactNeightbours;
    }
  }, {
    key: 'allWallsIntact',
    value: function allWallsIntact() {
      return this.walls.join('') === '111111';
    }
  }, {
    key: 'knockdownWallTo',
    value: function knockdownWallTo(node) {
      var x_diff = node.x - this.x;
      var y_diff = node.y - this.y;
      var wall = null;

      // edge cases:
      if (y_diff === 0 && x_diff === 1) wall = 1; // e
      if (y_diff === 0 && x_diff === -1) wall = 4; //w

      if (y_diff === -1 && x_diff === -1) wall = 5; //nw
      if (y_diff === -1 && x_diff === 1) wall = 0; //ne

      if (y_diff === 1 && x_diff === -1) wall = 3; //sw
      if (y_diff === 1 && x_diff === 1) wall = 2; //se

      // even
      if (x_diff === 0 && this.y % 2 === 0) {
        if (y_diff === -1) wall = 0; // ne
        if (y_diff === 1) wall = 2; // se
      }
      // odd
      if (x_diff === 0 && this.y % 2 !== 0) {
        if (y_diff === -1) wall = 5; // nw
        if (y_diff === 1) wall = 3; // sw
      }

      this.walls[wall] = 0;
    }
    /**
     * 
     * @param {*} ctx 
     * @param {object} stats - { cellWidth, cellHeight, cellOffset, cellSideLength, cellHalfWidth} 
     */

  }, {
    key: 'draw',
    value: function draw(ctx, stats) {
      // console.log('--1->', ctx)
      // console.log('--2->', stats)
      if (this.allWallsIntact()) return;
      var px = this.x * stats.cellWidth;
      var py = this.y * (stats.cellOffset + stats.cellSideLength);

      if (this.y % 2 !== 0) {
        px += stats.cellHalfWidth;
      }
      ctx.beginPath();

      if (this.walls[0]) {
        ctx.moveTo(px + stats.cellHalfWidth, py);
        ctx.lineTo(px + stats.cellWidth, py + stats.cellOffset);
      }
      if (this.walls[1]) {
        ctx.moveTo(px + stats.cellWidth, py + stats.cellOffset);
        ctx.lineTo(px + stats.cellWidth, py + stats.cellHeight - stats.cellOffset);
      }
      if (this.walls[2]) {
        ctx.moveTo(px + stats.cellWidth, py + stats.cellHeight - stats.cellOffset);
        ctx.lineTo(px + stats.cellHalfWidth, py + stats.cellHeight);
      }
      if (this.walls[3]) {
        ctx.moveTo(px + stats.cellHalfWidth, py + stats.cellHeight);
        ctx.lineTo(px, py + stats.cellHeight - stats.cellOffset);
      }
      if (this.walls[4]) {
        ctx.moveTo(px, py + stats.cellHeight - stats.cellOffset);
        ctx.lineTo(px, py + stats.cellOffset);
      }
      if (this.walls[5]) {
        ctx.moveTo(px, py + stats.cellOffset);
        ctx.lineTo(px + stats.cellHalfWidth, py);
      }

      ctx.closePath();
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }]);
  return Node;
}();

var Maze$1 = function () {
  function Maze(domEl) {
    classCallCheck(this, Maze);

    if (!domEl) {
      return new Error('require domEl');
    }
    this.canvas = document.querySelector(domEl);

    this.ctx = this.canvas.getContext('2d');
    this.width = 6;
    this.height = 4;
    this.nodeSideLength = 12;

    this.nodeOffset = Math.sin(Math.PI / 180 * 30) * this.nodeSideLength; // sin (30°) * s
    this.nodeHalfWidth = Math.cos(Math.PI / 180 * 30) * this.nodeSideLength; // distance: radius = cos( 30° ) * s
    this.nodeWidth = 2 * this.nodeHalfWidth; // height around rectangle: b = s + 2 * h
    this.nodeHeight = this.nodeSideLength + 2 * this.nodeOffset; // width around rectangle: a = 2 * r

    this.mazeMap = [];
    this.nodeStack = [];
    this.currentNode = null;
    this.vistedNodes = 0;
    this.totalNodes = this.width * this.height;

    this.init = this.init.bind(this);
    this.build = this.build.bind(this);
    this.loop = this.loop.bind(this);
    this.draw = this.draw.bind(this);
  }

  createClass(Maze, [{
    key: 'init',
    value: function init() {
      this.canvas.width = this.width * this.nodeWidth + this.nodeWidth;
      this.canvas.height = this.height * this.nodeHeight - 16;
      this.build();
    }
  }, {
    key: 'build',
    value: function build() {
      for (var _i = 0; _i < this.width; _i++) {
        for (var _j = 0; _j < this.height; _j++) {
          if (!this.mazeMap[_i]) {
            this.mazeMap[_i] = [];
          }

          this.mazeMap[_i][_j] = new Node(_i, _j);
        }
      }
      console.log(this.mazeMap);
      // this.currentCell = this.mazeMap[0][0]
      var i = Math.floor(Math.random() * this.width);
      var j = Math.floor(Math.random() * this.height);
      // console.log('i', i)
      // console.log('j', j)
      this.currentNode = this.mazeMap[i][j]; // random generator :D
      // console.log('===>', this.currentCell)
      this.vistedNodes = 1;

      this.loop();
    }
  }, {
    key: 'loop',
    value: function loop() {
      var _this = this;

      if (this.vistedNodes === this.totalNodes) {
        window.setTimeout(function () {
          _this.build();
        }, 2500);
        return;
      }
      var neighbours = this.currentNode.getNeighbours(this.mazeMap);
      // console.log('--neighbors->', neighbours)
      var nextCell = null;
      if (neighbours.length) {
        // console.log('1')
        nextCell = neighbours[Math.floor(Math.random() * neighbours.length)];

        this.currentNode.knockdownWallTo(nextCell);
        nextCell.knockdownWallTo(this.currentNode);

        this.nodeStack.push(nextCell);
        this.vistedNodes += 1;

        this.currentNode = nextCell;
        window.requestAnimationFrame(this.loop.bind(this));
      } else {
        // console.log('2')
        this.currentNode = this.nodeStack.pop();
        this.loop();
      }
      this.draw();
    }
  }, {
    key: 'draw',
    value: function draw() {
      // console.log('drawing--->')
      this.ctx.fillStyle = 'blue';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

      for (var i = 0; i < this.width; i++) {
        for (var j = 0; j < this.height; j++) {
          this.mazeMap[i][j].draw(this.ctx, {
            cellWidth: this.nodeWidth,
            cellHeight: this.nodeHeight,
            cellOffset: this.nodeOffset,
            cellSideLength: this.nodeSideLength,
            cellHalfWidth: this.nodeHalfWidth
          });
        }
      }
    }
  }]);
  return Maze;
}();

var Hexagon = HexagonList;
var Maze = Maze$1;

exports.Hexagon = Hexagon;
exports.Maze = Maze;
