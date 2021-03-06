/* "use strict"; */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactNativeSvg = require("react-native-svg");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  d: _propTypes2.default.string.isRequired,
  fill: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]).isRequired,
  transformX: _propTypes2.default.number.isRequired,
  transformY: _propTypes2.default.number.isRequired
};

var defaultProps = {};

var QRCodeCell = function QRCodeCell(_ref) {
  var d = _ref.d,
      fill = _ref.fill,
      transformX = _ref.transformX,
      transformY = _ref.transformY;
  return _react2.default.createElement(_reactNativeSvg.Path, { d: d, fill: fill, x: transformX, y: transformY });
};

QRCodeCell.propTypes = propTypes;
QRCodeCell.defaultProps = defaultProps;

exports.default = QRCodeCell;