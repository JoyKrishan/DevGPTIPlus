    return null // eslint-disable-next-line @typescript-eslint/no-unused-vars
enum Categories {
  // Developer Tools
  CodeEditors = 'Code Editors', // Developer tool
  VersionControl = 'Version Control', // Developer tool
  IDEs = 'Integrated Development Environments (IDEs)', // Developer tool
  TestingFrameworks = 'Testing Frameworks', // Developer tool
  PackageManagers = 'Package Managers', // Developer tool
  BuildTools = 'Build Tools', // Developer tool
  // Infrastructure
  CloudComputing = 'Cloud Computing', // Infrastructure
  Orchestration = 'Orchestration', // Infrastructure
  Monitoring = 'Monitoring', // Infrastructure
  Networking = 'Networking', // Infrastructure
  Databases = 'Databases', // Infrastructure
  // ML/AI
  MachineLearning = 'Machine Learning', // ML/AI
  NaturalLanguageProcessing = 'Natural Language Processing', // ML/AI
  ComputerVision = 'Computer Vision' // ML/AI
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function categorizeProjectSpecific(readMeOrCategory: string, categoryGeneral: number) {
  // The following 3 variables are the lists of categories used to define the project
  const questionCategoriesSpecific =
    'These categories should be used to categorize a software engineering project. Please choose two of the categories from the list that describe this project the best based on these words or readme (Your response should only consist of the two words you choose, separated by a comma and inside an enum, so like this: [ "Web Development", "Data Analysis"] ) nothing else should be in your answer!: '

  let categoriesSpecific: Categories[] // checks which general category it is
      categoriesSpecific = [
        Categories.CodeEditors,
        Categories.VersionControl,
        Categories.IDEs,
        Categories.TestingFrameworks,
        Categories.PackageManagers,
        Categories.BuildTools
      ]
      categoriesSpecific = [
        Categories.CloudComputing,
        Categories.Orchestration,
        Categories.Monitoring,
        Categories.Networking,
        Categories.Databases
      ]
      categoriesSpecific = [
        Categories.MachineLearning,
        Categories.NaturalLanguageProcessing,
        Categories.ComputerVision
      ]
    case 4: // if chatgpt says categories are not specifc enough we just return two of them
      categoriesSpecific = [
        Categories.CodeEditors,
        Categories.VersionControl,
        Categories.IDEs,
        Categories.TestingFrameworks,
        Categories.PackageManagers,
        Categories.BuildTools,
        Categories.CloudComputing,
        Categories.Orchestration,
        Categories.Monitoring,
        Categories.Networking,
        Categories.Databases,
        Categories.MachineLearning,
        Categories.NaturalLanguageProcessing,
        Categories.ComputerVision
      ]
        content:
          categoriesSpecific.join(', ') + '\n' + questionCategoriesSpecific + readMeOrCategory //turns the array into a string where all categories are seperated by a comma
        return categorizeProjectSpecific(readme, 4) //if the categories are not good enough