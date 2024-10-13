  jclass package_cls = env->GetObjectClass(jpackage);
  jfieldID model_field =
      env->GetFieldID(package_cls, "model", "Ljava/lang/String;");
  jfieldID vocabulary_field =
      env->GetFieldID(package_cls, "vocabulary", "Ljava/lang/String;");
  jfieldID shortlist_field =
      env->GetFieldID(package_cls, "shortlist", "Ljava/lang/String;");
  jfieldID ssplit_field =
      env->GetFieldID(package_cls, "ssplit", "Ljava/lang/String;");

  jstring j_model = (jstring)env->GetObjectField(jpackage, model_field);
  jstring j_vocabulary =
      (jstring)env->GetObjectField(jpackage, vocabulary_field);
  jstring j_shortlist = (jstring)env->GetObjectField(jpackage, shortlist_field);
  jstring j_ssplit = (jstring)env->GetObjectField(jpackage, ssplit_field);

  const char *model_cstr = env->GetStringUTFChars(j_model, nullptr);
  const char *vocabulary_cstr = env->GetStringUTFChars(j_vocabulary, nullptr);
  const char *shortlist_cstr = env->GetStringUTFChars(j_shortlist, nullptr);
  const char *ssplit_cstr = env->GetStringUTFChars(j_ssplit, nullptr);

  slimt::Package<std::string> package;
  package.model = std::string(model_cstr);
  package.vocabulary = std::string(vocabulary_cstr);
  package.shortlist = std::string(shortlist_cstr);
  package.ssplit = std::string(ssplit_cstr);

  // Release Java string references
  env->ReleaseStringUTFChars(j_model, model_cstr);
  env->ReleaseStringUTFChars(j_vocabulary, vocabulary_cstr);
  env->ReleaseStringUTFChars(j_shortlist, shortlist_cstr);
  env->ReleaseStringUTFChars(j_ssplit, ssplit_cstr);