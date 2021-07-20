const binarySearch = (arr, search) => {
  let start = 0;
  let end = arr.length;
  let middle = Math.ceil((end + start) / 2);

  while (start < end) {
    middle = Math.ceil((end + start) / 2);
    if (search === arr[middle]) {
      return middle;
    } else if (search > arr[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
};

console.log(
  binarySearch(
    [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 30, 45, 100, 200],
    200
  )
);
