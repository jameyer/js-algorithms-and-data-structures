function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

//fib with memoization
const fib2 = (n, memo = []) => {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let res = fib2(n - 1, memo) + fib2(n - 2, memo);
  memo[n] = res;
  return res;
};

console.log(fib2(100));

//fib using tabular
const fib3 = (n) => {
  if (n < 2) return 1;
  var fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
};

console.log(fib3(100));
