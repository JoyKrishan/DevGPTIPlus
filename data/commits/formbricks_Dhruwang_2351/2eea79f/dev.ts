  TSurveyMatrixQuestion,
// Function to get index for choice /rowLabel /columnLabel
export const getIndex = (id: string, isChoice: boolean) => {
export const getMatrixLabel = (
  question: TSurveyQuestion,
  idx: number,
  surveyLanguageCodes: string[],
  type: "row" | "column"
): TI18nString => {
  const matrixQuestion = question as TSurveyMatrixQuestion;
  const labels = type === "row" ? matrixQuestion.rows : matrixQuestion.columns;
  return labels[idx] || createI18nString("", surveyLanguageCodes);
};
