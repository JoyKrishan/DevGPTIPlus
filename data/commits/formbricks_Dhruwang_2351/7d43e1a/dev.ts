export const ZI18nString = z.record(z.string()).refine((obj) => "default" in obj, {
  message: "Object must have a 'default' key",
});