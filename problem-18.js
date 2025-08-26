// Find the average of an array
//  Input: [1, 2, 3, 4, 5] → Output: 3

const avg = (arr)=>{
    let total =0;
    for(let num of arr){
        total += num;
    }
    const average = total/arr.length
    console.log(average)
}

avg([1, 2, 3, 4, 5])