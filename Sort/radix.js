//i starts a 0...not the same as place.  Place would be place - 1 to get 0
const getDigit = (num, i) => {
  let digit = 0;
  digit = Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  return digit;
};

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (nums) => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
};

const radix = (arr) => {
  let maxDigits = mostDigits(arr);
  for (let k = 0; k < maxDigits; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }
    arr = [].concat(...digitBuckets);
  }
  return arr;
};

console.log(radix([3, 10, 431, 2, 44, 97, 24, 1421, 891]));
