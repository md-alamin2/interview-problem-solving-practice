// Find the smallest number in an array
//  Input: [1, 5, 3, 9, 2] → Output: 1

const smallestNumber =(arr)=>{
    let smallest= arr[0]
    for(let num of arr ){{
        if(num<smallest){
            smallest = num
        }
    }}
    console.log(smallest)
}

smallestNumber([ 3, 2, 4, 5, 1, 3, 6, 7, 8, 2])