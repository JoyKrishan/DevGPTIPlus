    std::vector<std::string> binTree::zigzagLeft(binTreeNode* r, std::vector<std::string>& path);
    std::vector<std::string> binTree::zigzagRight(binTreeNode* r, std::vector<std::string>& path);

 *  zigzagLeft(): Performs a left zigzag traversal from the given node.
 *  parameters: binTreeNode* r - node to start the traversal from
 *              std::vector<std::string>& path - the current zigzag path (modified during traversal)
 *  return value: Returns a string vector representing the longest left zigzag path.
 *  Algorithm: Recursively traverses the left subtree, appends node locations to the provided path vector,
 *             and compares the lengths of the resulting left zigzag paths.
std::vector<std::string> binTree::zigzagLeft(binTreeNode* r, std::vector<std::string>& path)
    if (r == nullptr)
        return std::vector<std::string>();
    path.push_back(r->location);
    std::vector<std::string> leftPath = zigzagLeft(r->left, path);
    std::vector<std::string> rightPath = zigzagLeft(r->right, std::vector<std::string>());

    return (leftPath.size() > rightPath.size()) ? leftPath : rightPath;
 *  zigzagRight(): Performs a right zigzag traversal from the given node.
 *  parameters: binTreeNode* r - node to start the traversal from
 *              std::vector<std::string>& path - the current zigzag path (modified during traversal)
 *  return value: Returns a string vector representing the longest right zigzag path.
 *  Algorithm: Recursively traverses the right subtree, appends node locations to the provided path vector,
 *             and compares the lengths of the resulting right zigzag paths.
std::vector<std::string> binTree::zigzagRight(binTreeNode* r, std::vector<std::string>& path)
    if (r == nullptr)
        return std::vector<std::string>();

    path.push_back(r->location);

    std::vector<std::string> leftPath = zigzagRight(r->left, std::vector<std::string>());
    std::vector<std::string> rightPath = zigzagRight(r->right, path);
    return (leftPath.size() > rightPath.size()) ? leftPath : rightPath;
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
    std::vector<std::string> vector1; 
    std::vector<std::string> leftZag = zigzagLeft(root, vector1);
    std::vector<std::string> rightZag = zigzagRight(root, vector1);

    if (leftZag.size() + rightZag.size() == 0)
    return (leftZag.size() > rightZag.size()) ? leftZag : rightZag;