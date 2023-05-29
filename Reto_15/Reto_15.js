function checkSledJump(heights) {
    let firstArr=[]
    let secondArr=[]
    let num =0

if(heights.length%2===0){
    firstArr=heights.slice(0,heights.length/2)
}else{
    firstArr=heights.slice(0,heights.length/2+1)
}
secondArr=heights.slice(heights.length/2, heights.length)

for(let i=0;i<firstArr.length-1;i++){
    if(firstArr[i]<firstArr[i+1]&&secondArr[i]>secondArr[i+1]){
        num++
    }
}
if(firstArr.length-1===num&&heights.length>=3){
    return true
}

return false
    
}

console.log(checkSledJump([1, 2, 3, 2, 1])) // true: sube y baja de forma estricta
console.log(checkSledJump([0, 1, 0])) // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 3, 2, 1])) // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 1000, 1])) // -> true: sube y baja de forma estricta

console.log(checkSledJump([2, 4, 4, 6, 2])) // false: no sube de forma estricta
console.log(checkSledJump([1, 2, 3])) // false: sólo sube
console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3])) // false: sube y baja y sube... ¡no vale!