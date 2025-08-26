// Find the most frequent character in a string
//  Input: "javascript" → Output: "a"

const frequentCharacter = (str) => {
  const newStr = str.toLowerCase();
 const strCount = {}
 let mostFrequentLength = 0;
 let mostFrequent = ""
  for (let char of newStr) {
    strCount[char] = (strCount[char] || 0) + 1;
  }
  for (let char of newStr){
    if(strCount[char] > mostFrequentLength){
      mostFrequentLength = strCount[char]
      mostFrequent = char
    }
  }
  console.log(mostFrequent)
};

frequentCharacter("Javascript")
