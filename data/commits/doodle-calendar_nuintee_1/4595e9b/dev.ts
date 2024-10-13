export const createOption = ({ label, hex }: DecorationTemplate) => {
  option.value = label;
  option.innerHTML = label;
  option.dataset["hex"] = hex;

    selector.appendChild(createOption(value));
    selector?.append(createOption(value));