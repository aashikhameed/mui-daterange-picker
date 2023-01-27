"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _material = require("@mui/material");
var _DateRangePicker = _interopRequireDefault(require("./DateRangePicker"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/* eslint-disable jsx-a11y/no-static-element-interactions */

const useStyles = (0, _material.makeStyles)(() => ({
  dateRangePickerContainer: {
    position: 'relative'
  },
  dateRangePicker: {
    position: 'relative',
    zIndex: 1
  },
  dateRangeBackdrop: {
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    bottom: 0,
    zIndex: 0,
    right: 0,
    left: 0,
    top: 0
  }
}));
const DateRangePickerWrapper = props => {
  const classes = useStyles();
  const {
    closeOnClickOutside,
    wrapperClassName,
    toggle,
    open
  } = props;
  const handleToggle = () => {
    if (closeOnClickOutside === false) {
      return;
    }
    toggle();
  };
  const handleKeyPress = event => (event === null || event === void 0 ? void 0 : event.key) === 'Escape' && handleToggle();
  const wrapperClasses = (0, _classnames.default)(classes.dateRangePicker, wrapperClassName);
  return /*#__PURE__*/React.createElement("div", {
    className: classes.dateRangePickerContainer
  }, open && /*#__PURE__*/React.createElement("div", {
    className: classes.dateRangeBackdrop,
    onKeyPress: handleKeyPress,
    onClick: handleToggle
  }), /*#__PURE__*/React.createElement("div", {
    className: wrapperClasses
  }, /*#__PURE__*/React.createElement(_DateRangePicker.default, props)));
};
var _default = DateRangePickerWrapper;
exports.default = _default;