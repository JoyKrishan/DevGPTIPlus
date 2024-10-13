func findNodeByName(node, name):
    # Check if the current node has the desired name
    if node.name == name:
        return node

    # If the current node doesn't have the desired name, check its children
    for i in range(node.get_child_count()):
        var child = node.get_child(i)
        # Recursively search through the children
        var result = findNodeByName(child, name)
        # If the node is found in any of the children, return it
        if result:
            return result
    
    # If the node is not found in the current node or its children, return null
    return null