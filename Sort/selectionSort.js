// time complexity O(n²)
// potentially "better" than bubble sort if writing (aka swapping) is important (almost never though).
const sort = (arr) => {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j;
    }
    if (i != lowest) swap(arr, i, lowest);
  }

  return arr;
};

console.log(sort([5, 1, 2, 3, 4]));
