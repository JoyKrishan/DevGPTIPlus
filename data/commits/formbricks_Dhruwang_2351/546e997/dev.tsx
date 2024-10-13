              onFileUpload={(url: string[] | undefined, fileType: "image" | "video") => {
                if (url) {
                  const update = fileType === "video" ? { videoUrl: url[0] } : { imageUrl: url[0] };
                  if (isThankYouCard && updateSurvey) {
                    updateSurvey(update);
                  } else if (updateQuestion) {
                    updateQuestion(questionIdx, update);