// Find the first non-repeated character in a string
// Input: "swiss" → Output: "w"
// TODO: i will do it later
const findNonRepeated=(str)=>{
    const convertedStr = str.toLowerCase();
    const strArray =  convertedStr.split("")
    let repeated = "";
    let nonRepeated = [];
    for(let i = 0; i<convertedStr.length; i++ ){
        if(strArray.includes(convertedStr[i])){
            if(convertedStr[i]){
                repeated = convertedStr[i]
            }else{
                nonRepeated.push(convertedStr[i])
            }
        }
    }
    console.log(nonRepeated[0])
}

findNonRepeated("Programming hero")