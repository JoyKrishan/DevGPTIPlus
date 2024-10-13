import React, { useState } from "react";
import NavigationPanel from "../../components/NavigationPanel";
import Frame from "../../components/TopPanel";
import PageContent from "../../components/PageContent";
import styles from "./QuizPage.module.css";
import questionsData from "./quiz_questions.json"; 

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false); 
  const [answerSelected, setAnswerSelected] = useState(false);
  const totalQuestions = questionsData.length;

  // Defining seperate scores for the questions here
  const [healthScore, setHealthScore] = useState(0);
  const [professionalScore, setProfessionalScore] = useState(0);
  const [relationshipsScore, setRelationshipsScore] = useState(0);

  const handleAnswerSelection = (answer, type) => {
    const currentQuestion = questionsData[currentQuestionIndex];
    setUserAnswers({
      ...userAnswers,
      [currentQuestionIndex]: { answer, type }, 
    });

    // Update the user scores, based on the category of question
    // Note: This does not work for some reason!!!! Will be fixed at a later date.
    switch (type) {
      case "health":
        setHealthScore((prevScore) => prevScore + answer);
        break;
      case "professional":
        setProfessionalScore((prevScore) => prevScore + answer);
        break;
      case "relationships":
        setRelationshipsScore((prevScore) => prevScore + answer);
        break;
      default:
        break;
    }

    setAnswerSelected(true); // Set answerSelected to true when an answer is selected
  };

  const handleNextButtonClick = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnswerSelected(false); // Reset answerSelected when moving to the next question
    } else {
      setQuizCompleted(true); 
    }
  };

  // Calculate the total possible points for each category
  // This is not a good solution for determining total possible points, but added as a temporary means
  const totalPossiblePoints = (totalQuestions/3) * 5; // Assuming each question has a max score of 5

  // Calculate the percentages for each category
  const healthPercentage = (healthScore / totalPossiblePoints) * 100;
  const professionalPercentage = (professionalScore / totalPossiblePoints) * 100;
  const relationshipsPercentage = (relationshipsScore / totalPossiblePoints) * 100;

  return (
    <div className={styles.quizPage}>
      <NavigationPanel />
      <Frame />
      <PageContent
        pageContentHeight="511px"
        pageContentPosition="absolute"
        pageContentTop="178px"
        pageContentLeft="26px"
      />
      <div className={styles.questionContainer}>
        {currentQuestionIndex < totalQuestions && !quizCompleted && (
          <div className={styles.question}>
            {questionsData[currentQuestionIndex].question}
          </div>
        )}
        {!quizCompleted && (
          <div className={styles.answerOptions}>
            <button className={userAnswers[currentQuestionIndex]?.answer === 1 ? styles.selected : ""} onClick={() => handleAnswerSelection(1, questionsData[currentQuestionIndex].type)}>Strongly Disagree</button>
            <button className={userAnswers[currentQuestionIndex]?.answer === 2 ? styles.selected : ""} onClick={() => handleAnswerSelection(2, questionsData[currentQuestionIndex].type)}>Disagree</button>
            <button className={userAnswers[currentQuestionIndex]?.answer === 3 ? styles.selected : ""} onClick={() => handleAnswerSelection(3, questionsData[currentQuestionIndex].type)}>Neutral</button>
            <button className={userAnswers[currentQuestionIndex]?.answer === 4 ? styles.selected : ""} onClick={() => handleAnswerSelection(4, questionsData[currentQuestionIndex].type)}>Agree</button>
            <button className={userAnswers[currentQuestionIndex]?.answer === 5 ? styles.selected : ""} onClick={() => handleAnswerSelection(5, questionsData[currentQuestionIndex].type)}>Strongly Agree</button>
          </div>
        )}
        {!quizCompleted ? (
          <button onClick={handleNextButtonClick} className={styles.button} disabled={!answerSelected}>
            {currentQuestionIndex < totalQuestions - 1 ? "Next" : "Finish"}
          </button>
        ) : (
          <div>
            <div>Health Score: {healthPercentage.toFixed(2)}%</div>
            <div>Professional Score: {professionalPercentage.toFixed(2)}%</div>
            <div>Relationships Score: {relationshipsPercentage.toFixed(2)}%</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;