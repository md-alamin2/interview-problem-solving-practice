// Convert string to title case
//  Input: "hello world" → Output: "Hello World"

const makeTitleCase = (str)=>{
    const words = str.split(" ");
    const titleCaseArray = []
    for (let word of words){
      let convertedWord = word.charAt(0).toUpperCase() + word.slice(1)
      titleCaseArray.push(convertedWord)
       
    }
    console.log(titleCaseArray.join(" "))
}

makeTitleCase("programming hero, lets code you carer")