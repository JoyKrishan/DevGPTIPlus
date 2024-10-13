import { getLanguageCode } from "@formbricks/lib/i18n/utils";
import {
  TSurvey,
  TSurveyMatrixQuestion,
  TSurveyPictureSelectionQuestion,
  TSurveyQuestion,
  TSurveyQuestionType,
} from "@formbricks/types/surveys";
const isSubmissionTimeMoreThan5Minutes = (submissionTimeISOString: Date) => {
  const submissionTime: Date = new Date(submissionTimeISOString);
  const currentTime: Date = new Date();
  const timeDifference: number = (currentTime.getTime() - submissionTime.getTime()) / (1000 * 60); // Convert milliseconds to minutes
  return timeDifference > 5;
};

  const isValidValue = (value: any) => {
      typeof value === "number" ||
      (typeof value === "object" && Object.entries(value).length > 0)
  };
      if (!isValidValue(response.data[question.id])) {
  const handleArray = (data: string | number | string[]): string => {
  };
          {response.meta.action && <p>Action: {response.meta.action}</p>}
  const renderResponse = (
    questionType: TSurveyQuestionType,
    responseData: string | number | string[] | Record<string, string>,
    question: TSurveyQuestion
  ) => {
    switch (questionType) {
      case TSurveyQuestionType.Rating:
        if (typeof responseData === "number")
          return <RatingResponse scale={question.scale} answer={responseData} range={question.range} />;
      case TSurveyQuestionType.Date:
        if (typeof responseData === "string") return <DateResponse date={responseData} />;
      case TSurveyQuestionType.Cal:
        if (typeof responseData === "string")
          return <p className="ph-no-capture my-1 font-semibold capitalize text-slate-700">{responseData}</p>;
      case TSurveyQuestionType.PictureSelection:
        if (Array.isArray(responseData))
          return (
            <PictureSelectionResponse
              choices={(question as TSurveyPictureSelectionQuestion).choices}
              selected={responseData}
            />
          );
      case TSurveyQuestionType.FileUpload:
        if (Array.isArray(responseData)) return <FileUploadResponse selected={responseData} />;
      case TSurveyQuestionType.Matrix:
        if (typeof responseData === "object" && !Array.isArray(responseData)) {
          return (question as TSurveyMatrixQuestion).rows.map((row) => {
            const languagCode = getLanguageCode(survey.languages, response.language);
            const rowValueInSelectedLanguage = getLocalizedValue(row, languagCode);
            if (!responseData[rowValueInSelectedLanguage]) return;
            return (
              <p className="ph-no-capture my-1 font-semibold capitalize text-slate-700">
                {rowValueInSelectedLanguage}: {responseData[rowValueInSelectedLanguage]}
              </p>
            );
          });
        }

      default:
        if (
          typeof responseData === "string" ||
          typeof responseData === "number" ||
          Array.isArray(responseData)
        )
          return (
            <p className="ph-no-capture my-1 whitespace-pre-line font-semibold text-slate-700">
              {Array.isArray(responseData) ? handleArray(responseData) : responseData}
            </p>
          );
    }
  };

                  {typeof response.data["verifiedEmail"] === "string" ? response.data["verifiedEmail"] : ""}
                    <div>
                      <p className="text-sm text-slate-500">
                        {getLocalizedValue(question.headline, "default")}
                      </p>
                      {renderResponse(question.type, response.data[question.id], question)}
                    </div>
                    <p className="ph-no-capture my-1 font-semibold text-slate-700">
                      {typeof response.data[field] === "string" ? (response.data[field] as string) : ""}
                    </p>