  JNICALL Java_com_github_jerinphilip_slimt_##cls##method
JNIEXPORT jlong SLIMT_JNI_EXPORT(Model, ncreate)(JNIEnv *env, jobject obj,
                                                 jobject jconfig,
                                                 jobject jpackage) {
JNIEXPORT void SLIMT_JNI_EXPORT(Model, ndestroy)(JNIEnv *env, jobject obj,
                                                 jlong model_addr) {
JNIEXPORT jlong SLIMT_JNI_EXPORT(Service, ncreate)(JNIEnv *env, jobject obj,
                                                   jlong cache_size) {
JNIEXPORT void SLIMT_JNI_EXPORT(Service, ndestroy)(JNIEnv *env, jobject obj,
                                                   jlong service_addr) {
JNIEXPORT jobjectArray SLIMT_JNI_EXPORT(Service, ntranslate)(