"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MonthChooser = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeModalDropdown = _interopRequireDefault(require("react-native-modal-dropdown"));

var _returnChoosableMonthsArr = require("../utils/returnChoosableMonthsArr");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _Dimensions$get = _reactNative.Dimensions.get("window"),
    width = _Dimensions$get.width;

var calendarWidth = width;

var MonthChooser =
/*#__PURE__*/
function (_Component) {
  _inherits(MonthChooser, _Component);

  _createClass(MonthChooser, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      calendarWidth = this.props.calendarWidth;
    }
  }]);

  function MonthChooser(props) {
    var _this$props$currentDa, _this$props$currentDa2;

    var _this;

    _classCallCheck(this, MonthChooser);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MonthChooser).call(this, props));
    var choosableMonthsObj = (0, _returnChoosableMonthsArr.returnChoosableMonthsObj)({
      beginMonth: _this.props.choosableMonthBegins,
      endMonth: _this.props.choosableMonthEnds
    });
    _this.state = {
      disable2ndDropdown: true,
      disable1stDropdown: false,
      choosableMonthsObj: choosableMonthsObj,
      currentDateText: _this.props.currentDateText
    };
    _this.state.currentMonth = (_this$props$currentDa = _this.props.currentDateText) === null || _this$props$currentDa === void 0 ? void 0 : _this$props$currentDa.split(" ")[0];
    _this.state.currentYear = (_this$props$currentDa2 = _this.props.currentDateText) === null || _this$props$currentDa2 === void 0 ? void 0 : _this$props$currentDa2.split(" ")[1];
    return _this;
  }

  _createClass(MonthChooser, [{
    key: "componentWillReceiveProps",
    value: function () {
      var _componentWillReceiveProps = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(nextProps, nextContext) {
        var _nextProps$currentDat;

        var _nextProps$currentDat2, _this$state$MonthsArr, _nextProps$currentDat3;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.setState({
                  MonthsArrForChosenYear: this.state.choosableMonthsObj[(_nextProps$currentDat = nextProps.currentDateText) === null || _nextProps$currentDat === void 0 ? void 0 : _nextProps$currentDat.split(" ")[1]]
                });

              case 2:
                if (!(nextProps.currentDateText !== this.state.currentDateText)) {
                  _context.next = 15;
                  break;
                }

                _context.next = 5;
                return this.setState({
                  currentDateText: nextProps.currentDateText
                });

              case 5:
                _context.next = 7;
                return this.yearDropdown;

              case 7:
                _context.t0 = _context.sent;

                if (!_context.t0) {
                  _context.next = 10;
                  break;
                }

                this.yearDropdown.select(Object.keys(this.state.choosableMonthsObj).indexOf((_nextProps$currentDat2 = nextProps.currentDateText) === null || _nextProps$currentDat2 === void 0 ? void 0 : _nextProps$currentDat2.split(" ")[1]));

              case 10:
                _context.next = 12;
                return this.monthDropdown;

              case 12:
                _context.t1 = _context.sent;

                if (!_context.t1) {
                  _context.next = 15;
                  break;
                }

                this.monthDropdown.select((_this$state$MonthsArr = this.state.MonthsArrForChosenYear) === null || _this$state$MonthsArr === void 0 ? void 0 : _this$state$MonthsArr.indexOf((_nextProps$currentDat3 = nextProps.currentDateText) === null || _nextProps$currentDat3 === void 0 ? void 0 : _nextProps$currentDat3.split(" ")[0]));

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentWillReceiveProps(_x, _x2) {
        return _componentWillReceiveProps.apply(this, arguments);
      }

      return componentWillReceiveProps;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      console.warn(calendarWidth, this.props.calendarWidth);
      return _react["default"].createElement(_reactNative.View, {
        style: {
          flexDirection: "row",
          height: 50,
          marginLeft: 20,
          // justifyContent: "center",
          alignItems: "center"
        }
      }, _react["default"].createElement(_reactNativeModalDropdown["default"], {
        ref: function ref(year) {
          return _this2.yearDropdown = year;
        },
        style: this.state.disable1stDropdown ? styles.disabledDropdownList : styles.dropdownMenu,
        textStyle: this.state.disable1stDropdown ? styles.disabledDropdownMenuText : [styles.dropdownMenuText],
        defaultValue: this.state.currentYear,
        dropdownStyle: [styles.dropdownList],
        dropdownTextStyle: [styles.dropdownListText],
        dropdownTextHighlightStyle: [styles.dropdownSelection],
        disabled: this.state.disable1stDropdown,
        options: Object.keys(this.state.choosableMonthsObj),
        onSelect:
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2(index, value) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return _this2.setState({
                      MonthsArrForChosenYear: _this2.state.choosableMonthsObj[value]
                    });

                  case 2:
                    _context2.next = 4;
                    return _this2.setState({
                      disable2ndDropdown: false,
                      chosenYear: value
                    });

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          return function (_x3, _x4) {
            return _ref.apply(this, arguments);
          };
        }()
      }), _react["default"].createElement(_reactNativeModalDropdown["default"], {
        ref: function ref(month) {
          return _this2.monthDropdown = month;
        },
        style: this.state.disable2ndDropdown ? [styles.disabledDropdownList, this.props.disabledDropdownListStyle] : [styles.dropdownMenu, this.props.dropdownMenuStyle],
        textStyle: this.state.disable2ndDropdown ? [styles.disabledDropdownMenuText, this.props.disabledDropdownMenuTextStyle] : [styles.dropdownMenuText, this.props.dropdownMenuTextStyle],
        defaultValue: this.state.currentMonth,
        dropdownStyle: [styles.dropdownList, this.props.dropdownStyle],
        dropdownTextStyle: [styles.dropdownListText, this.props.dropdownListTextStyle],
        dropdownTextHighlightStyle: [styles.dropdownSelection, this.props.dropdownSelectionStyle],
        options: this.state.MonthsArrForChosenYear,
        disabled: this.state.disable2ndDropdown,
        onSelect:
        /*#__PURE__*/
        function () {
          var _ref2 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3(index, value) {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return _this2.setState({
                      chosenMonth: value
                    });

                  case 2:
                    _context3.next = 4;
                    return _this2.setState({
                      disable1stDropdown: true
                    });

                  case 4:
                    _context3.next = 6;
                    return _this2.setState({
                      disable1stDropdown: false,
                      disable2ndDropdown: true
                    });

                  case 6:
                    _context3.next = 8;
                    return _this2.props.scrollToMonth({
                      year: _this2.state.chosenYear,
                      month: _this2.state.chosenMonth
                    });

                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          return function (_x5, _x6) {
            return _ref2.apply(this, arguments);
          };
        }()
      }));
    }
  }]);

  return MonthChooser;
}(_react.Component);

