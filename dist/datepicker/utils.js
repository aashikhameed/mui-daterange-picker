"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseOptionalDate = exports.isStartOfRange = exports.isRangeSameDay = exports.isEndOfRange = exports.inDateRange = exports.identity = exports.getValidatedMonths = exports.getDaysInMonth = exports.combine = exports.chunks = void 0;
var _dateFns = require("date-fns");
const identity = x => x;
exports.identity = identity;
const chunks = (array, size) => Array.from({
  length: Math.ceil(array.length / size)
}, (_v, i) => array.slice(i * size, i * size + size));
exports.chunks = chunks;
const combine = (...args) => args.filter(identity).join(' ');

// Date
exports.combine = combine;
const getDaysInMonth = date => {
  const startWeek = (0, _dateFns.startOfWeek)((0, _dateFns.startOfMonth)(date));
  const endWeek = (0, _dateFns.endOfWeek)((0, _dateFns.endOfMonth)(date));
  const days = [];
  for (let curr = startWeek; (0, _dateFns.isBefore)(curr, endWeek);) {
    days.push(curr);
    curr = (0, _dateFns.addDays)(curr, 1);
  }
  return days;
};
exports.getDaysInMonth = getDaysInMonth;
const isStartOfRange = ({
  startDate
}, day) => startDate && (0, _dateFns.isSameDay)(day, startDate);
exports.isStartOfRange = isStartOfRange;
const isEndOfRange = ({
  endDate
}, day) => endDate && (0, _dateFns.isSameDay)(day, endDate);
exports.isEndOfRange = isEndOfRange;
const inDateRange = ({
  startDate,
  endDate
}, day) => startDate && endDate && ((0, _dateFns.isWithinRange)(day, startDate, endDate) || (0, _dateFns.isSameDay)(day, startDate) || (0, _dateFns.isSameDay)(day, endDate));
exports.inDateRange = inDateRange;
const isRangeSameDay = ({
  startDate,
  endDate
}) => {
  if (startDate && endDate) {
    return (0, _dateFns.isSameDay)(startDate, endDate);
  }
  return false;
};
exports.isRangeSameDay = isRangeSameDay;
const parseOptionalDate = (date, defaultValue) => {
  if (date) {
    const parsed = (0, _dateFns.parse)(date);
    if ((0, _dateFns.isValid)(parsed)) return parsed;
  }
  return defaultValue;
};
exports.parseOptionalDate = parseOptionalDate;
const getValidatedMonths = (range, minDate, maxDate) => {
  const {
    startDate,
    endDate
  } = range;
  if (startDate && endDate) {
    const newStart = (0, _dateFns.max)(startDate, minDate);
    const newEnd = (0, _dateFns.min)(endDate, maxDate);
    return [newStart, (0, _dateFns.isSameMonth)(newStart, newEnd) ? (0, _dateFns.addMonths)(newStart, 1) : newEnd];
  }
  return [startDate, endDate];
};
exports.getValidatedMonths = getValidatedMonths;