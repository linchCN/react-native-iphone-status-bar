import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  getStatusBarHeight(): number;
}

export default TurboModuleRegistry.getEnforcing<Spec>('RNIphoneStatusBarSpec');
