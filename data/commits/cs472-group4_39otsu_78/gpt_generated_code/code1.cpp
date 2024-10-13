#include <iostream>
#include <fstream>
#include <sstream>
#include <unordered_map>
#include <vector>
#include "vertex.hpp" // Assuming vertex.hpp is in the same directory

// Function prototypes
bool DFS(std::unordered_map<std::string, vertex<std::string>>& map,
         std::unordered_map<std::string, std::vector<std::string>>& keys);

std::string crossEdges(const std::string& current,
                       std::unordered_map<std::string, vertex<std::string>>& map,
                       std::unordered_map<std::string, std::vector<std::string>>& keys,
                       std::unordered_map<std::string, bool>& visited);

int main() {
    std::string fileName;

    // Load police station map
    std::ifstream policeStationFile;
    do {
        std::cout << "Enter the police station file name: ";
        std::cin >> fileName;
        policeStationFile.open(fileName);
    } while (!policeStationFile.is_open());

    // Construct the graph
    std::unordered_map<std::string, vertex<std::string>> map;
    std::string line;
    while (std::getline(policeStationFile, line)) {
        std::istringstream iss(line);
        std::string key, value;
        if (iss >> key >> value) {
            map[key].addEdge(value);
            map[value].addEdge(key);
        }
    }
    policeStationFile.close();

    // Get the key locations
    std::unordered_map<std::string, std::vector<std::string>> keys;
    do {
        std::cout << "Enter the keys file name: ";
        std::cin >> fileName;
        policeStationFile.open(fileName);
    } while (!policeStationFile.is_open());

    while (std::getline(policeStationFile, line)) {
        std::istringstream iss(line);
        std::string key, value1, value2;
        if (iss >> key >> value1 >> value2) {
            keys[key].emplace_back(value1);
            keys[key].emplace_back(value2);
        }
    }
    policeStationFile.close();

    // Initiate graph traversal using Depth First Search
    bool success = DFS(map, keys);

    if (success) {
        std::cout << "Congratulations! You escaped the police station!\n";
    } else {
        std::cout << "Unfortunately, you were unable to escape the police station.\n";
    }

    return 0;
}

bool DFS(std::unordered_map<std::string, vertex<std::string>>& map,
         std::unordered_map<std::string, std::vector<std::string>>& keys) {
    std::unordered_map<std::string, bool> visited;
    std::string room = "MainHall";
    visited[room] = true;
    std::string current;

    auto currentIt = map[room].begin();
    current = *currentIt;

    while (current != "Exit") {
        room = crossEdges(current, map, keys, visited);
        if (room == "End")
            break;
        if (!keys[room].empty()) {
            map[keys[room][0]].addEdge(keys[room][1]);
            map[keys[room][1]].addEdge(keys[room][0]);
            currentIt = map[keys[room][0]].begin();
            keys[room].clear();
        } else {
            currentIt = map[room].begin();
        }
        current = *currentIt;
    }

    return current == "Exit";
}

std::string crossEdges(const std::string& current,
                       std::unordered_map<std::string, vertex<std::string>>& map,
                       std::unordered_map<std::string, std::vector<std::string>>& keys,
                       std::unordered_map<std::string, bool>& visited) {
    visited[current] = true;

    if (!keys[current].empty())
        return current;

    for (auto& neighbor : map[current]) {
        if (!visited[neighbor]) {
            std::string result = crossEdges(neighbor, map, keys, visited);
            if (result != "End")
                return result;
        }
    }

    return "End";
}