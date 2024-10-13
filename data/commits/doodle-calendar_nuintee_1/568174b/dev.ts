
const observer = new MutationObserver(async function () {
  const savedTemplates = (await chrome.storage.local.get())["T"];

  const selector = createSelector(savedTemplates);