std::optional<TranslationCache> make_cache(size_t cache_size) {
  constexpr size_t kCacheBucketSize = 16;
  if (cache_size > 0) {
    return std::make_optional<TranslationCache>(cache_size, kCacheBucketSize);
  }
  return std::nullopt;
}

Blocking::Blocking(const Config &config)
    : config_(config), cache_(make_cache(config.cache_size)) {}  // NOLINT
    : cache_(make_cache(config.cache_size)),
      batcher_(config.max_words, config.wrap_length,