import { FileInput } from "../FileInput";
  const getVideoUrl = () => {
    if (isThankYouCard) return localSurvey.thankYouCard.videoUrl;
    else if (isWelcomeCard) return localSurvey.welcomeCard.videoUrl;
    else return question.videoUrl;
  };

        <div className="flex flex-col gap-4">
              onFileUpload={(url: string[] | undefined, isVideo: boolean) => {
                  if (isVideo) {
                    updateSurvey({ videoUrl: url[0] });
                  } else {
                    updateSurvey({ imageUrl: url[0] });
                  }
                  if (isVideo) {
                    updateQuestion(questionIdx, { videoUrl: url[0] });
                  } else {
                    updateQuestion(questionIdx, { imageUrl: url[0] });
                  }
              videoUrl={getVideoUrl()}
              isVideoAllowed={true}