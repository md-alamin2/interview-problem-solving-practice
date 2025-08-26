// Reverse an array without using reverse()
//  Input: [1, 2, 3, 4] → Output: [4, 3, 2, 1]

const reverse=(arr)=>{
    const revArr = []
    for (let i = 0; i < arr.length ; i++){
        revArr.unshift(arr[i])
    }
    console.log(revArr)
}

reverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])