/* DO NOT EDIT THIS FILE - it is machine generated */
#include <jni.h>
/* Header for class com_github_jerinphilip_slimt_Service */

#ifndef _Included_com_github_jerinphilip_slimt_Service
#define _Included_com_github_jerinphilip_slimt_Service
#ifdef __cplusplus
extern "C" {
#endif
/*
 * Class:     com_github_jerinphilip_slimt_Service
 * Method:    Service_createService
 * Signature: (J)J
 */
JNIEXPORT jlong JNICALL Java_com_github_jerinphilip_slimt_Service_Service_1createService
  (JNIEnv *, jobject, jlong);

/*
 * Class:     com_github_jerinphilip_slimt_Service
 * Method:    Service_destroyService
 * Signature: (J)V
 */
JNIEXPORT void JNICALL Java_com_github_jerinphilip_slimt_Service_Service_1destroyService
  (JNIEnv *, jobject, jlong);

/*
 * Class:     com_github_jerinphilip_slimt_Service
 * Method:    Service_translate
 * Signature: (JJ[Ljava/lang/String;Z)[Ljava/lang/String;
 */
JNIEXPORT jobjectArray JNICALL Java_com_github_jerinphilip_slimt_Service_Service_1translate
  (JNIEnv *, jobject, jlong, jlong, jobjectArray, jboolean);

#ifdef __cplusplus
}
#endif
#endif