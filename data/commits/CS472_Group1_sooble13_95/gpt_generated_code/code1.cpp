/*
 *  zigzagLeft(): Performs a left zigzag traversal from the given node.
 *  parameters: binTreeNode* r - node to start the traversal from
 *              std::vector<std::string>& path - the current zigzag path (modified during traversal)
 *  return value: Returns a string vector representing the longest left zigzag path.
 *  Algorithm: Recursively traverses the left subtree, appends node locations to the provided path vector,
 *             and compares the lengths of the resulting left zigzag paths.
 */
std::vector<std::string> binTree::zigzagLeft(binTreeNode* r, std::vector<std::string>& path)
{
    // ...
}

/*
 *  zigzagRight(): Performs a right zigzag traversal from the given node.
 *  parameters: binTreeNode* r - node to start the traversal from
 *              std::vector<std::string>& path - the current zigzag path (modified during traversal)
 *  return value: Returns a string vector representing the longest right zigzag path.
 *  Algorithm: Recursively traverses the right subtree, appends node locations to the provided path vector,
 *             and compares the lengths of the resulting right zigzag paths.
 */
std::vector<std::string> binTree::zigzagRight(binTreeNode* r, std::vector<std::string>& path)
{
    // ...
}

/*
 *  zigzag(): Initiates both left and right zigzag traversals from the root.
 *  parameters: None.
 *  return value: Returns a string vector representing the longest zigzag path overall.
 *  Algorithm: Calls the zigzagLeft and zigzagRight functions from the root, compares the lengths of
 *             resulting zigzag paths, and returns the vector with the longest zigzag path.
 */
std::vector<std::string> binTree::zigzag()
{
    // ...
}