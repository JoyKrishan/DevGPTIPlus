export function skipReadingPart(text: string): string {
  // テキスト内の全ての{漢字|かんじ}パターンを探し、漢字部分だけを残す
  return text.replace(/\{([^|]*)\|([^}]*)\}/g, "$1");
}

export function skipWritingPart(text: string): string {
  // テキスト内の全ての{漢字|かんじ}パターンを探し、かんじ部分だけを残す
  return text.replace(/\{([^|]*)\|([^}]*)\}/g, "$2");
}
