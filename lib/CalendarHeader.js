"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalendarHeader = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _Dimensions$get = _reactNative.Dimensions.get("window"),
    width = _Dimensions$get.width;

var CalendarHeader =
/*#__PURE__*/
function (_Component) {
  _inherits(CalendarHeader, _Component);

  function CalendarHeader() {
    _classCallCheck(this, CalendarHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(CalendarHeader).apply(this, arguments));
  }

  _createClass(CalendarHeader, [{
    key: "render",
    value: function render() {
      var _this = this;

      return _react["default"].createElement(_reactNative.View, {
        style: {
          marginTop: 30,
          marginBottom: 10
        }
      }, this.props.showCalendarTextHeader && _react["default"].createElement(_reactNative.View, {
        style: {
          height: 50
        }
      }, _react["default"].createElement(_reactNative.Text, {
        style: styles.dateTextStyle
      }, this.props.dateText)), _react["default"].createElement(_reactNative.View, {
        style: {
          flexDirection: "row"
        }
      }, this.props.dayTextArr.map(function (item, index) {
        return _react["default"].createElement(_reactNative.Text, {
          key: item + index,
          style: _objectSpread({}, styles.weekDayStyle, {
            width: 0.143 * _this.props.calendarWidth
          })
        }, item);
      })));
    }
  }]);

  return CalendarHeader;
}(_react.Component);

exports.CalendarHeader = CalendarHeader;

_defineProperty(CalendarHeader, "defaultProps", {
  dayTextArr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  calendarWidth: width
});

var styles = _reactNative.StyleSheet.create({
  weekDayStyle: {
    width: "14.3%",
    fontFamily: "PattayaRegular",
    fontSize: 18,
    color: "#ccc",
    textAlign: "center"
  },
  dateTextStyle: {
    fontFamily: "PattayaRegular",
    fontSize: 26,
    marginLeft: 15
  }
});