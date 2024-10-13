javac io/github/jerinphilip/slimt/*.java
jar cf slimt.jar io/github/jerinphilip/slimt/*.class
mkdir -p io/github/jerinphilip/slimt/jni/android-arm64-v8a
# Copy iopiled JNI libraries into the JAR
cp ../../build/bindings/java/libslimt_jni.so io/github/jerinphilip/slimt/jni/android-arm64-v8a/libslimt_jni.so
jar uf slimt.jar io/github/jerinphilip/slimt/jni/android-arm64-v8a/libslimt_jni.so