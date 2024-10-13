 * This method takes a number 1,2,3 or 4. This number was determined by the categorizeGeneral Method
 * based on this number the list variable categoriesspecfic gets filled with different categories out of the Categories ENUM.
 * If it is a 4 which means that the categories were not good enough to determine a general type then we just
 * put all the available categories inside the variable.
 * After the the correct categories are assigned we call ChatGPT with a prompt to tell us
 * which categories fit the best. These categories are then returned in an enum string
  //defines the request. Adding the readMe or categories and the correct categories
  //sends the request and returns the content which should look like this  [ "Web Development", "Data Analysis"]
 * This method takes the categories and the readme of a repo as parameters. Then it asks chatgpt to categorize
 * it into one three categories. Please see below the variable: listOfCategories
 * ChatGPT returns the numbers 1,2 or 3. Each number represents one of the categories.
    //The three categories
  request_body_Categories.messages[1].content = //adds the categories to the question and then adds them to the request that is going to be send
      const num = parseInt(content) //parses the returned string into a number
        return categorizeProjectSpecific(readme, 4) //if chatGPT does not think that the categories are good enough it does not return a number
        //If there is no number we specify the categories based on the readme and we take into consideration all categories
        return categorizeProjectSpecific(categories, num) //if the number is correct we only pick the specifc categories which are predetermined inside the specfic method