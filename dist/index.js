'use strict';

function __$styleInject (css, returnValue) {
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

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var styled = _interopDefault(require('styled-components'));

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









var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var _templateObject = taggedTemplateLiteral(['\n  background-color: #009f50;\n  display: none;\n  text-align: center;\n  @media (max-width: ', ') {\n    display: block;\n  }\n'], ['\n  background-color: #009f50;\n  display: none;\n  text-align: center;\n  @media (max-width: ', ') {\n    display: block;\n  }\n']);
var _templateObject2 = taggedTemplateLiteral(['\n  background-color: #009f50;\n  display: block;\n  text-align: center;\n  @media (max-width: ', ') {\n    display: none;\n  }\n'], ['\n  background-color: #009f50;\n  display: block;\n  text-align: center;\n  @media (max-width: ', ') {\n    display: none;\n  }\n']);

var SmallMenu = styled.div(_templateObject, function (props) {
  return props.size;
});

var LargeMenu = styled.div(_templateObject2, function (props) {
  return props.size;
});

var MenuIcon = function MenuIcon(_ref) {
  var onClick = _ref.onClick,
      icon = _ref.icon;
  return React__default.createElement(
    'div',
    { role: 'button', onClick: onClick },
    icon
  );
};

var ResponsiveMenu = function (_Component) {
  inherits(ResponsiveMenu, _Component);

  function ResponsiveMenu(props) {
    classCallCheck(this, ResponsiveMenu);

    var _this = possibleConstructorReturn(this, (ResponsiveMenu.__proto__ || Object.getPrototypeOf(ResponsiveMenu)).call(this, props));

    _this.handleClick = function () {
      _this.setState({ showMenu: !_this.state.showMenu });
    };

    _this.state = {
      showMenu: false
    };
    return _this;
  }

  createClass(ResponsiveMenu, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          menu = _props.menu,
          largeMenuClassName = _props.largeMenuClassName,
          smallMenuClassName = _props.smallMenuClassName,
          changeMenuOn = _props.changeMenuOn,
          menuOpenButton = _props.menuOpenButton,
          menuCloseButton = _props.menuCloseButton;

      return React__default.createElement(
        'div',
        null,
        React__default.createElement(
          LargeMenu,
          { className: largeMenuClassName, size: changeMenuOn },
          menu
        ),
        React__default.createElement(
          SmallMenu,
          { className: smallMenuClassName, size: changeMenuOn },
          !this.state.showMenu ? React__default.createElement(MenuIcon, { onClick: this.handleClick, icon: menuOpenButton }) : React__default.createElement(MenuIcon, { onClick: this.handleClick, icon: menuCloseButton }),
          this.state.showMenu ? React__default.createElement(
            'div',
            null,
            menu
          ) : null
        )
      );
    }
  }]);
  return ResponsiveMenu;
}(React.Component);

ResponsiveMenu.propTypes = {
  menu: PropTypes.node.isRequired,
  largeMenuClassName: PropTypes.string,
  smallMenuClassName: PropTypes.string,
  changeMenuOn: PropTypes.string.isRequired,
  menuOpenButton: PropTypes.node.isRequired,
  menuCloseButton: PropTypes.node.isRequired
};

ResponsiveMenu.defaultProps = {
  largeMenuClassName: '',
  smallMenuClassName: ''
};

module.exports = ResponsiveMenu;
