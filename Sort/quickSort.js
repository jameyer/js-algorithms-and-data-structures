const pivot = (arr, start = 0, end = arr.length - 1) => {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  let pivotIdx = start;
  let pivot = arr[start];

  for (let i = start; i <= end; i++) {
    if (pivot > arr[i]) {
      pivotIdx++;
      swap(arr, i, pivotIdx);
    }
  }
  swap(arr, start, pivotIdx);
  return pivotIdx;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

console.log(quickSort([4, 3, 1, 2]));
