// Find the first non-repeated character in a string
// Input: "swiss" → Output: "w"

const findNonRepeated = (str) => {
  const convertedStr = str.toLowerCase();
  const strCount = {};
  const lessCount = 1;
  for (let char of convertedStr) {
    strCount[char] = (strCount[char] || 0) + 1;
  }

  for (let char of convertedStr) {
    if (strCount[char] === lessCount) {
      return char;
    }
  }
};

console.log(findNonRepeated("JavaScript"));
