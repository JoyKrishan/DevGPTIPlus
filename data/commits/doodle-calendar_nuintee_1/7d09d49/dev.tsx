const OPTIONS = ["📈 SquadBeyond", "👨‍⚕️ TEN"];
const sendMessage = (value: string) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      JSON.stringify({ value }),
      (responseFromContent) => {
        console.log({ responseFromContent });
      }
    );
  });
};
function App() {
    <div className="flex-col">
      {OPTIONS.map((option) => (
        <button onClick={() => sendMessage(option)}>{option}</button>
      ))}
    </div>
  );
export default App;