export function replaceSkipWordForTextFile(targettext: string): string {
  let resolvedText = targettext.replace(/\{.*?\}/g, "");
  resolvedText = resolvedText.replace(/\[(.*?)\]/g, "$1");
  return resolvedText;
}
export function replaceSkipWordForEngine(targettext: string): string {
  let resolvedText = targettext.replace(/\[.*?\]/g, "");
  resolvedText = resolvedText.replace(/\{(.*?)\}/g, "$1");
  return resolvedText;