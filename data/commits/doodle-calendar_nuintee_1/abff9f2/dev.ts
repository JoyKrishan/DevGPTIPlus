import { DecorationTemplate } from "../types";

export const getStorageTemplates = async (): Promise<DecorationTemplate[]> => {
export const appendStorageTemplate = async (newValue: DecorationTemplate) => {
      ...savedTemplates.filter(
        (template) => JSON.stringify(template) !== JSON.stringify(newValue)
      ),