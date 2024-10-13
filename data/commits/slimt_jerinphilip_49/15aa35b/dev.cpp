using namespace slimt;  // NOLINT

using Service = Async;
// NOLINTBEGIN
// Model

JNIEXPORT jlong JNICALL Java_com_example_Model_createModel(JNIEnv *env,
                                                           jobject obj,
                                                           jobject jconfig,
                                                           jobject jpackage) {
  // Extract Config object fields
  jclass cls = env->GetObjectClass(jconfig);
  jfieldID encoderLayersField = env->GetFieldID(cls, "encoder_layers", "J");
  jfieldID decoderLayersField = env->GetFieldID(cls, "decoder_layers", "J");
  jfieldID ffnDepthField = env->GetFieldID(cls, "feed_forward_depth", "J");
  jfieldID numHeadsField = env->GetFieldID(cls, "num_heads", "J");
  jfieldID splitModeField =
      env->GetFieldID(cls, "split_mode", "Ljava/lang/String;");

  jlong encoderLayers = env->GetLongField(jconfig, encoderLayersField);
  jlong decoderLayers = env->GetLongField(jconfig, decoderLayersField);
  jlong ffnDepth = env->GetLongField(jconfig, ffnDepthField);
  jlong numHeads = env->GetLongField(jconfig, numHeadsField);
  jstring splitModeString =
      (jstring)env->GetObjectField(jconfig, splitModeField);
  const char *splitMode = env->GetStringUTFChars(splitModeString, NULL);

  // Create Config object
  slimt::Model::Config config;
  config.encoder_layers = static_cast<size_t>(encoderLayers);
  config.decoder_layers = static_cast<size_t>(decoderLayers);
  config.feed_forward_depth = static_cast<size_t>(ffnDepth);
  config.num_heads = static_cast<size_t>(numHeads);
  config.split_mode = std::string(splitMode);

  // Extract Package object fields
  // Assuming Package object contains necessary fields for Model creation

  // Create Package object
  slimt::Package<std::string> package;  // Assuming package type is std::string

  // Create Model object
  slimt::Model *model = new slimt::Model(config, package);

  // Clean up
  env->ReleaseStringUTFChars(splitModeString, splitMode);

  return reinterpret_cast<jlong>(model);
}

JNIEXPORT void JNICALL Java_com_example_SlimtModel_destroyModel(
    JNIEnv *env, jobject obj, jlong model_addr) {
  delete reinterpret_cast<Model *>(model_addr);
}

    JNIEnv *env, jobject obj, jlong workers, jlong cache_size) {
  Config config;
  config.workers = workers;
  config.cache_size = cache_size;
  return reinterpret_cast<jlong>(new Service(config));
    JNIEnv *env, jobject obj, jlong service_addr, jobject jmodel,
  Service *service = reinterpret_cast<Service *>(service_addr);
  std::vector<std::string> sources;
  std::vector<std::string> targets;
  jsize length = env->GetArrayLength(texts);
  for (int i = 0; i < length; ++i) {
        sources.push_back(text);
    Model *model_raw_ptr = reinterpret_cast<Model *>(jmodel);
    auto pseudo_deleter = [](Model *model_raw_ptr) {};
    Ptr<Model> model(model_raw_ptr, pseudo_deleter);
    Options options{
        .html = static_cast<bool>(html)  //
    };
    Handle handle = service->translate(model, std::move(text), options);
    Response response = handle.future().get();
    targets.push_back(response.target.text);
  jobjectArray jtargets = env->NewObjectArray(
      targets.size(), env->FindClass("java/lang/String"), nullptr);
  for (size_t i = 0; i < targets.size(); ++i) {
    env->SetObjectArrayElement(jtargets, i,
                               env->NewStringUTF(targets[i].c_str()));
  return jtargets;
    JNIEnv *env, jobject obj, jlong service_addr) {
  delete reinterpret_cast<Service *>(service_addr);
// NOLINTEND