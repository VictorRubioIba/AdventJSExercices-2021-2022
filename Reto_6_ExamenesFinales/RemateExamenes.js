function sumPairs(numbers, result) {
let newArray = [];


    for(let i=0;i<numbers.length;i++){
        for(let j=i+1;j<numbers.length;j++){

            if(numbers[i]+numbers[j]==result){
                newArray.push(numbers[i])
                newArray.push(numbers[j])
                break;
            }
        }
    }
    if(newArray.length===0){return null}else{
    return newArray.slice(0,2);
    }
  }

console.log(sumPairs([3, 5, 7, 2], 10)) // [3, 7]
console.log(sumPairs([-3, -2, 7, -5], 10)) // null
console.log(sumPairs([2, 2, 3, 1], 4)) // [2, 2]
console.log(sumPairs([6, 7, 1, 2], 8)) // [6, 2]
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)) // [1, 5]

