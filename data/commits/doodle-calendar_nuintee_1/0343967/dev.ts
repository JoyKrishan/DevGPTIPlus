const SELECTOR_ID = "__TEMPLATE_SELECTOR";

const getSelector = () => {
  return document.getElementById(SELECTOR_ID) as HTMLSelectElement | null;
};

  selector.id = SELECTOR_ID;
  console.log({ selector });

chrome.storage.local.onChanged.addListener(({ T }) => {
  const selector = getSelector();

  if (!T.newValue) return selector?.remove();

  if (!selector) {
    const newSelector = createSelector(T.newValue);
    const input = getInputDOM();
    const parentLabel = input?.parentElement;
    return parentLabel?.appendChild(newSelector);
  }

  selector?.replaceChildren();
  T.newValue?.forEach((value: string) => {
    const option = document.createElement("option");
    option.value = value;
    option.innerHTML = value;

    selector?.append(option);
  });
});
