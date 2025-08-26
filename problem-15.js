// Remove duplicates from an array
//  Input: [1, 2, 3, 2, 4, 5, 1] → Output: [1, 2, 3, 4, 5]

const removeDuplicates = (arr) => {
  const newArr = [];
  for (let num of arr) {
    if (!newArr.includes(num)) {
      newArr.push(num);
    }
  }
  console.log(newArr);
};

removeDuplicates([1, 2, 3, 2, 4, 5, 1, 5, 2, 3, 4, 5, 6, 7, 5,7 , 4,4, 34,]);
