// テキストから読み部分をスキップする関数
function skipReadingPart(text: string): string {
    // テキスト内の全ての{漢字|かんじ}パターンを探し、漢字部分だけを残す
    return text.replace(/\{([^|]*)\|([^}]*)\}/g, '$1');
}

// テキストから漢字部分をスキップする関数
function skipWritingPart(text: string): string {
    // テキスト内の全ての{漢字|かんじ}パターンを探し、かんじ部分だけを残す
    return text.replace(/\{([^|]*)\|([^}]*)\}/g, '$2');
}

// テスト
let testText = "これはテストです。{漢字|かんじ}の部分は読み替えられます。";
console.log("Original Text: ", testText);
console.log("Reading Part: ", skipReadingPart(testText));
console.log("Writing Part: ", skipWritingPart(testText));