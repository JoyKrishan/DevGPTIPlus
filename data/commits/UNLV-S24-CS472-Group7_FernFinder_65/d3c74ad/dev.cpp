#include <iostream>
#include <vector>
#include <algorithm>
#include "node.h"

using namespace std;

//Helper Functions
void printmatrix(int [][4]);
bool isgoalstate(int [][4]);
bool isequivstate(int [][4], int [][4]);
void applyOperator(Node&, int, vector<Node>&, vector<Node>&, function<void(Node&)>);

struct compare{
    const bool operator() (const Node& l, const Node& r){
        return l.fScore>r.fScore;
    }
};

int main(){
    //Puzzle Initial State Creation
    int puzzle[4][4] = {0};

    //==================================PUZZLE INPUT==================================
    //Input for puzzle matrix, use -1 for blank
    cout << "Enter matrix input (-1 for blank space): ";
    for(int i = 0; i < 4; i++)
        for(int j = 0; j < 4; j++)
            cin >> puzzle[i][j];
    
    //==================================A* Algorithm==================================
    int minIndex = 0;

    //Make open and closed sets
    vector<Node> openSet;
    vector<Node> closedSet;

    //Initialize start node (should probably make a constructor)
    Node start(puzzle);
    start.gScore = 0;
    start.hScore = start.calcHeuristic();
    start.fScore = start.gScore + start.hScore;
    start.prev = -1;

    //Make openSet a heap
    openSet.push_back(start);
    make_heap(openSet.begin(), openSet.end(), compare());

    //A* algorithm
    while(!openSet.empty()){
    
        //sort_heap was not working here, need to debug
        make_heap(openSet.begin(), openSet.end(), compare());

        //Get min value from heap
        Node current = openSet[0];

        //End loop if goal state found
        if (isgoalstate(current.matrix)){
            break;
        }

        //Move open node to closed node
        pop_heap(openSet.begin(), openSet.end());
        openSet.pop_back();
        closedSet.push_back(current);
        int parentIndex = closedSet.size()-1;

    // Usage of the applyOperator function

    // UP operator
    if (current.blankRow > 0) {
        applyOperator(current, parentIndex, openSet, closedSet, [](Node& node) { node.UP(); });
    }

    // DOWN operator
    if (current.blankRow < 3) {
        applyOperator(current, parentIndex, openSet, closedSet, [](Node& node) { node.DOWN(); });
    }

    // LEFT operator
    if (current.blankColumn != 0) {
        applyOperator(current, parentIndex, openSet, closedSet, [](Node& node) { node.LEFT(); });
    }

    // RIGHT operator
    if (current.blankColumn != 3) {
        applyOperator(current, parentIndex, openSet, closedSet, [](Node& node) { node.RIGHT(); });
    }

    }
    
    vector<int> path;

    int trace = openSet[0].prev;
    cout << trace;

    cout << "\n closed set size: " << closedSet.size() << "\n";
    cout << "\n open set size: " << openSet.size() << "\n";
    printmatrix(closedSet[trace].matrix);
    while(trace != -1){
        path.push_back(trace);
        trace = closedSet[trace].prev;
        printmatrix(closedSet[trace].matrix);
    }

    closedSet.push_back(openSet[0]);

    while(!path.empty()){
        trace = path.back();
        path.pop_back();
        printmatrix(closedSet[trace].matrix);
    }

    if(isgoalstate(openSet[minIndex].matrix)){
        cout << "Goal State Reached";
    }
}

//Prints Puzzle Matrix
void printmatrix(int puzzle[][4]){
    for(int i = 0; i < 4; i++){
        for(int j = 0; j < 4; j++){
            cout << puzzle[i][j] << " ";
        }
        cout << endl;
    }
    return;
}

//Helper function to check for Goal State
bool isgoalstate(int puzzle[][4]){
    
    int goalnumber = 1;

    for(int i = 0; i < 4; i++){
        for(int j = 0; j < 4; j++){
            //Check if numbers are in sequential order
            if(puzzle[i][j] != goalnumber){
                
                //Last spot is guarenteed to be -1 if all the other slots are in the goal state
                if(goalnumber == 16)
                    continue;
                
                //Test output to see where a board failed
                //cout << "This triggered on Row: " << i+1 << " Column: " << j+1 << "\n";

                //Not in goal state so return false
                return false;
            }
            goalnumber++;
        }
    }

    //In goal state so return true
    return true;
}

//Helper function to see if two matrixes are equivalent
bool isequivstate(int current[][4], int vector[][4]){
    for(int i = 0; i < 4; i++){
        for(int j = 0; j < 4; j++){
            if(current[i][j] != vector[i][j]){
                return false;
            }
        }
    }
    return true;
}

void applyOperator(Node& current, int parentIndex, vector<Node>& openSet, vector<Node>& closedSet, function<void(Node&)> operate) {
    Node neighbor = current;
    operate(neighbor);
    neighbor.prev = parentIndex;
    neighbor.gScore += 1;
    neighbor.hScore = neighbor.calcHeuristic();
    neighbor.fScore = neighbor.gScore + neighbor.hScore;

    bool closedNode = false;
    for (int i = 0; i < closedSet.size(); i++) {
        if (isequivstate(neighbor.matrix, closedSet[i].matrix)) {
            closedNode = true;
            break;
        }
    }

    if (!closedNode) {
        bool openNode = false;
        int openNodeIndex = 0;
        for (int i = 0; i < openSet.size(); i++) {
            if (isequivstate(neighbor.matrix, openSet[i].matrix)) {
                openNode = true;
                openNodeIndex = i;
                break;
            }
        }

        if (openNode) {
            if (openSet[openNodeIndex].gScore > neighbor.gScore) {
                openSet[openNodeIndex].gScore = neighbor.gScore;
                openSet[openNodeIndex].fScore = neighbor.fScore;
                openSet[openNodeIndex].prev = neighbor.prev;
            }
        } else {
            openSet.push_back(neighbor);
            push_heap(openSet.begin(), openSet.end());
        }
    }
}