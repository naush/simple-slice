'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleSlice = (function (_React$Component) {
  _inherits(SimpleSlice, _React$Component);

  function SimpleSlice(props) {
    _classCallCheck(this, SimpleSlice);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SimpleSlice).call(this, props));

    _this.state = { opacity: props.opacity };
    return _this;
  }

  _createClass(SimpleSlice, [{
    key: 'toRadian',
    value: function toRadian(degrees) {
      return Math.PI * degrees / 180;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var center = _props.center;
      var radius = _props.radius;
      var start = _props.start;
      var end = _props.end;
      var color = _props.color;
      var strokeWidth = _props.strokeWidth;
      var strokeColor = _props.strokeColor;
      var mouseEnter = _props.mouseEnter;
      var mouseLeave = _props.mouseLeave;

      var radians = this.toRadian(end - start - 90);
      var destX = center + radius * Math.cos(radians);
      var destY = center + radius * Math.sin(radians);
      var transformation = 'rotate(' + start + ' ' + center + ' ' + center + ')';
      var description = ['M', center, center, 'L', center, center - radius, 'A', radius, radius, 0, 0, 1, destX, destY, 'z'].join(' ');
      var styles = {
        graph: {
          fill: color,
          stroke: strokeColor,
          opacity: this.state.opacity
        },
        stroke: {
          strokeWidth: strokeWidth,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeOpacity: this.state.opacity
        }
      };
      var props = {
        transform: transformation,
        style: styles.graph
      };
      if (mouseEnter) {
        props.onMouseEnter = mouseEnter.bind(this);
      }
      if (mouseLeave) {
        props.onMouseLeave = mouseLeave.bind(this);
      }

      return _react2.default.createElement(
        'g',
        props,
        _react2.default.createElement('path', { d: description, style: styles.stroke })
      );
    }
  }]);

  return SimpleSlice;
})(_react2.default.Component);

SimpleSlice.propTypes = {
  center: _react2.default.PropTypes.number,
  radius: _react2.default.PropTypes.number,
  start: _react2.default.PropTypes.number,
  end: _react2.default.PropTypes.number,
  color: _react2.default.PropTypes.string,
  strokeWidth: _react2.default.PropTypes.number,
  strokeColor: _react2.default.PropTypes.string,
  opacity: _react2.default.PropTypes.number,
  mouseEnter: _react2.default.PropTypes.func,
  mouseLeave: _react2.default.PropTypes.func
};

SimpleSlice.defaultProps = {
  color: 'white',
  strokeWidth: 1.0,
  strokeColor: 'black'
};

exports.default = SimpleSlice;

