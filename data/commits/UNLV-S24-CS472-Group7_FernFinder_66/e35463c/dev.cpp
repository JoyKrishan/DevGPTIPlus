    // A* algorithm
    while (!openSet.empty()) {
        // Get the node with the minimum fScore from the heap
        // End loop if goal state found
        if (isgoalstate(current.matrix)) {
        // Move open node to closed node
        std::pop_heap(openSet.begin(), openSet.end());
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