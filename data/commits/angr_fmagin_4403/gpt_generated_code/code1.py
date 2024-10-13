def dfs_back_edges(graph, start_node):
    """
    Perform an iterative DFS traversal of the graph, returning back edges.

    :param graph:       The graph to traverse.
    :param start_node:  The node where to start the traversal.
    :returns:           An iterator of 'backward' edges.
    """
    if start_node not in graph:
        return  # Ensures that the start node is in the graph

    visited = set()   # Tracks visited nodes
    finished = set()  # Tracks nodes whose descendants are fully explored
    stack = [(start_node, iter(graph[start_node]))]

    while stack:
        node, children = stack[-1]
        visited.add(node)

        try:
            child = next(children)
            if child in visited:
                if child not in finished:
                    yield node, child  # Found a back edge
            elif child not in finished:  # Check if the child has not been finished
                stack.append((child, iter(graph[child])))
        except StopIteration:
            stack.pop()  # Done with this node's children
            finished.add(node)  # Mark this node as finished

# Ensure to use this function with a graph that supports the required operations.