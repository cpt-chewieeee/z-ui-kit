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
      return React.createElement(
        'li',
        { className: 'zuk-hex-item' },
        React.createElement(
          'div',
          { className: 'zuk-hex-container' },
          React.createElement(
            'a',
            { className: 'zuk-hex-a' },
            React.createElement('img', { src: this.props.item.src ? this.props.item.src : this.props.defaultIcon, alt: '' }),
            React.createElement(
              'h1',
              null,
              this.props.item.title
            ),
            React.createElement(
              'p',
              null,
              this.props.item.context
            )
          )
        )
      );
    }
  }]);
  return Item;
}(React.Component);

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
            defaultIcon: _this2.props.defaultIcon
          });
        })
      );
    }
  }]);
  return List;
}(React.Component);

List.propTypes = {
  list: PropTypes.array.isRequired,
  defaultIcon: PropTypes.string.isRequired
};

__$styleInject(".zuk-hex-wrapper {\n  margin-top: 6%;\n}\n.zuk-hex-list {\n  display: flex;\n  flex-wrap: wrap;\n  width: 90%;\n  margin: 0 auto;\n  overflow: hidden;\n  font-size: 15px;\n  list-style-type: none;\n}\n\n.zuk-hex-item {\n  position: relative;\n  visibility: hidden;\n  outline: 1px solid transparent; /* fix for jagged edges in FF on hover transition */\n}\n.zuk-hex-item::after{\n  content: '';\n  display: block;\n  padding-bottom: 86.602%;  /* =  100 / tan(60) * 1.5 */\n}\n.zuk-hex-container{\n  position: absolute;\n  width: 96%;\n  padding-bottom: 110.851%; /* =  width / sin(60) */\n  margin: 0 2%;\n  overflow: hidden;\n  visibility: hidden;\n  outline:1px solid transparent; /* fix for jagged edges in FF on hover transition */\n  -webkit-transform: rotate3d(0,0,1,-60deg) skewY(30deg);\n      -ms-transform: rotate3d(0,0,1,-60deg) skewY(30deg);\n          transform: rotate3d(0,0,1,-60deg) skewY(30deg);\n}\n.zuk-hex-container * {\n  position: absolute;\n  visibility: visible;\n  outline: 1px solid transparent; /* fix for jagged edges in FF on hover transition */\n}\n.zuk-hex-a {\n    display: block;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    color: #000;\n    overflow: hidden;\n    -webkit-transform: skewY(-30deg) rotate3d(0,0,1,60deg);\n        -ms-transform: skewY(-30deg) rotate3d(0,0,1,60deg);\n            transform: skewY(-30deg) rotate3d(0,0,1,60deg);\n}\n\n/*** HEX CONTENT **********************************************************************/\n.zuk-hex-item img {\n  left: -100%;\n  right: -100%;\n  width: auto;\n  height: 100%;\n  margin: 0 auto;\n  -webkit-transform: rotate3d(0,0,0,0deg);\n      -ms-transform: rotate3d(0,0,0,0deg);\n          transform: rotate3d(0,0,0,0deg);\n}\n\n.zuk-hex-item h1, .zuk-hex-item p {\n  width: 100%;\n  padding: 5%;\n  box-sizing:border-box;\n  background-color: yellow;\n  font-weight: 300;\n  -webkit-transition:  -webkit-transform .2s ease-out, opacity .3s ease-out;\n          transition:          transform .2s ease-out, opacity .3s ease-out;\n}\n.zuk-hex-item h1 {\n  bottom: 50%;\n  padding-top:50%;\n  font-size: 1.5em;\n  z-index: 1;\n  -webkit-transform: translate3d(0,-100%,0);\n      -ms-transform: translate3d(0,-100%,0);\n          transform: translate3d(0,-100%,0);\n}\n.zuk-hex-item h1::after {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  left: 45%;\n  width: 10%;\n  text-align: center;\n  border-bottom: 1px solid #fff;\n}\n.zuk-hex-item p {\n  top: 50%;\n  padding-bottom:50%;\n  -webkit-transform: translate3d(0,100%,0);\n      -ms-transform: translate3d(0,100%,0);\n          transform: translate3d(0,100%,0);\n}\n\n\n/*** HOVER EFFECT  **********************************************************************/\n.zuk-hex-a:hover h1, .zuk-hex-a:focus h1,\n.zuk-hex-a:hover p, .zuk-hex-a:focus p{\n  -webkit-transform: translate3d(0,0,0);\n      -ms-transform: translate3d(0,0,0);\n          transform: translate3d(0,0,0);\n}\n\n/*** HEXAGON SIZING AND EVEN ROW INDENTATION *****************************************************************/\n@media (min-width:1201px) { /* <- 5-4  hexagons per row */\n  .zuk-hex-list {\n    padding-bottom: 4.4%\n  }\n  .zuk-hex-item {\n    width: 20%; /* = 100 / 5 */\n  }\n  .zuk-hex-item:nth-child(9n+6) { /* first hexagon of even rows */\n    margin-left: 10%;  /* = width of .hex / 2  to indent even rows */\n  }\n}\n\n@media (max-width: 1200px) and (min-width:901px) { /* <- 4-3  hexagons per row */\n  .zuk-hex-list {\n    padding-bottom: 5.5%\n  }\n  .zuk-hex-item {\n    width: 25%; /* = 100 / 4 */\n  }\n  .zuk-hex-item:nth-child(7n+5) { /* first hexagon of even rows */\n    margin-left:12.5%;  /* = width of .hex / 2  to indent even rows */\n  }\n}\n\n@media (max-width: 900px) and (min-width:601px) { /* <- 3-2  hexagons per row */\n  .zuk-hex-list {\n    padding-bottom: 7.4%\n  }\n  .zuk-hex-item {\n    width: 33.333%; /* = 100 / 3 */\n  }\n  .zuk-hex-item:nth-child(5n+4) { /* first hexagon of even rows */\n    margin-left:16.666%;  /* = width of .hex / 2  to indent even rows */\n  }\n}\n\n@media (max-width: 600px) { /* <- 2-1  hexagons per row */\n  .zuk-hex-list {\n    padding-bottom: 11.2%\n  }\n  .zuk-hex-item {\n    width: 50%; /* = 100 / 3 */\n  }\n  .zuk-hex-item:nth-child(3n+3) { /* first hexagon of even rows */\n    margin-left:25%;  /* = width of .hex / 2  to indent even rows */\n  }\n}\n\n@media (max-width: 400px) {\n    .zuk-hex-list {\n        font-size: 13px;\n    }\n}\n", undefined);

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
        React.createElement(List, { list: this.props.list, defaultIcon: this.props.defaultIcon })
      );
    }
  }]);
  return HexagonList;
}(React.Component);

HexagonList.propTypes = {
  list: PropTypes.array.isRequired,
  defaultIcon: PropTypes.string.isRequired
};

var Hexagon = HexagonList;

exports.Hexagon = Hexagon;
