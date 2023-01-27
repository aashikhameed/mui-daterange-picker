"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _dateFns = require("date-fns");
var _utils = require("../utils");
var _Header = _interopRequireDefault(require("./Header"));
var _Day = _interopRequireDefault(require("./Day"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const WEEK_DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const useStyles = (0, _material.makeStyles)(() => ({
  root: {
    width: 290
  },
  weekDaysContainer: {
    marginTop: 10,
    paddingLeft: 30,
    paddingRight: 30
  },
  daysContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 15,
    marginBottom: 20
  }
}));
const Month = props => {
  const classes = useStyles();
  const {
    helpers,
    handlers,
    value: date,
    dateRange,
    marker,
    setValue: setDate,
    minDate,
    maxDate
  } = props;
  const [back, forward] = props.navState;
  return /*#__PURE__*/React.createElement(_material.Paper, {
    square: true,
    elevation: 0,
    className: classes.root
  }, /*#__PURE__*/React.createElement(_material.Grid, {
    container: true
  }, /*#__PURE__*/React.createElement(_Header.default, {
    date: date,
    setDate: setDate,
    nextDisabled: !forward,
    prevDisabled: !back,
    onClickPrevious: () => handlers.onMonthNavigate(marker, -1),
    onClickNext: () => handlers.onMonthNavigate(marker, 1)
  }), /*#__PURE__*/React.createElement(_material.Grid, {
    item: true,
    container: true,
    direction: "row",
    justify: "space-between",
    className: classes.weekDaysContainer
  }, WEEK_DAYS.map(day => /*#__PURE__*/React.createElement(_material.Typography, {
    color: "textSecondary",
    key: day,
    variant: "caption"
  }, day))), /*#__PURE__*/React.createElement(_material.Grid, {
    item: true,
    container: true,
    direction: "column",
    justify: "space-between",
    className: classes.daysContainer
  }, (0, _utils.chunks)((0, _utils.getDaysInMonth)(date), 7).map((week, idx) =>
  /*#__PURE__*/
  // eslint-disable-next-line react/no-array-index-key
  React.createElement(_material.Grid, {
    key: idx,
    container: true,
    direction: "row",
    justify: "center"
  }, week.map(day => {
    const isStart = (0, _utils.isStartOfRange)(dateRange, day);
    const isEnd = (0, _utils.isEndOfRange)(dateRange, day);
    const isRangeOneDay = (0, _utils.isRangeSameDay)(dateRange);
    const highlighted = (0, _utils.inDateRange)(dateRange, day) || helpers.inHoverRange(day);
    return /*#__PURE__*/React.createElement(_Day.default, {
      key: (0, _dateFns.format)(day, 'MM-DD-YYYY'),
      filled: isStart || isEnd,
      outlined: (0, _dateFns.isToday)(day),
      highlighted: highlighted && !isRangeOneDay,
      disabled: !(0, _dateFns.isSameMonth)(date, day) || !(0, _dateFns.isWithinInterval)(day, minDate, maxDate),
      startOfRange: isStart && !isRangeOneDay,
      endOfRange: isEnd && !isRangeOneDay,
      onClick: () => handlers.onDayClick(day),
      onHover: () => handlers.onDayHover(day),
      value: (0, _dateFns.getDate)(day)
    });
  }))))));
};
var _default = Month;
exports.default = _default;