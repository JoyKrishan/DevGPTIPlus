import { ZBaseStyling } from "./styling";
  headline: ZI18nString,
export const ZSurveyStyling = ZBaseStyling.extend({
  overwriteThemeStyling: z.boolean().nullish(),

export type TSurveyEditorTabs = "questions" | "settings" | "styling";