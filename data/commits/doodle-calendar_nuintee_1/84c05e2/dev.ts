
export const setSelector = (options: string[]) => {
  const selector = getSelector();

  selector?.replaceChildren();
  options?.forEach((value: string) => {
    selector?.append(createOption(value));
  });
};