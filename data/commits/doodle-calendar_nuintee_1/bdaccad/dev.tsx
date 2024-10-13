import { useState } from "react";
  const [inputValue, setInputValue] = useState("");
  const [templates, setTemplates] = useState<string[]>([]);

  const addTemplates = () => {
    if (!inputValue) return;

    setTemplates((prev) => [
      ...prev.filter((value) => value !== inputValue),
      inputValue,
    ]);
  };

    <div className="flex flex-col gap-y-2 p-2 w-[280px]">
      <div className="flex items-center gap-x-1">
        <input
          type="text"
          className="flex-1 block outline-none"
          placeholder="ラベル名を入力して下さい"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 rounded-md text-white"
          onClick={addTemplates}
        >
          保存
        </button>
      </div>
      <div className="bg-gray-300 w-full h-px"></div>
      <div>
        {templates.map((template) => (
          <button
            className="w-full px-4 py-2 text-start hover:bg-gray-200 rounded-md"
            onClick={() => sendMessage(template)}
          >
            {template}
          </button>
        ))}
      </div>