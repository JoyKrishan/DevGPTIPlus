import {
  appendStorageTemplate,
  clearStorageTemplates,
  getStorageTemplates,
} from "./utils/storage";
import { sendMessage } from "./utils/message";
      const savedTemplates = await getStorageTemplates();
    await appendStorageTemplate(inputValue);
    await clearStorageTemplates();