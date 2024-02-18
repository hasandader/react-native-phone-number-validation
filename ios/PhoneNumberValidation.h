#ifdef __cplusplus
#import "react-native-phone-number-validation.h"
#endif

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNPhoneNumberValidationSpec.h"

@interface PhoneNumberValidation : NSObject <NativePhoneNumberValidationSpec>
#else
#import <React/RCTBridgeModule.h>

@interface PhoneNumberValidation : NSObject <RCTBridgeModule>
#endif

@end
