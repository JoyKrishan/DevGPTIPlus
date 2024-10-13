#define SLIMT_JNI_EXPORT(cls, method) \
  JNICALL Java_com_github_jerinphilip_slimt_##cls##_##cls##_1##method
JNIEXPORT jlong SLIMT_JNI_EXPORT(Model, createModel)(JNIEnv *env, jobject obj,
                                                     jobject jconfig,
                                                     jobject jpackage) {
JNIEXPORT void SLIMT_JNI_EXPORT(Model, destroyModel)(JNIEnv *env, jobject obj,
                                                     jlong model_addr) {
JNIEXPORT jlong SLIMT_JNI_EXPORT(Service, createService)(JNIEnv *env,
                                                         jobject obj,
                                                         jlong cache_size) {
JNIEXPORT void SLIMT_JNI_EXPORT(Service, destroyService)(JNIEnv *env,
                                                         jobject obj,
                                                         jlong service_addr) {
JNIEXPORT jobjectArray SLIMT_JNI_EXPORT(Service, translate)(