#include <iostream>
#include <vector>
#include <algorithm>
#include <functional>

// Class representing a state in the puzzle
class Node {
    // ... (members and functions of the Node class)
};

// Function to apply an operator to a node
void applyOperator(Node& current, int parentIndex, std::vector<Node>& openSet, std::vector<Node>& closedSet, std::function<void(Node&)> operation) {
    // ...
}

// Function to execute the A* algorithm
void runAStarAlgorithm(std::vector<Node>& openSet, std::vector<Node>& closedSet, const int puzzle[4][4]) {
    // Initialize start node
    Node start(puzzle);
    start.gScore = 0;
    start.hScore = start.calcHeuristic();
    start.fScore = start.gScore + start.hScore;
    start.prev = -1;

    // Make openSet a heap
    openSet.push_back(start);
    std::make_heap(openSet.begin(), openSet.end(), compare());

    // A* algorithm
    while (!openSet.empty()) {

        // Get the node with the minimum fScore from the heap
        Node current = openSet[0];

        // End loop if goal state found
        if (isgoalstate(current.matrix)) {
            break;
        }

        // Move open node to closed node
        std::pop_heap(openSet.begin(), openSet.end());
        openSet.pop_back();
        closedSet.push_back(current);
        int parentIndex = closedSet.size() - 1;

        // Apply operators to generate successor nodes

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
}

// Function to print the matrix
void printMatrix(const int matrix[4][4]) {
    // ...
}

// Function to get user input for the initial puzzle state
void getUserInput(int puzzle[4][4]) {
    // ...
}

int main() {
    // Initialize puzzle and sets
    int puzzle[4][4] = {0};
    std::vector<Node> openSet;
    std::vector<Node> closedSet;

    // Get user input for the initial puzzle state
    getUserInput(puzzle);

    // Execute the A* algorithm
    runAStarAlgorithm(openSet, closedSet, puzzle);

    // ... (rest of the code for result display)
    return 0;
}