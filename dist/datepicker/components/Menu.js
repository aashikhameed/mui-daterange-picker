"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _dateFns = require("date-fns");
var _iconsMaterial = require("@mui/icons-material");
var _Month = _interopRequireDefault(require("./Month"));
var _DefinedRanges = _interopRequireDefault(require("./DefinedRanges"));
var _DateRangePicker = require("./DateRangePicker");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const useStyles = (0, _material.makeStyles)(theme => ({
  header: {
    padding: "20px 70px"
  },
  headerItem: {
    flex: 1,
    textAlign: "center"
  },
  divider: {
    borderLeft: `1px solid ${theme.palette.action.hover}`,
    marginBottom: 20
  }
}));
const Menu = props => {
  const classes = useStyles();
  const {
    ranges,
    dateRange,
    minDate,
    maxDate,
    firstMonth,
    setFirstMonth,
    secondMonth,
    setSecondMonth,
    setDateRange,
    helpers,
    handlers,
    showHeader
  } = props;
  const {
    startDate,
    endDate
  } = dateRange;
  const canNavigateCloser = (0, _dateFns.differenceInCalendarMonths)(secondMonth, firstMonth) >= 2;
  const commonProps = {
    dateRange,
    minDate,
    maxDate,
    helpers,
    handlers
  };
  return /*#__PURE__*/_react.default.createElement(_material.Paper, {
    elevation: 5,
    square: true
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    container: true,
    direction: "row",
    wrap: "nowrap"
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, null, showHeader ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    container: true,
    className: classes.header,
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    className: classes.headerItem
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "subtitle1"
  }, startDate ? (0, _dateFns.format)(startDate, "MMMM DD, YYYY") : "Start Date")), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    className: classes.headerItem
  }, /*#__PURE__*/_react.default.createElement(_iconsMaterial.ArrowRightAlt, {
    color: "action"
  })), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    className: classes.headerItem
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "subtitle1"
  }, endDate ? (0, _dateFns.format)(endDate, "MMMM DD, YYYY") : "End Date"))), /*#__PURE__*/_react.default.createElement(_material.Divider, null)) : null, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    container: true,
    direction: "row",
    justify: "center",
    wrap: "nowrap"
  }, /*#__PURE__*/_react.default.createElement(_Month.default, _extends({}, commonProps, {
    value: firstMonth,
    setValue: setFirstMonth,
    navState: [true, canNavigateCloser],
    marker: _DateRangePicker.MARKERS.FIRST_MONTH
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.divider
  }), /*#__PURE__*/_react.default.createElement(_Month.default, _extends({}, commonProps, {
    value: secondMonth,
    setValue: setSecondMonth,
    navState: [canNavigateCloser, true],
    marker: _DateRangePicker.MARKERS.SECOND_MONTH
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.divider
  }), /*#__PURE__*/_react.default.createElement(_material.Grid, null, /*#__PURE__*/_react.default.createElement(_DefinedRanges.default, {
    selectedRange: dateRange,
    ranges: ranges,
    setRange: setDateRange
  }))));
};
var _default = Menu;
exports.default = _default;