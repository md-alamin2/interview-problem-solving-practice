// Find the largest number in an array
//  Input: [1, 5, 3, 9, 2] → Output: 9
const largestNumber=(arr)=>{
    let largest = arr[0]
    for(let num of arr){
        if(largest<num){
            largest= num
        }
    }
    console.log(largest)
}

largestNumber([2, 3, 5, 4, 2, 7, 1])