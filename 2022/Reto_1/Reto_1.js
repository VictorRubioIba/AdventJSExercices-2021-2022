function wrapping(gifts) {

return  gifts.map((elem)=>{
    const asterisco = "*"

        const newArr = elem.split("")
    
        const newStr = asterisco.repeat(elem.length+2)+"\n"+asterisco

        newArr.push(newStr.split("").reverse().join(""))
        newArr.unshift(newStr)
        
        return newArr.join("")
        
})


}

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */