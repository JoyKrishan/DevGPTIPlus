import { useEffect, useState } from "preact/hooks";
// Import other required components and hooks

export default function NPSQuestion({
  question,
  value,
  onChange,
  onSubmit,
  onBack,
  isFirstQuestion,
  isLastQuestion,
  ttc,
  setTtc,
}: NPSQuestionProps) {
  const [localValue, setLocalValue] = useState(value);
  const [startTime, setStartTime] = useState(performance.now());

  // Reset local value when the question changes
  useEffect(() => {
    setLocalValue(value);
    setStartTime(performance.now());
  }, [question.id, value]);

  // Ensure to track the time correctly for the TTC (Time to Complete)
  useTtc(question.id, ttc, setTtc, startTime, setStartTime);

  const handleSubmit = (selectedValue: number) => {
    const updatedTtcObj = getUpdatedTtc(ttc, question.id, performance.now() - startTime);
    setTtc(updatedTtcObj);
    onSubmit({ [question.id]: selectedValue }, updatedTtcObj);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(Number(localValue));
      }}>
      {/* Render question image, headline, subheader */}
      <div className="options-container">
        {Array.from({ length: 11 }, (_, i) => i).map((number) => (
          <label key={number} className="option-label">
            <input
              type="radio"
              name={`nps-${question.id}`}
              value={number}
              checked={Number(localValue) === number}
              onChange={() => setLocalValue(number)}
              onClick={() => handleSubmit(number)}
              className="option-input"
            />
            {number}
          </label>
        ))}
      </div>
      {/* Render lower and upper labels */}
      {/* Render back and submit buttons, handling their click events */}
    </form>
  );
}