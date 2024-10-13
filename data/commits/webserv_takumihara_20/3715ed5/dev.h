#include "Config.hpp"

#define TCHAR "!#$%&'*+-.^_`|~" + DIGIT
bool isMethod(const std::string &method);
bool isCGIExtension(const std::string &ext);
bool isURL(const std::string &URL);
bool is3xxStatus(const std::string &status);
bool isServernameDuplicate(Config &conf);