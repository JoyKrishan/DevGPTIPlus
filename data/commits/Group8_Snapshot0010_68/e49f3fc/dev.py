def KNN(kVal):
    trainingData = []
    testData = []
    correctPredict = 0
    predictedLabels = []

    with open('MNIST_training.csv','r') as trainingFile:
        reader = csv.reader(trainingFile)
        next(reader)
        for line in reader:
            if line:
                    trainingData.append(line)

    with open('MNIST_test.csv','r') as testFile:
        reader = csv.reader(testFile)
        next(reader)
        for line in reader:
            if line:
                testData.append(line)

    for i in testData:
        closestLabels = []
        pointDistance = np.array(euclDistance(i,trainingData))
        trData = np.array(trainingData)
        sortedData = pointDistance.argsort()
        closestPoints = trData[sortedData]
        for k in itertools.islice(closestPoints,kVal):
            closestLabels.append(k[0])
        predictedLabel = max(set(closestLabels),key=closestLabels.count)
        predictedLabels.append(predictedLabel)

    for (i,j) in zip(testData,predictedLabels):
        if(i[0] == j):
             correctPredict += 1

    perecentCorrect = float(correctPredict/len(testData)) * 100
    print(" The percent correct with a k value of " + str(kVal) + " is " + str(perecentCorrect) + "%")