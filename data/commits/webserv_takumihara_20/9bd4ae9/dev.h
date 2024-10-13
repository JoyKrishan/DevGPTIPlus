#define ALPHA "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
#define DIGIT "0123456789"
#define TCHAR "!#$%&'*+-.^_`|~" +  DIGIT

bool isToken(const std::string &str);
bool isVchar(const std::string &str);
#endif