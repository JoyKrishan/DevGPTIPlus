export const determineImageUploaderVisibility = (questionIdx: number, localSurvey: TSurvey) => {
  switch (questionIdx) {
    case localSurvey.questions.length: // Thank You Card
      console.log(!!localSurvey.thankYouCard.imageUrl || !!localSurvey.thankYouCard.videoUrl);
    case -1: // Welcome Card
      const question = localSurvey.questions[questionIdx];