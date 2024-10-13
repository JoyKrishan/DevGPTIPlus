   function updateBackgroundColor(element, color) {
     element.style.backgroundColor = color;
   }

   function swapHeights(element1, element2) {
     const tempHeight = element1.style.height;
     element1.style.height = element2.style.height;
     element2.style.height = tempHeight;
   }

   function resetBackgroundColor(element) {
     element.style.backgroundColor = 'originalBg';
   }

   function handleFinalState(setArray, sortArr, idx, length) {
     if (idx === length - 1) setArray(sortArr);
   }