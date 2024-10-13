// using Service = Async;
using Service = Blocking;
#define SLIMT_JNI_EXPORT(tail) JNICALL Java_com_github_jerinphilip_slimt_##tail
JNIEXPORT jlong SLIMT_JNI_EXPORT(Model_createModel)(JNIEnv *env, jobject obj,
                                                    jobject jconfig,
                                                    jobject jpackage) {
  jfieldID encoder_layers_field = env->GetFieldID(cls, "encoder_layers", "J");
  jfieldID decoder_layers_field = env->GetFieldID(cls, "decoder_layers", "J");
  jfieldID ffn_depth_field = env->GetFieldID(cls, "feed_forward_depth", "J");
  jfieldID num_heads_field = env->GetFieldID(cls, "num_heads", "J");
  jfieldID split_mode_field =
  jlong j_encoder_layers = env->GetLongField(jconfig, encoder_layers_field);
  jlong j_decoder_layers = env->GetLongField(jconfig, decoder_layers_field);
  jlong j_ffn_depth = env->GetLongField(jconfig, ffn_depth_field);
  jlong j_num_heads = env->GetLongField(jconfig, num_heads_field);
  jstring j_split_mode =
      (jstring)env->GetObjectField(jconfig, split_mode_field);
  const char *split_mode_cstr = env->GetStringUTFChars(j_split_mode, NULL);
  config.encoder_layers = static_cast<size_t>(j_encoder_layers);
  config.decoder_layers = static_cast<size_t>(j_decoder_layers);
  config.feed_forward_depth = static_cast<size_t>(j_ffn_depth);
  config.num_heads = static_cast<size_t>(j_num_heads);
  config.split_mode = std::string(split_mode_cstr);
  env->ReleaseStringUTFChars(j_split_mode, split_mode_cstr);
JNIEXPORT void SLIMT_JNI_EXPORT(Model_destroyModel)(JNIEnv *env, jobject obj,
                                                    jlong model_addr) {
// Service
JNIEXPORT jlong SLIMT_JNI_EXPORT(Service_createService)(JNIEnv *env,
                                                        jobject obj,
                                                        jlong cache_size) {
JNIEXPORT void SLIMT_JNI_EXPORT(Service_destroyService)(JNIEnv *env,
                                                        jobject obj,
                                                        jlong service_addr) {
  delete reinterpret_cast<Service *>(service_addr);
}

JNIEXPORT jobjectArray SLIMT_JNI_EXPORT(Service_translate)(
  }
  // Translate text using the service
  Model *model_raw_ptr = reinterpret_cast<Model *>(jmodel);
  auto pseudo_deleter = [](Model *model_raw_ptr) {};
  Ptr<Model> model(model_raw_ptr, pseudo_deleter);
  Options options{
      .html = static_cast<bool>(html)  //
  };
  Responses responses = service->translate(model, std::move(sources), options);
  for (Response &response : responses) {
#undef SLIMT_JNI_EXPORT
