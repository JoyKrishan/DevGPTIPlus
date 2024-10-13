function updateBackgroundColor(element, color) {
  element.style.backgroundColor = color;
}

function swapHeights(element1, element2) {
  const tempHeight = element1.style.height;
  element1.style.height = element2.style.height;
  element2.style.height = tempHeight;
}

function resetBackgroundColor(element) {
  element.style.backgroundColor = "originalBg";
}

function handleFinalState(setArray, sortArr, idx, length) {
  if (idx === length - 1) setArray(sortArr);
}

async function animateSort(animArr, sortArr, settings, setArray) {
  const originalBg = "rgb(79 70 229)";

  for (let idx = 0; idx < animArr.length; idx++) {
    const [start, end] = animArr[idx];

    if (!startDiv || !endDiv) continue;

    updateBackgroundColor(startDiv, "rgb(239 68 68)");
    updateBackgroundColor(endDiv, "rgb(239 68 68)");

    swapHeights(startDiv, endDiv);

    await new Promise<void>((resolve) =>
        updateBackgroundColor(startDiv, originalBg);
        updateBackgroundColor(endDiv, originalBg);
        resolve();
      }, settings.sortingSpeed * 2)
    );

    handleFinalState(setArray, sortArr, idx, animArr.length);
  }