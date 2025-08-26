// Find the most frequent character in a string
//  Input: "javascript" → Output: "a"
// TODO: I WILL DO IT LATER
const frequentCharacter = (str) => {
  const newStr = str.toLowerCase();
  console.log(newStr);
  let compare = newStr[0];
  let finalChar
  for (let char of newStr) {
    if (compare === char) {
      finalChar = char;
    } else {
      compare = char;
    }
  }
  console.log(finalChar)
};

frequentCharacter("Programming hero");
