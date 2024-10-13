/**
 * Timer Component:
 * A component that displays elapsed time and updates it every second.
 * Can be reset externally using the resetTimer function.
 *
 * @param {function} update - Callback function to update parent component with elapsed time.
 * @returns {JSX.Element} Timer component.
 */
  const formatTime = (time) => (time < 10 ? `0${time}` : time);

    setElapsedTime((prevElapsedTime) => {
      update(prevElapsedTime);
      return prevElapsedTime + 1;
  const resetTimer = () => {
    setElapsedTime(0);
  };

  const hours = Math.floor((elapsedTime / (60 * 60)) % 24);
  const minutes = Math.floor((elapsedTime / 60) % 60);
  const seconds = Math.floor(elapsedTime % 60);

    <div className="bg-slate-200 rounded flex flex-row w-24 justify-center font-semibold cursor-default">
      <p>{hours > 0 ? `${hours}:` : ""}</p>
      <p>{formatTime(minutes)}:</p>
      <p>{formatTime(seconds)}</p>
      <button onClick={resetTimer}>Reset</button>

export default Timer;