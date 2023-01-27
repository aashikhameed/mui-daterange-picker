"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _styles = require("@mui/styles");
var _utils = require("../utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/* eslint-disable jsx-a11y/mouse-events-have-key-events */

const useStyles = (0, _styles.makeStyles)(theme => ({
  leftBorderRadius: {
    borderRadius: "50% 0 0 50%"
  },
  rightBorderRadius: {
    borderRadius: "0 50% 50% 0"
  },
  buttonContainer: {
    display: "flex"
  },
  button: {
    height: 36,
    width: 36,
    padding: 0,
    border: '1px'
  },
  buttonText: {
    lineHeight: 1.6
  },
  outlined: {
    backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23345CECFF' stroke-width='3' stroke-dasharray='50%25%2c 13%25' stroke-dashoffset='33' stroke-linecap='butt'/%3e%3c/svg%3e")`
  },
  filled: {
    "&:hover": {
      backgroundColor: '#B8BABD'
    },
    backgroundColor: '#B8BABD'
  },
  highlighted: {
    backgroundColor: '#e2e2e2'
  },
  contrast: {
    color: '#54d'
  }
}));
const Day = ({
  startOfRange,
  endOfRange,
  disabled,
  highlighted,
  outlined,
  filled,
  onClick,
  onHover,
  value
}) => {
  const classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: (0, _utils.combine)(classes.buttonContainer, startOfRange && classes.leftBorderRadius, endOfRange && classes.rightBorderRadius, !disabled && highlighted && classes.highlighted)
  }, /*#__PURE__*/React.createElement(_material.IconButton, {
    className: (0, _utils.combine)(classes.button, !disabled && outlined && classes.outlined, !disabled && filled && classes.filled),
    disabled: disabled,
    onClick: onClick,
    onMouseOver: onHover
  }, /*#__PURE__*/React.createElement(_material.Typography, {
    color: !disabled ? "textPrimary" : "textSecondary",
    className: (0, _utils.combine)(classes.buttonText, !disabled && filled && classes.contrast),
    variant: "body2"
  }, value)));
};
var _default = Day;
exports.default = _default;