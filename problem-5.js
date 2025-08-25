// Find the longest word in a sentence
// Input: "I love programming in JavaScript" → Output: "programming"

const findLongestWord = (str)=>{
    const strArray = str.split(" ")
    let singleWord = strArray[0]
    let largest
    for(let word of strArray){
        if(singleWord.length < word.length){
            singleWord = word
            largest = word
        }
    }
    console.log(largest)

}

findLongestWord("I love programming in JavaScript")