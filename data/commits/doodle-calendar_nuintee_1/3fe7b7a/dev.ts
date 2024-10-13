const OPTIONS = ["📈 SquadBeyond", "👨‍⚕️ TEN"];

  const selector = document.createElement("select");
  OPTIONS.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.innerHTML = value;

    selector.appendChild(option);
  });

  const parentLabel = input.parentElement;

  if (parentLabel) {
    parentLabel.style.paddingLeft = "1rem";
  }

  selector.onchange = (e) =>
    ((input as HTMLInputElement).value = (
      e?.target as HTMLSelectElement
    )?.value);

  parentLabel?.appendChild(selector);