#include <jni.h>
#include "react-native-phone-number-validation.h"

extern "C"
JNIEXPORT jdouble JNICALL
Java_com_phonenumbervalidation_PhoneNumberValidationModule_nativeMultiply(JNIEnv *env, jclass type, jdouble a, jdouble b) {
    return phonenumbervalidation::multiply(a, b);
}
