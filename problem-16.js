// Find duplicate elements in an array
//  Input: [1, 2, 3, 2, 4, 5, 1] → Output: [1, 2]

const findDuplicate = (arr)=>{
    const duplicateCount={}
    const duplicates = [];
    const maxCount = 1;
    for(let num of arr){
        duplicateCount[num] = (duplicateCount[num] || 0) +1;

        if(duplicateCount[num] > maxCount){
            duplicates.push(num)
        }

    }
    console.log(duplicateCount)
    console.log(duplicates.sort())
}

findDuplicate([1, 2, 3, 2, 4, 5, 1])