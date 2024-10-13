var botAssetPath = AssetDatabase.GUIDToAssetPath(botGuid);
var lastIndex = botAssetPath.LastIndexOf(Path.DirectorySeparatorChar);

if (lastIndex != -1)
{
    var botDirectory = botAssetPath.Substring(0, lastIndex);
    // Rest of your code
}
else
{
    // Handle the case when the directory separator is not found
    // This might involve setting a default directory or handling the error
}