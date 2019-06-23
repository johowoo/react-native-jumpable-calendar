"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalendarItem = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _xdate = _interopRequireDefault(require("xdate"));

var _returnDaysArr = require("../utils/returnDaysArr");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _Dimensions$get = _reactNative.Dimensions.get("window"),
    width = _Dimensions$get.width;

var CalendarItem =
/*#__PURE__*/
function (_Component) {
  _inherits(CalendarItem, _Component);

  function CalendarItem(props) {
    var _this;

    _classCallCheck(this, CalendarItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CalendarItem).call(this, props)); //item->日期 直接显示日期
    // const dataArr = [];

    _defineProperty(_assertThisInitialized(_this), "_renderItem", function (_ref) {
      var _this$props$markedDat, _this$props$markedDat2, _this$props$markedDat3;

      var item = _ref.item,
          index = _ref.index;
      // let isMarked = false;
      // let isDisabled = false;
      // if (this.props.markedDatesObj) {
      //     if (Object.keys(this.props.markedDatesObj).includes(item.day.toString())) {
      //         isMarked = true;
      //     }
      // }
      return _react["default"].createElement(_reactNative.TouchableOpacity, {
        style: _objectSpread({}, styles.dateItemContainer, {
          width: 0.143 * _this.props.calendarWidth
        }),
        key: item.toString() + index,
        onPress: function onPress() {
          var day = item.day > 9 ? item.day : "0".concat(item.day);
          var pressedDay = "".concat(_this.props.item.toString("yyyy-MM"), "-").concat(day);

          _this.props.onDayPress(pressedDay);
        }
      }, _react["default"].createElement(_reactNative.View, {
        style: ((_this$props$markedDat = _this.props.markedDatesObj[item.day]) === null || _this$props$markedDat === void 0 ? void 0 : _this$props$markedDat.marked) ? [styles.innerContainer, {
          backgroundColor: ((_this$props$markedDat2 = _this.props.markedDatesObj[item.day]) === null || _this$props$markedDat2 === void 0 ? void 0 : _this$props$markedDat2.selectedColor) ? (_this$props$markedDat3 = _this.props.markedDatesObj[item.day]) === null || _this$props$markedDat3 === void 0 ? void 0 : _this$props$markedDat3.selectedColor : "#c69" // backgroundColor:

        }] : styles.innerContainer
      }, _react["default"].createElement(_reactNative.Text, {
        style: styles.dateItemText
      }, item.day)));
    });

    _this.state = {};

    if (_this.props.item instanceof _xdate["default"]) {
      _this.state.dataArr = (0, _returnDaysArr.returnDaysArr)(_this.props.item);
    }

    var markedDaysObj = {};
    _this.state.item = _this.props.item;
    _this.state.markedDatesObj = _this.props.markedDatesObj; // if (this.props.markedDatesArr.length > 0) {
    //     this.props.markedDatesArr.forEach(item => {
    //         if (Object.keys(item).length > 0) {
    //             markedDaysObj[parseInt(Object.keys(item)[0]?.split("-")[2], 10)] = item[Object.keys(item)[0]];
    //         }
    //         markedDaysArr.push({[parseInt(Object.keys(item)[0].split("-")[2])]: item[Object.keys(item)[0]]});
    //     });
    //     this.props.markedDaysObj = markedDaysObj;
    // }

    return _this;
  }

  _createClass(CalendarItem, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps, nextContext) {
      if (nextProps.item instanceof _xdate["default"] && nextProps.item !== this.state.item) {
        // console.warn("nextProps", nextProps);
        // const dataArr = [];
        if (this.props.item instanceof _xdate["default"]) {
          // dataArr = returnDaysArr(this.props.item);
          this.setState({
            dataArr: (0, _returnDaysArr.returnDaysArr)(this.props.item)
          });
        }
      }

      if (nextProps.markedDatesObj && nextProps.markedDatesObj !== this.state.markedDatesObj) {
        this.setState({
          markedDatesObj: nextProps.markedDatesObj
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement(_reactNative.View, {
        style: {
          flex: 1,
          width: this.props.calendarWidth,
          height: this.props.height
        }
      }, this.props.item instanceof _xdate["default"] ? _react["default"].createElement(_reactNative.FlatList, {
        data: this.state.dataArr,
        renderItem: this._renderItem,
        style: {
          flex: 1
        },
        contentContainerStyle: {
          width: width,
          height: "100%",
          backgroundColor: "transparent"
        },
        directionalLockEnabled: true,
        scrollToTop: false,
        keyExtractor: function keyExtractor(item, index) {
          return String(String(index) + item.day);
        },
        getItemLayout: function getItemLayout(data, index) {
          return {
            length: 60,
            offset: 60 * index,
            index: index
          };
        },
        numColumns: 7,
        scrollEnabled: false // horizontal={true}
        ,
        extraData: this.props.markedDates
      }) : _react["default"].createElement(_reactNative.View, {
        style: styles.datePureStyle
      }, _react["default"].createElement(_reactNative.Text, {
        style: styles.datePureTextStyle
      }, this.props.item)));
    }
  }]);

  return CalendarItem;
}(_react.Component);

exports.CalendarItem = CalendarItem;

var styles = _reactNative.StyleSheet.create({
  dateItemContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "14.3%",
    height: 60
  },
  innerContainer: {
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  dateItemText: {
    color: "#eee",
    textAlign: "center",
    fontSize: 16
  },
  datePureStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  datePureTextStyle: {
    // fontFamily: "LuckiestGuyRegular",
    fontFamily: "PacificoRegular",
    color: "#eee",
    fontSize: 32
  }
});