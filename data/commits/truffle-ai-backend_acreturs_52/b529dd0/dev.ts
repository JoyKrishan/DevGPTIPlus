  Authorization: 'Bearer ' + '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' //process.env.OPENAI_API_KEY
    default: // if chatgpt says categories are not specifc enough we just return two of them
  console.log(categories)
    'These 3 categroies should be used to categorize a software engineering project. 1 for developer tools, 2 for Infrastructure, 3 for Machine Learning and Artifical Inteligence. just decide on the categories and only return the numbers. So your number for example should be: 3. Only return one number! If you did not find any categories at the beginning of the question just tell me:  '
          'You are a professor trying to categorize a project. You have to read something about the project and then give it two of the categories according to your evaluation. Even if you do not think that you can evaluate it. If you do not think you can evaluate it just tell me'
    listOfCategories.join(' ,') + questionCategoriesGeneral + categories + readme
      //I want to filter out the numbers from the gpt response
      const numberRegex = /\d/g
      const numbers: number[] = content.match(numberRegex)?.map(Number) || [] //takes the numbers out of the response
      if (numbers.length != 0) {
        return categorizeProjectSpecific(readme, numbers[0])
      } else {
        return "['could not','evaluate categories]"
      }
      /*
      console.log(num)
      }*/