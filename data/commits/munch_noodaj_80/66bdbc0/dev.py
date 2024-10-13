    acceptedExtensions = ["cpp", "h", "java", "kt"]         # modification: list of source file extensions
                    directoryList = filename.split('/')                                 # modification: split file name by /
                    fileExtension = directoryList[(len(directoryList) - 1)].split('.')  # modification: get file extension
                    if len(fileExtension) > 1:                                          # modification: if there is a file extension, get it
                        fileExtension = fileExtension[1]
                    if fileExtension in acceptedExtensions:                             # modification: if source file, then continue
lstTokens = ["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"]