async function animateSort(animArr, sortArr, settings, setArray) {
  const originalBg = 'rgb(79 70 229)';

  for (let idx = 0; idx < animArr.length; idx++) {
    const [start, end] = animArr[idx];
    const startDiv = document.getElementById(`${start}`);
    const endDiv = document.getElementById(`${end}`);

    if (!startDiv || !endDiv) continue;

    updateBackgroundColor(startDiv, 'rgb(239 68 68)');
    updateBackgroundColor(endDiv, 'rgb(239 68 68)');

    swapHeights(startDiv, endDiv);

    await new Promise(resolve =>
      setTimeout(() => {
        updateBackgroundColor(startDiv, originalBg);
        updateBackgroundColor(endDiv, originalBg);
        resolve();
      }, settings.sortingSpeed * 2)
    );

    handleFinalState(setArray, sortArr, idx, animArr.length);
  }
}