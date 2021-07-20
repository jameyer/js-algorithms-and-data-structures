/*  recursion 

    Two things needed for recursion.
    Needs base case
    Needs different input each time.

*/

const countdown = (num) => {
  if (num <= 0) {
    console.log('All done!');
    return;
  }
  console.log(num);
  num--;
  countdown(num);
};
const sumRange = (num) => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
};

const factorial = (num) => {
  if (num === 0) return 1;
  return num * factorial(num - 1);
};

const fib = (n) => {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};
