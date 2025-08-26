// Merge two arrays and remove duplicates
//  Input: [1,2,3], [2,3,4] → Output: [1,2,3,4]

const removeDuplicates = (arr1, arr2) => {
  const newArr = [];
  for (let num1 of arr1) {
    if (!newArr.includes(num1)) {
      newArr.push(num1);
    }
    for (let num2 of arr2) {
        if(!newArr.includes(num2)){
            newArr.push(num2)
        }
    }
  }
  console.log(newArr)
};

removeDuplicates([1, 2, 3, 2], [2, 3, 4, 3, 5, 6, 4, 5]);
