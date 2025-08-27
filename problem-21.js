// Find factorial of a number
//  Input: 5 → Output: 120

const factorial = (num) => {
  let res = 1;
  for (i = num; i > 0; i--) {
    res = res * i
  }
  console.log(res)
};

factorial(7);
