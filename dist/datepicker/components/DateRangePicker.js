"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MARKERS = void 0;
var React = _interopRequireWildcard(require("react"));
var _dateFns = require("date-fns");
var _utils = require("../utils");
var _defaults = require("../defaults");
var _Menu = _interopRequireDefault(require("./Menu"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const MARKERS = {
  FIRST_MONTH: Symbol("firstMonth"),
  SECOND_MONTH: Symbol("secondMonth")
};
exports.MARKERS = MARKERS;
const DateRangePicker = props => {
  const today = new Date();
  const {
    open,
    onChange,
    initialDateRange,
    minDate,
    maxDate,
    definedRanges = _defaults.defaultRanges,
    showHeader
  } = props;
  const minDateValid = (0, _utils.parseOptionalDate)(minDate, (0, _dateFns.addYears)(today, -10));
  const maxDateValid = (0, _utils.parseOptionalDate)(maxDate, (0, _dateFns.addYears)(today, 10));
  const [intialFirstMonth, initialSecondMonth] = (0, _utils.getValidatedMonths)(initialDateRange || {}, minDateValid, maxDateValid);
  const [dateRange, setDateRange] = React.useState({
    ...initialDateRange
  });
  const [hoverDay, setHoverDay] = React.useState();
  const [firstMonth, setFirstMonth] = React.useState(intialFirstMonth || today);
  const [secondMonth, setSecondMonth] = React.useState(initialSecondMonth || (0, _dateFns.addMonths)(firstMonth, 1));
  const {
    startDate,
    endDate
  } = dateRange;
  const setFirstMonthValidated = date => {
    if ((0, _dateFns.isBefore)(date, secondMonth)) {
      setFirstMonth(date);
    }
  };
  const setSecondMonthValidated = date => {
    if ((0, _dateFns.isAfter)(date, firstMonth)) {
      setSecondMonth(date);
    }
  };
  const setDateRangeValidated = range => {
    let {
      startDate: newStart,
      endDate: newEnd
    } = range;
    if (newStart && newEnd) {
      range.startDate = newStart = (0, _dateFns.max)(newStart, minDateValid);
      range.endDate = newEnd = (0, _dateFns.min)(newEnd, maxDateValid);
      setDateRange(range);
      onChange(range);
      setFirstMonth(newStart);
      setSecondMonth((0, _dateFns.isSameMonth)(newStart, newEnd) ? (0, _dateFns.addMonths)(newStart, 1) : newEnd);
    } else {
      const emptyRange = {};
      setDateRange(emptyRange);
      onChange(emptyRange);
      setFirstMonth(today);
      setSecondMonth((0, _dateFns.addMonths)(firstMonth, 1));
    }
  };
  const onDayClick = day => {
    if (startDate && !endDate && !(0, _dateFns.isBefore)(day, startDate)) {
      const newRange = {
        startDate,
        endDate: day
      };
      onChange(newRange);
      setDateRange(newRange);
    } else {
      setDateRange({
        startDate: day,
        endDate: undefined
      });
    }
    setHoverDay(day);
  };
  const onMonthNavigate = (marker, action) => {
    if (marker === MARKERS.FIRST_MONTH) {
      const firstNew = (0, _dateFns.addMonths)(firstMonth, action);
      if ((0, _dateFns.isBefore)(firstNew, secondMonth)) setFirstMonth(firstNew);
    } else {
      const secondNew = (0, _dateFns.addMonths)(secondMonth, action);
      if ((0, _dateFns.isBefore)(firstMonth, secondNew)) setSecondMonth(secondNew);
    }
  };
  const onDayHover = date => {
    if (startDate && !endDate) {
      if (!hoverDay || !(0, _dateFns.isSameDay)(date, hoverDay)) {
        setHoverDay(date);
      }
    }
  };
  const inHoverRange = day => startDate && !endDate && hoverDay && (0, _dateFns.isAfter)(hoverDay, startDate) && (0, _dateFns.isWithinInterval)(day, startDate, hoverDay);
  const helpers = {
    inHoverRange
  };
  const handlers = {
    onDayClick,
    onDayHover,
    onMonthNavigate
  };
  return open ? /*#__PURE__*/React.createElement(_Menu.default, {
    dateRange: dateRange,
    minDate: minDateValid,
    maxDate: maxDateValid,
    ranges: definedRanges,
    firstMonth: firstMonth,
    secondMonth: secondMonth,
    setFirstMonth: setFirstMonthValidated,
    setSecondMonth: setSecondMonthValidated,
    setDateRange: setDateRangeValidated,
    helpers: helpers,
    handlers: handlers,
    showHeader: showHeader
  }) : null;
};
var _default = DateRangePicker;
exports.default = _default;