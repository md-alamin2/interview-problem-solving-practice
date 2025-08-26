// Rotate an array by k steps
//  Input: [1,2,3,4,5], k=2 → Output: [4,5,1,2,3]

const rotateArr = (arr, k) => {
  if (arr.length < k)
    return console.log("the value of k should be smaller then array length");
  const rotateIndex = arr.length - k;
  console.log(arr.slice(rotateIndex).concat(arr.slice(0, rotateIndex)));
};

rotateArr([1, 2, 3, 4, 5], 6);
