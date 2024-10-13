import { QuestionMedia } from "@/components/general/QuestionMedia";
  const isMediaAvailable = question.imageUrl || question.videoUrl;
      {isMediaAvailable && <QuestionMedia imgUrl={question.imageUrl} videoUrl={question.videoUrl} />}