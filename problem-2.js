// Check if a string is palindrome
// Input: "madam" → Output: true

const palindrome = (str) => {
  const firstLetter = str[0];
  if (str.endsWith(firstLetter)) {
    return true;
  } else {
    return false;
  }
};


console.log(palindrome("mom"))