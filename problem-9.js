// Remove spaces from a string
//  Input: "I am a developer" → Output: "Iamadeveloper"

const removeSpace=(str)=>{
const newStr = str.trim().split(" ").join("")
console.log(newStr)
}

removeSpace("  I am a mern stack developer   ")