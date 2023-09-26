import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-iphone-status-bar' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const IphoneStatusBar =
  Platform.OS !== 'ios'
    ? undefined
    : NativeModules.IphoneStatusBar
    ? NativeModules.IphoneStatusBar
    : new Proxy(
        {},
        {
          get() {
            throw new Error(LINKING_ERROR);
          },
        }
      );

const StatusBarHeight = Platform.select({
  android: 0,
  ios: IphoneStatusBar?.statusBarHeight,
});

export default StatusBarHeight;
