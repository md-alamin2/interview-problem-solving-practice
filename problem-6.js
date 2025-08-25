// Count occurrences of a character in a string
// Input: "banana", 'a' → Output: 3

const occurrences=(str, char)=>{
    const convertedStr = str.toLowerCase();
    const convertedChar = char.toLowerCase()
    let count =0 ;
    for(letter of convertedStr){
        if(letter === convertedChar){
            count ++
        }
    }
    console.log(count)
}

occurrences("Programming Hero", "M")