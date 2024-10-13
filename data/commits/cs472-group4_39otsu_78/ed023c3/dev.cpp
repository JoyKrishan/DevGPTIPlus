#include <bits/stdc++.h>
#include <vertex.hpp>
///---------------------------------------------------------
/// func: DFS()
/// @param unordered_map Police Station Map to traverse
/// @param unordered_map Keys  
/// @return true if found exit, false if exit cannot be found
///---------------------------------------------------------
bool DFS(std::unordered_map<std::string, vertex<std::string>>& map, 
		 std::unordered_map<std::string, std::vector<std::string>>& keys);

///---------------------------------------------------------
/// func: crossEdges()
/// @param unordered_map Police Station Map to traverse
/// @param unordered_map Keys  
/// @return true if found exit, false if exit cannot be found
/// @note The work.
///---------------------------------------------------------
std::string crossEdges(std::string current,
				std::unordered_map<std::string, vertex<std::string>>& map, 
		 		std::unordered_map<std::string, std::vector<std::string>>& keys,
				std::unordered_map<std::string, bool>& visited);

int main()
{
	//----------------------
	// load police station map
	//----------------------
	std::ifstream police_station;
    bool valid_file = false;
    std::string str;
    while (!valid_file) {

        std::cout << "Police Station File: ";
        std::cin >> str;
        police_station.open(str);
        
        if (police_station.is_open()) { // check if valid file
            valid_file = true; // awesome
        }else {
            police_station.clear();
        }
	}

	//----------------------
	// constructing the graph
	//----------------------
	std::unordered_map<std::string, vertex<std::string>> map;
	std::stringstream ss;
	str.clear();
	while (!police_station.eof()) {

		std::string kee;
		std::string value;

		std::getline(police_station, str, '\n');
		ss.clear();
		if (!str.empty()) {
			ss << str;
			ss >> kee; // key
			ss >> value; // value
			map[kee].addEdge(value); // adding edge to the nodes
			map[value].addEdge(kee); // do it 2x because the graph is undirected
		}

	}
	police_station.close();

	//----------------------
	// get the key locations
	//----------------------
	std::unordered_map<std::string, std::vector<std::string>> keys;
    valid_file = false;
    str.clear();
    while (!valid_file) {

        std::cout << "Keys File: ";
        std::cin >> str;
        police_station.open(str);
        
        if (police_station.is_open()) { // check if valid file
            valid_file = true; // awesome
        }else {
            police_station.clear();
        }
	}
	
	while (!police_station.eof()) {

		std::string kee;
		std::string value;

		std::getline(police_station, str, '\n');
		ss.clear();
		if (!str.empty()) {
			ss << str;
			ss >> kee;
			ss >> value;

			keys[kee].push_back(value);

			value.clear();
			ss >> value;

			keys[kee].push_back(value);
		}

	}
	police_station.close();

	//----------------------
	// initiating graph traversal using Depth First Search
	//----------------------
	bool success = DFS(map, keys);

	if (success) {
		std::cout << "Ok Leon, you escaped the police station, now to find Ada\n";
	}else {
		std::cout << "Ok Leon, your first day will be your last day on the force\n";
	}

	return 0;
}

bool DFS(std::unordered_map<std::string, vertex<std::string>>& map, 
		 std::unordered_map<std::string, std::vector<std::string>>& keys)
{
	std::unordered_map<std::string, bool> visited;
	
	// manually visit the mainhall to get starting position
	std::string room = "MainHall";
	visited[room] = true;

	// get starting position in traversal
	auto current_it = map[room].begin();
	std::string current = *current_it;

	bool found = false;
	while (!found) {

		current = *current_it; // get current room

		// traverse until dead end encountered
		room = crossEdges(current, map, keys, visited);

		// if found exit or hit dead end
		if (room == "Exit") {

			found = true;

		}else if (room == "End") {

			break;

		}

		// if dead end happens to be a key room
		// add edges and go new edge
		if (!keys[room].empty()) {
			map[keys[room][0]].addEdge(keys[room][1]);
			map[keys[room][1]].addEdge(keys[room][0]);
			
			current_it = map[keys[room][0]].begin();
			keys[room].clear();

		}else {
			// try another edge from parent node
			current_it = map[room].begin();
		}
		

		
	}

	return found;
}

std::string crossEdges(std::string current,
				std::unordered_map<std::string, vertex<std::string>>& map, 
		 		std::unordered_map<std::string, std::vector<std::string>>& keys,
				std::unordered_map<std::string, bool>& visited)
{
	// === base case ===
	if (current == "Exit") return "Exit";

	// mark visited
	visited[current] = true;

	// if its a key room, go back and unlock doors
	if (!keys[current].empty()) return current;

	/// === general case ===
	std::string str = "End";
	for (auto begin = map[current].begin(); begin != map[current].end(); begin++) {

		if (visited[*begin]) continue; 
		
		// traverse until dead end reached
		str = crossEdges(*begin, map, keys, visited);

		// return dead end to parent
		if (str != "End") {
			return str;
		}
		
	}
	
	// return if no escape
	return str;
}