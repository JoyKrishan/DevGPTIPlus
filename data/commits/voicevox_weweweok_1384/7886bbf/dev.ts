export function replaceSkipWord(targettext: string): {
  skipInCurlyBrackets: string;
  skipInBrackets: string;
} {
  // {}をスキップ
  const skipInCurlyBrackets = targettext.replace(/\[(.*?)\]\{.*?\}/g, "$1");

  // []をスキップ
  let skipInBrackets = targettext.replace(/\[(.*?)\]/g, "");
  skipInBrackets = skipInBrackets.replace(/\{(.*?)\}/g, "$1");
  return { skipInCurlyBrackets, skipInBrackets };