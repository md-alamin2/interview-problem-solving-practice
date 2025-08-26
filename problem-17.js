// Find the sum of all numbers in an array
//  Input: [1, 2, 3, 4] → Output: 10

const sum = (arr) => {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  console.log(total)
};

sum([1, 2, 3, 4, 5, 6, 7, 8, 9]);
