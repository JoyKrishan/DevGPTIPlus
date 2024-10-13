    if (
      !inputValue.label ||
      templates.find(
        (template) => JSON.stringify(template) === JSON.stringify(inputValue)
      )
    )
      return;