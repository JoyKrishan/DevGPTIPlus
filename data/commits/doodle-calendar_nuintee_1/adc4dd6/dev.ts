export const MESSAGE_KEY = "templateValue";

    chrome.tabs.sendMessage(
      tabs?.[0]?.id || 1,
      JSON.stringify({ [MESSAGE_KEY]: value })
    );