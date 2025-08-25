// Check if a string is palindrome
// Input: "madam" → Output: true

const palindrome = (str) => {
    const convertedStr = str.toLowerCase();
  const firstLetter = convertedStr[0];
  if (str.endsWith(firstLetter)) {
    return true;
  } else {
    return false;
  }
};


console.log(palindrome("mom"))