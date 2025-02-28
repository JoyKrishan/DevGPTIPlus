// This program will concurrently send GET requests to the three specified CGI
// scripts and print messages in different colors for each request.
// This example uses a very straightforward approach to concurrency.

// Important Notes:
// Installing libcurl and link against libcurl when compiling
// add -lcurl to your compiler command.

// brew install libcurl4-openssl-dev
// c++ -std=c++11 test_mux_cgi.cpp  -o -lcurl -pthread && ./test_mux_cgi

// This command worked on mac after brew installing curl :
// c++ -std=c++11 -I/usr/local/opt/curl/include -L/usr/local/opt/curl/lib
// test_mux_cgi.cpp -o test_mux_cgi -lcurl -pthread

#include <curl/curl.h>
#include <iostream>
#include <string>
#include <thread>

#include <curl/curl.h>
#include <iostream>
#include <string>
#include <thread>

// This function is a callback for libcurl to handle data received from the
// server. It's required by libcurl but in this case, we don't need to do
// anything with the data.
static size_t WriteCallback(void *contents, size_t size, size_t nmemb,
                            void *userp) {
  // Just to prevent curl from writing the response to stdout. We're not using
  // the data.
  return size * nmemb;
}

// make a GET request and prints
void GetRequest(const std::string &url, const std::string &colorCode) {
  CURL *curl;   // Handle for the curl session.
  CURLcode res; // Result code returned by curl_easy_perform.

  curl = curl_easy_init(); // Initialize a libcurl easy session.
  if (curl) {
    // Set the URL for the curl operation.
    curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
    // Set the function that will handle received data.
    curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);

    std::cout << colorCode << "Sending request to " << url << "\033[0m\n";
    // Perform the curl session as previously set up.
    res = curl_easy_perform(curl);

    if (res == CURLE_OK) {
      long response_code;
      // Get the HTTP response code.
      curl_easy_getinfo(curl, CURLINFO_RESPONSE_CODE, &response_code);
      std::cout << colorCode << "Connected. Response code: " << response_code
                << "\033[0m\n";
    } else {
      // If curl operation failed, print the error.
      std::cerr << colorCode
                << "curl_easy_perform() failed: " << curl_easy_strerror(res)
                << "\033[0m\n";
    }

    // Clean up the curl session.
    curl_easy_cleanup(curl);
  }
}

int main() {
  std::string urls[] = {
      "http://localhost:8080/development_site/cgi-bin/eight_py.cgi",
      "http://localhost:8080/development_site/cgi-bin/eight_py.cgi",
      "http://localhost:8080/development_site/cgi-bin/eight_py.cgi"};
  //   "http://localhost:8080",
  //   "http://localhost:8080/development_site/cgi-bin/eight_py.cgi",
  //   "http://localhost:8080"};
  std::string colors[] = {"\033[1;31m", "\033[1;32m", "\033[1;34m"};

  std::thread threads[3];
  for (int i = 0; i < 3; ++i) {
    threads[i] = std::thread([=]() { GetRequest(urls[i], colors[i]); });
  }

  // Join threads
  for (auto &thread : threads) {
    thread.join();
  }

  return 0;
}