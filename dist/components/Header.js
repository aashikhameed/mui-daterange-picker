"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _material = require("@mui/material");
var _react = _interopRequireDefault(require("react"));
var _iconsMaterial = require("@mui/icons-material");
var _dateFns = require("date-fns");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* eslint-disable radix */

const useStyles = (0, _material.makeStyles)(() => ({
  iconContainer: {
    padding: 5
  },
  icon: {
    padding: 10,
    '&:hover': {
      background: 'none'
    }
  }
}));
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const generateYears = (relativeTo, count) => {
  const half = Math.floor(count / 2);
  return Array(count).fill(0).map((_y, i) => relativeTo.getFullYear() - half + i); // TODO: make part of the state
};

const Header = ({
  date,
  setDate,
  nextDisabled,
  prevDisabled,
  onClickNext,
  onClickPrevious
}) => {
  const classes = useStyles();
  const handleMonthChange = event => {
    setDate((0, _dateFns.setMonth)(date, parseInt(event.target.value)));
  };
  const handleYearChange = event => {
    setDate((0, _dateFns.setYear)(date, parseInt(event.target.value)));
  };
  return /*#__PURE__*/_react.default.createElement(_material.Grid, {
    container: true,
    justify: "space-between",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    className: classes.iconContainer
  }, /*#__PURE__*/_react.default.createElement(_material.IconButton, {
    className: classes.icon,
    disabled: prevDisabled,
    onClick: onClickPrevious
  }, /*#__PURE__*/_react.default.createElement(_iconsMaterial.ChevronLeft, {
    color: prevDisabled ? 'disabled' : 'action'
  }))), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react.default.createElement(_material.Select, {
    value: (0, _dateFns.getMonth)(date),
    onChange: handleMonthChange,
    MenuProps: {
      disablePortal: true
    }
  }, MONTHS.map((month, idx) => /*#__PURE__*/_react.default.createElement(_material.MenuItem, {
    key: month,
    value: idx
  }, month)))), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react.default.createElement(_material.Select, {
    value: (0, _dateFns.getYear)(date),
    onChange: handleYearChange,
    MenuProps: {
      disablePortal: true
    }
  }, generateYears(date, 30).map(year => /*#__PURE__*/_react.default.createElement(_material.MenuItem, {
    key: year,
    value: year
  }, year)))), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    className: classes.iconContainer
  }, /*#__PURE__*/_react.default.createElement(_material.IconButton, {
    className: classes.icon,
    disabled: nextDisabled,
    onClick: onClickNext
  }, /*#__PURE__*/_react.default.createElement(_iconsMaterial.ChevronRight, {
    color: nextDisabled ? 'disabled' : 'action'
  }))));
};
var _default = Header;
exports.default = _default;