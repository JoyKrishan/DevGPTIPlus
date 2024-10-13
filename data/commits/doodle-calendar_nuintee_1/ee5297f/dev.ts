    const selectedOption = target.selectedOptions[0];
    const selectedHex = selectedOption.dataset["hex"] as ColorHex;

    setColor(selectedHex);