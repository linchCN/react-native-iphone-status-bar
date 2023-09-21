
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNIphoneStatusBarSpec.h"

@interface IphoneStatusBar : NSObject <NativeIphoneStatusBarSpec>
#else
#import <React/RCTBridgeModule.h>

@interface IphoneStatusBar : NSObject <RCTBridgeModule>
#endif

@end
