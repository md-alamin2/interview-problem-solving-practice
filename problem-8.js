// Check if two strings are anagrams
//  Input: "listen", "silent" → Output: true

const checkAnagrams = (word1, word2)=>{
    const word1Array = word1.split("").sort();
    const word2Array = word2.split("").sort();
    console.log(word1Array, word2Array)

    if(word1Array.join()===word2Array.join()){
        console.log(true)
    }else{
        console.log(false)
    }
}

checkAnagrams("listet", "silent")