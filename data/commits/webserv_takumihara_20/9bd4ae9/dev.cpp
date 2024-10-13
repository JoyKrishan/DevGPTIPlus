#include "const.hpp"


std::string trimOws(const std::string &str) {
  std::string::size_type start = str.find_first_not_of(OWS);
  std::string::size_type end = str.find_last_not_of(OWS);
  if (start == std::string::npos) return "";
  return str.substr(start, end - start + 1);
}