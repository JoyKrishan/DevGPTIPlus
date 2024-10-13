# Compile Java files
javac com/github/jerinphilip/slimt/*.java

# Package Java class files into JAR
jar cf slimt.jar com/github/jerinphilip/slimt/*.class

# Compile JNI shared library for Android
# Assuming you have pre-compiled .so files for different architectures
# Compile your JNI code if not already done
# Example:
# gcc -shared -o libslimt.so -I<path_to_jni_headers> slimt.c

# Structure your JAR file
mkdir -p com/github/jerinphilip/slimt/jni/android-arm64-v8a
mkdir -p com/github/jerinphilip/slimt/jni/android-armeabi-v7a
mkdir -p com/github/jerinphilip/slimt/jni/android-x86
mkdir -p com/github/jerinphilip/slimt/jni/android-x86_64

# Copy compiled JNI libraries into the JAR
cp <path_to_your_arm64-v8a.so> com/github/jerinphilip/slimt/jni/android-arm64-v8a/libslimt.so
cp <path_to_your_armeabi-v7a.so> com/github/jerinphilip/slimt/jni/android-armeabi-v7a/libslimt.so
cp <path_to_your_x86.so> com/github/jerinphilip/slimt/jni/android-x86/libslimt.so
cp <path_to_your_x86_64.so> com/github/jerinphilip/slimt/jni/android-x86_64/libslimt.so

# Package everything into final JAR file
jar uf slimt.jar com/github/jerinphilip/slimt/jni/android-arm64-v8a/libslimt.so
jar uf slimt.jar com/github/jerinphilip/slimt/jni/android-armeabi-v7a/libslimt.so
jar uf slimt.jar com/github/jerinphilip/slimt/jni/android-x86/libslimt.so
jar uf slimt.jar com/github/jerinphilip/slimt/jni/android-x86_64/libslimt.so

# Clean up
rm -rf com