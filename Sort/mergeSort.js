// O(n+m) runtime

const merge = (arr1, arr2) => {
  let result = [];

  let idx1 = 0;
  let idx2 = 0;

  while (idx1 < arr1.length && idx2 < arr2.length) {
    if (arr1[idx1] < arr2[idx2]) {
      result.push(arr1[idx1]);
      idx1++;
    } else if (arr1[idx1] > arr2[idx2]) {
      result.push(arr2[idx2]);
      idx2++;
    } else if (arr1[idx1] === arr2[idx2]) {
      result.push(arr1[idx1]);
      result.push(arr2[idx2]);
      idx1++;
      idx2++;
    }
  }

  while (idx2 < arr2.length) {
    result.push(arr2[idx2]);
    idx2++;
  }

  while (idx1 < arr1.length) {
    result.push(arr1[idx1]);
    idx1++;
  }

  return result;
};

const sort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = sort(arr.slice(0, mid));
  let right = sort(arr.slice(mid));
  return merge(left, right);
};

console.log(sort([1, 5, 3]));