exports.MonthChooser = MonthChooser;

var styles = _reactNative.StyleSheet.create({
  disabledDropdownList: {
    width: width * 0.2,
    height: 40,
    borderRadius: 12,
    marginLeft: 10,
    marginRight: calendarWidth * 0.02,
    borderWidth: 1,
    borderColor: "#aaa",
    // backgroundColor:'#EEE',
    justifyContent: "center"
  },
  dropdownMenu: {
    width: width * 0.2,
    height: 40,
    borderRadius: 12,
    marginLeft: 10,
    marginRight: calendarWidth * 0.02,
    borderWidth: 1,
    borderColor: "#c69",
    // backgroundColor:'#EEE',
    justifyContent: "center"
  },
  dropdownContainer: {
    height: 110,
    padding: calendarWidth * 0.03,
    paddingTop: calendarWidth * 0.02,
    flexDirection: "row"
  },
  disabledDropdownMenuText: {
    marginLeft: 10,
    fontSize: 24,
    fontFamily: "LobsterRegular",
    color: "#aaa"
  },
  dropdownMenuText: {
    marginLeft: 10,
    fontSize: 24,
    fontFamily: "LobsterRegular",
    color: "#c69"
  },
  dropdownList: {
    width: calendarWidth * 0.2 // marginTop: 15,

  },
  dropdownListText: {
    fontSize: 18,
    marginLeft: 10,
    color: "#c69"
  },
  dropdownSelection: {
    color: "#00cccc"
  },
  jumpToStyle: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eee"
  }
});