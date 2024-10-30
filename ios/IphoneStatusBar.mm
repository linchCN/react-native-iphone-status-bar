#import "IphoneStatusBar.h"

@implementation IphoneStatusBar
RCT_EXPORT_MODULE(RNIphoneStatusBarSpec)

- (NSNumber *)getStatusBarHeight
{
    CGFloat height = 0.0;//最终高度存储容器
    if (@available(iOS 13.0, *)) {
        CGFloat topHeight = [UIApplication sharedApplication].windows.firstObject.safeAreaInsets.top;
        height = topHeight ? topHeight : 20.0;
    }else {
        height = [[UIApplication sharedApplication] statusBarFrame].size.height;
    }
  return [NSNumber numberWithFloat:height];
}

// Don't compile this code when we build for the old architecture.
#ifdef RCT_NEW_ARCH_ENABLED

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeIphoneStatusBarSpecJSI>(params);
}
#endif


@end
