        const ExportToText = (text: string): string => {
          let resolvedText = text.replace(/\(.*?\)/g, "");
          resolvedText = resolvedText.replace(/\[(.*?)\]/g, "$1");
          return resolvedText;
        };

          const resolvedText = ExportToText(state.audioItems[audioKey].text);
          texts.push(speakerName + resolvedText);
        const ExportToEngine = (targettext: string): string => {
          let resolvedText = targettext.replace(/\[.*?\]/g, "");
          resolvedText = resolvedText.replace(/\{(.*?)\}/g, "$1");
          return resolvedText;
        };
        const resolvedText = ExportToEngine(text);

                text: resolvedText,