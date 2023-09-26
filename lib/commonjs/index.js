"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
const LINKING_ERROR = `The package 'react-native-iphone-status-bar' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const IphoneStatusBar = _reactNative.Platform.OS !== 'ios' ? undefined : _reactNative.NativeModules.IphoneStatusBar ? _reactNative.NativeModules.IphoneStatusBar : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
const StatusBarHeight = _reactNative.Platform.select({
  android: 0,
  ios: IphoneStatusBar === null || IphoneStatusBar === void 0 ? void 0 : IphoneStatusBar.statusBarHeight
});
var _default = StatusBarHeight;
exports.default = _default;
//# sourceMappingURL=index.js.map