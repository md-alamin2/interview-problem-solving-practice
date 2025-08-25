// Q: Reverse a string
// Input: "hello" → Output: "olleh"

const revString=(str)=>{
    const strArray = str.split("")
    const revStrArray = strArray.reverse()
    return revStrArray.join("")
}

console.log(revString("hello"))
