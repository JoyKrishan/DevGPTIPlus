            const skippedReadingPart = skipReadingPart(text);
              return new Blob([bom, skipMemoText(skippedReadingPart)], {
          const skippedReadingPart = skipReadingPart(
          const skippedText = skipMemoText(skippedReadingPart);
          texts.push(speakerName + skippedText);
        const skippedWriting = skipWritingPart(text);
        const skippedText = skipMemoText(skippedWriting);
                text: skippedText,