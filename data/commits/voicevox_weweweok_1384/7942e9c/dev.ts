export function textExportToText(targettext: string): string {
  let resolvedText = targettext.replace(/\{.*?\}/g, "");
  resolvedText = resolvedText.replace(/\[(.*?)\]/g, "$1");
  return resolvedText;
}

export function textExportToEngine(targettext: string): string {
  let resolvedText = targettext.replace(/\[.*?\]/g, "");
  resolvedText = resolvedText.replace(/\{(.*?)\}/g, "$1");
  return resolvedText;
}
