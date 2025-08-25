// Count vowels in a string
// Input: "JavaScript" → Output: 3

const checkVowels= (str)=>{
    const convertedStr = str.toLowerCase();
    const vowels = ["a", 'e', 'i', 'o', 'u']
    let count = 0;
    for(let i = 0 ; i<str.length; i++){
        if(vowels.includes(convertedStr[i])){
            count ++
        }
    }
    console.log(count)
    
}

checkVowels("Programming hero")