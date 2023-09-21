#import "IphoneStatusBar.h"

@implementation IphoneStatusBar
RCT_EXPORT_MODULE()

- (NSDictionary *)constantsToExport
{
    CGFloat height = 0.0;//最终高度存储容器
    if (@available(iOS 13.0, *)) {
        CGFloat topHeight = [UIApplication sharedApplication].windows.firstObject.safeAreaInsets.top;
        height = topHeight ? topHeight : 20.0;
    }else {
        height = [[UIApplication sharedApplication] statusBarFrame].size.height;
    }
  return @{ @"statusBarHeight": [NSNumber numberWithFloat:height] };
}


@end
