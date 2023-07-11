function wrapping(gifts) {

return  gifts.map((elem)=>{
    const asterisk = "*"

        const newArr = elem.split("")
        const newStr = asterisk.repeat(elem.length+2) + "\n" + asterisk
        newArr.push(newStr.split("").reverse().join(""))
        newArr.unshift(newStr)
        return newArr.join("")


        //solucion optima
        
        /**
         * return gifts.map(g => {
		 *  const w = '*'.repeat(2 + g.length)
		 *   return `${w}\n*${g}*\n${w}`
	     *   })
         */
        
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