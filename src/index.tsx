import IphoneStatusBar from './NativeIphoneStatusBar';
import { Platform } from 'react-native';

const StatusBarHeight = Platform.select({
  android: 0,
  ios: IphoneStatusBar.getStatusBarHeight(),
});

export default StatusBarHeight;
