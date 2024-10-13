import { Dispatch, SetStateAction } from "react";
import { SettingsInterface } from "../context/AlgorithContext.types";

export function generateArray(arrayLen: number) {
  return Array.from(
    { length: arrayLen },
    () => Math.floor(Math.random() * 60) + 20
  );
}

export function bubbleSort(inputArr: number[]) {
  const bubbleArr = [...inputArr];
  const bubbleAnim: number[][] = [];
  const len = bubbleArr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (bubbleArr[j] > bubbleArr[j + 1]) {
        bubbleAnim.push([j + 1, j]);
        const tmp = bubbleArr[j];
        bubbleArr[j] = bubbleArr[j + 1];
        bubbleArr[j + 1] = tmp;
      }
    }
  }
  return { bubbleArr, bubbleAnim };
}

export function insertionSort(inputArr: number[]) {
  const insertionArr = [...inputArr];
  const insertionAnim: number[][] = [];
  const length = insertionArr.length;
  for (let i = 1; i < length; i++) {
    let j = i;
    while (j > 0 && insertionArr[j - 1] > insertionArr[j]) {
      insertionAnim.push([j - 1, j]);
      const tmp = insertionArr[j - 1];
      insertionArr[j - 1] = insertionArr[j];
      insertionArr[j] = tmp;
      j--;
    }
  }

  return { insertionArr, insertionAnim };
}

export function animateSort(
  animArr: number[][],
  sortArr: number[],
  settings: SettingsInterface,
  setArray: Dispatch<SetStateAction<number[]>>
) {
  animArr.forEach(([start, end], idx) => {
    const startDiv = document.getElementById(`${start}`);
    const endDiv = document.getElementById(`${end}`);
    if (!startDiv || !endDiv) return;
    setTimeout(() => {
      const selectedBg = "rgb(239 68 68)";
      startDiv.style.backgroundColor = endDiv.style.backgroundColor =
        selectedBg;
      const startDivHeight = startDiv.style.height;
      startDiv.style.height = endDiv.style.height;
      endDiv.style.height = startDivHeight;
      setTimeout(() => {
        const originalBg = "rgb(79 70 229)";
        startDiv.style.backgroundColor = endDiv.style.backgroundColor =
          originalBg;
        if (idx === animArr.length - 1) setArray(sortArr);
      }, settings.sortingSpeed * 2);
    }, settings.sortingSpeed * idx * 2);
  });
}