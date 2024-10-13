var rootNode = get_tree().get_root()
var nodeName = "NodeName"
var foundNode = findNodeByName(rootNode, nodeName)

if foundNode:
    print("Found node:", foundNode)
else:
    print("Node not found")