                var botDirectory = botAssetPath;
                var lastIndex = botAssetPath.LastIndexOf(Path.DirectorySeparatorChar);
                
                if (lastIndex != -1) 
                {
                    botDirectory = botAssetPath.Substring(0, lastIndex);        
                }