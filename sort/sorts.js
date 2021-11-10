"use strict";

function swap(arr, x, y) {
  const tmp = arr[x];
  arr[x] = arr[y];
  arr[y] = tmp;
}

export function bubbleSort(inputArray) {
  for (let current = 0; current < inputArray.length; ) {
    if (inputArray[current + 1] < inputArray[current]) {
      swap(inputArray, current, current + 1);
      if (current > 0) {
        current--;
      }
    } else {
      current++;
    }
  }
  return inputArray;
}

// function hello() {
//   console.log("Hello");
// };

function partition(inputArray, low, high) {
  const pivot = inputArray[high];
  let i = low;

  for (let j = low; j < high; j++) {
    if (inputArray[j] < pivot) {
      swap(inputArray, i, j);
      i = i + 1;
    }
  }
  swap(inputArray, i, high);

  return i;
}

export function quickSortRec(inputArray, low, high) {
  if (low >= high) {
    return inputArray;
  }
  const partitionIndex = partition(inputArray, low, high);
  quickSortRec(inputArray, low, partitionIndex - 1);
  quickSortRec(inputArray, partitionIndex + 1, high);
  return inputArray;
}

export function quickSort(inputArray) {
  // return inputArray;
  return quickSortRec(inputArray, 0, inputArray.length - 1);
}

function merge(inputArray, low, middle, high) {
  const n1 = middle - low + 1;
  const n2 = high - middle;

  const left = new Array(n1);
  const right = new Array(n2);

  for (var i = 0; i < n1; i++) left[i] = inputArray[low + i];
  for (var j = 0; j < n2; j++) right[j] = inputArray[middle + 1 + j];

  i = 0;
  j = 0;
  let k = low;
  while (i < n1 && j < n2) {
    if (left[i] <= right[j]) {
      inputArray[k] = left[i];
      i++;
    } else {
      inputArray[k] = right[j];
      j++;
    }
    k++;
  }
  while (i < n1) {
    inputArray[k] = left[i];
    i++;
    k++;
  }
  while (j < n2) {
    inputArray[k] = right[j];
    j++;
    k++;
  }
  return inputArray;
}

function mergeSortRec(inputArray, low, high) {
  if (low >= high) {
    return inputArray;
  }
  const middle = low + parseInt((high - low) / 2);
  mergeSortRec(inputArray, low, middle);
  mergeSortRec(inputArray, middle + 1, high);
  return merge(inputArray, low, middle, high);
}

export function mergeSort(inputArray) {
  return mergeSortRec(inputArray, 0, inputArray.length - 1);
}
