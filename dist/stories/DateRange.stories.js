"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Primary = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = require("../index");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: 'DateRangePicker',
  component: _index.DateRangePicker
};
exports.default = _default;
const Template = args => /*#__PURE__*/_react.default.createElement(_index.DateRangePicker, args);
const Primary = Template.bind({});
exports.Primary = Primary;
Primary.args = {};