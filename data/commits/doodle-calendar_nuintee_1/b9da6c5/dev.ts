const getInputDOM = () => {
  return document.querySelector(
    'input[aria-label="タイトルを追加"]'
  ) as HTMLInputElement | null;
};
const createSelector = (options: string[]) => {
  options.forEach((value) => {
  selector.onchange = (e) => {
    const input = getInputDOM();
    const target = e.target as HTMLSelectElement;

    if (!input || input.value.includes(target.value)) return;

    input.value = `${target.value} ${input.value}`;
  };
  return selector;
};
const observer = new MutationObserver(function () {
  const input = getInputDOM();

  if (!input) return;
  const selector = createSelector(OPTIONS);

  const parentLabel = input.parentElement;

  const input = getInputDOM();