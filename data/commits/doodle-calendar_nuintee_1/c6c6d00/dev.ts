const STORAGE_KEY = "g-calendar-ext:template";

export const getStorageTemplates = async (): Promise<string[]> => {
  const storage = await chrome.storage.local.get();
  return storage[STORAGE_KEY] || [];
};

export const appendStorageTemplate = async (newValue: string) => {
  const savedTemplates = await getStorageTemplates();

  await chrome.storage.local.set({
    T: [
      ...savedTemplates.filter((template: string) => template !== newValue),
      newValue,
    ],
  });
};

export const clearStorageTemplates = async () => {
  await chrome.storage.local.clear();
};