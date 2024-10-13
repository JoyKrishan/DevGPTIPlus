    servicePtr = ncreate(cacheSize);
    ndestroy(servicePtr);
    return ntranslate(servicePtr, model.modelPtr, texts.toArray(new String[0]), html);
  private native long ncreate(long cacheSize);
  private native void ndestroy(long servicePtr);
  private native String[] ntranslate(long servicePtr, long modelPtr, String[] texts, boolean html);