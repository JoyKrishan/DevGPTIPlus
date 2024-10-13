#include "./Config/validation.h"
  for (std::map<int, std::vector<ServerConf *> >::iterator itr = conf_.port_servConf_map_.begin();
  if (!isServernameDuplicate(conf_)) {
    throw std::runtime_error("httpServer::setup: servername is duplicate");
  }
#ifdef DEBUG
  std::cout << "-----------port conf map-------------\n" << std::endl;
#endif