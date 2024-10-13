#include <iostream>
#include <list>
#include <stack>
#include <string>
#include <fstream>
#include <unordered_map>

using namespace std;

struct edge{
    string station;
    double distance;
};

stack<string> _88MPH(unordered_map<string, list<edge>>, unordered_map<string, double>, string, double);

int main(){
    ifstream iFile;
    string fileName;

    string startingStation = "";
    string neighborStation = "";
    double neighborDistance = 0.0;

    string stationName = "";
    double power = 0.0;

    string startingLocation = "";
    double initialBattery = 0.0;

    unordered_map<string, list<edge>> mapOfChargingStations;
    unordered_map<string, double> charingStation;
    edge stationInfo;
    stack<string> pathStack;
    string path;

    cout << endl << "Enter charging station map: ";
    cin >> fileName;
    iFile.open(fileName);

    while(iFile >> startingStation >> neighborStation >> neighborDistance){
        stationInfo.station = neighborStation;
        stationInfo.distance = neighborDistance;
        mapOfChargingStations[startingStation].push_back(stationInfo);
    }
    iFile.close();

    cout << endl << "Enter charging station info file: ";
    cin >> fileName;
    iFile.open(fileName);

    while(iFile >> stationName >> power){
        charingStation[stationName] = power;
    }
    iFile.close();

    cout << endl << "Enter starting location and initial battery power: ";
    cin >> startingLocation >> initialBattery;
    cout << endl;

    pathStack = _88MPH(mapOfChargingStations, charingStation, startingLocation, initialBattery);

    if(pathStack.empty()){
        cout << "We are stuck in the space time continuum , Marty!" << endl << endl;
        return 0;
    }

    cout << "Path: ";
    while(!pathStack.empty()){
        cout << pathStack.top() << " -> ";
        pathStack.pop();

        if(pathStack.size() == 1){
            cout << pathStack.top();
            pathStack.pop();
        }
    }
    cout << endl << "Something needs to be done about your kids , Marty!" << endl << endl;

    return 0;
}

stack<string> _88MPH(unordered_map<string, list<edge>> mapOfChargingStations, unordered_map<string, double> chargingStation, string startingLocation, double initialBattery){
    stack<string> stationPath;
    string stationName = "";

    double currentBattery = initialBattery;
    double decreaseBattery = 0.0;
    double currentDistance = 0.0;
    double charge = chargingStation[startingLocation];

    if(currentBattery <= 0.0)
        return {};

    currentBattery = currentBattery + charge;

    if(currentBattery > 75.5)
        return {};
    
    if(currentBattery >= 62.5 && currentBattery <= 75.5){
        stationPath.push(startingLocation);
        return stationPath;
    }

    for(auto& neighbor : mapOfChargingStations[startingLocation]){
        stationName = neighbor.station;
        currentDistance = neighbor.distance;
        decreaseBattery = currentDistance * 0.346;
        stationPath = _88MPH(mapOfChargingStations, chargingStation, stationName, currentBattery-decreaseBattery);
        
        if(!stationPath.empty()){
            stationPath.push(startingLocation);
            break;
        }
    }

    return stationPath;
}