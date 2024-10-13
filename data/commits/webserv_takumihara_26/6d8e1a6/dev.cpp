std::string ObsFoldRequest();
TEST(E2E, CGI) {
  std::string res = sendRequest(CGIRequest());
  EXPECT_EQ(res, std::string("CGI Response \n"));
}
TEST(E2E, ObsFold) {
  std::string res = sendRequest(ObsFoldRequest());

  EXPECT_EQ(res, std::string(""));
}

  request += "Content-Length:  5 \r\n";
  request += "Date: Wed, 16 Oct 2019 07:28:00 GMT\r\n";
  request += "Transfer-Encoding: chunked, chunked     , chunked  \r\n";

std::string ObsFoldRequest() {
  std::string request;
  request += "GET /index.html HTTP/1.1\r\n";
  request += "Host: localhost\r\n";
  request += "SomeHeader: SomeValue  \r\n";
  request += " continuous value\r\n";
  request += "\r\n";
  return request;
}