// Find the second largest number in an array
//  Input: [10, 5, 20, 8, 15] → Output: 15

const secondLargest=(arr)=>{
    let largest = arr[0]
    // find the largest number
    for(let num of arr){
        if(num>largest){
            largest = num
        }
    }
    
    let secondLargestNum = arr [0]
    // find the second largest number
    for(let num of arr){
        if(num<largest && num>secondLargestNum){
            secondLargestNum = num
        }
    }
    console.log(secondLargestNum)

}

secondLargest([10, 5, 20, 8, 15, 30])