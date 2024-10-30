"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _NativeIphoneStatusBar = _interopRequireDefault(require("./NativeIphoneStatusBar"));
var _reactNative = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const StatusBarHeight = _reactNative.Platform.select({
  android: 0,
  ios: _NativeIphoneStatusBar.default.getStatusBarHeight()
});
var _default = StatusBarHeight;
exports.default = _default;
//# sourceMappingURL=index.js.map