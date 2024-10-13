  // typedef S ServConf;
  // typedef Config::ServerConf::LocationConf LocConf;
    directives_["autoindex"] = &Parser::analyseAutoindex;
    directives_["limit_except"] = &Parser::analyseLimitExcept;
    directives_["redirect"] = &Parser::analyseRedirect;
    directives_["max_body_size"] = &Parser::analyseMaxBodySize;
    directives_["cgi_extension"] = &Parser::analyseCGIExtension;

  Config conf_;
  std::vector<Token> tokens_;
  size_t idx_;
  std::map<std::string, void (Parser::*)()> directives_;
  std::stack<enum scope> scope_;

 private:
  void lexer(std::string &input);
  void analyseAutoindex();
  void analyseLimitExcept();
  void analyseRedirect();
  void analyseMaxBodySize();
  void analyseCGIExtension();
  void setRedirect(std::string &status, std::string &uri, scope scp);
  bool isCGIExtention(std::string &str);
  Token &readToken(void);
