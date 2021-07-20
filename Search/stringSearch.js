//Naive string search ends up being O(n²)

const stringSearch = (big, search) => {
  let count = 0;
  for (let i = 0; i < big.length; i++) {
    for (let j = 0; j < search.length; j++) {
      if (j.length + i >= big.search) break; //makes sure i+j doesn't give out of bounds in next search (maybe not necessary in js.)
      if (search[j] !== big[i + j]) break;
      if (j === search.length - 1) count++;
    }
  }
  return count;
};

console.log(stringSearch('asdjfasd', 'sdj'));
