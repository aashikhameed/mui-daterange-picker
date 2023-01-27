"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _dateFns = require("date-fns");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const isSameRange = (first, second) => {
  const {
    startDate: fStart,
    endDate: fEnd
  } = first;
  const {
    startDate: sStart,
    endDate: sEnd
  } = second;
  if (fStart && sStart && fEnd && sEnd) {
    return (0, _dateFns.isSameDay)(fStart, sStart) && (0, _dateFns.isSameDay)(fEnd, sEnd);
  }
  return false;
};
const DefinedRanges = ({
  ranges,
  setRange,
  selectedRange
}) => /*#__PURE__*/_react.default.createElement(_material.List, null, ranges.map((range, idx) =>
/*#__PURE__*/
// eslint-disable-next-line react/no-array-index-key
_react.default.createElement(_material.ListItem, {
  button: true,
  key: idx,
  onClick: () => setRange(range)
}, /*#__PURE__*/_react.default.createElement(_material.ListItemText, {
  primaryTypographyProps: {
    variant: 'body2',
    style: {
      fontWeight: isSameRange(range, selectedRange) ? 'bold' : 'normal'
    }
  }
}, range.label))));
var _default = DefinedRanges;
exports.default = _default;