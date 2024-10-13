import { useEffect, useState } from "react";
  useEffect(() => {
    const init = async () => {
      const savedTemplates = (await chrome.storage.local.get())["T"] || [];

      setTemplates((prev) => [
        ...prev.filter((template) => !savedTemplates.includes(template)),
        ...savedTemplates,
      ]);
    };

    init();
  }, []);

  const addTemplates = async () => {
    if (!inputValue || templates.includes(inputValue)) return;

    const savedTemplates = (await chrome.storage.local.get())["T"] || [];

    chrome.storage.local.set({
      T: [
        ...savedTemplates.filter((template: string) => template !== inputValue),
        inputValue,
      ],
    });
  };

  const clearData = async () => {
    const answer = confirm("テンプレートを全て削除します");

    if (!answer) return;

    setTemplates([]);

    await chrome.storage.local.clear();
      <button
        className="px-4 py-2 enabled:text-red-400 disabled:text-gray-400 disabled:bg-gray-100 enabled:hover:bg-red-500 enabled:hover:text-white rounded-md"
        onClick={clearData}
        disabled={!templates.length}
      >
        データ削除
      </button>