const SELECTOR_ID = "template-selector";

export const getInputDOM = () => {
  return document.querySelector(
    'input[aria-label="タイトルを追加"]'
  ) as HTMLInputElement | null;
};

export const getSelector = () => {
  return document.getElementById(SELECTOR_ID) as HTMLSelectElement | null;
};

export const createOption = (value: string) => {
  const option = document.createElement("option");
  option.value = value;
  option.innerHTML = value;
  return option;
};

export const createSelector = (options: string[]) => {
  const selector = document.createElement("select");
  selector.id = SELECTOR_ID;

  options.forEach((value) => {
    selector.appendChild(createOption(value));
  });

  selector.onchange = (e) => {
    const input = getInputDOM();
    const target = e.target as HTMLSelectElement;

    if (!input || input.value.includes(target.value)) return;

    input.value = `${target.value} ${input.value}`;
  };

  return selector;
};