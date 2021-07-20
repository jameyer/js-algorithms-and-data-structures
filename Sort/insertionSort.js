// Time:  O(n²)
const sort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j; // needs outside loop to be used on last insert
    for (j = i - 1; j > -1 && arr[j] > currentVal; j--) {
      if (arr[j] > currentVal) {
        arr[j + 1] = arr[j];
      }
    }
    arr[j + 1] = currentVal;
  }
  return arr;
};

console.log(sort([2, 1, 9, 76, 4]));
