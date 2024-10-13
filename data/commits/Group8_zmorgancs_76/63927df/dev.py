def knn(X_data, y_data, X_query, y_query, k):
    prediction_values = []                                                  

    
    testCounter = X_query.shape[0]                                          
    trainingCounter = X_data.shape[0]
    
    for i in range(testCounter):                                            
        minimum_distances = []
        
        for j in range(trainingCounter):                                                 # traverse training data points and build a list of distances
            dist = np.sum(((X_query[i] - X_data[j])**2))                                 
            minimum_distances.append((dist, y_data[j]))                                  # Add the distance calculation to the list of distances

        sorted_dist = sorted(minimum_distances, key = lambda distance: distance[0])          
        neighbors = np.array(sorted_dist[0:k])                                           
        
        distVal, counts = np.unique(neighbors, return_counts = True)                  
        modeIndex = np.argmax(counts)                                           
        prediction_values.append(distVal[modeIndex])                                     # Add the nearest label results to our list of digit guesses
        
    yLen = y_query.shape[0]                                                    
    classMatches = 0                                                        

    for p in range(yLen):                                                          
        if prediction_values[p] == y_query[p]:                                 
            classMatches +=1
    
    return (classMatches/yLen)*100                                     