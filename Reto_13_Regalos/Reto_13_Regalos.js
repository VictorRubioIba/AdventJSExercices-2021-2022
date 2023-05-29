 function wrapGifts(gifts) {
if (gifts.length === 0) return []
   let newArr=[]
   let longArr=gifts.length+2
   let longInterArr=gifts[0].length+1
   


for(let i =0;i<longArr;i++){
    let newStr="*"
    for(let j=0;j<longInterArr;j++){
         if(i===0||i===(longArr-1)) 
                    {newStr+="*"}else{
            if(j===longInterArr-1){newStr+="*"}
           if(j===1){newStr+=gifts[i-1]}
         }
    }
    newArr.push(newStr)
}
    return newArr
  }

  //console.log(wrapGifts(["📷", "⚽️"]))
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/
 // wrapGifts(["🏈🎸", "🎮🧸"])
  /* Resultado:
  [ '******',
    '*🏈🎸*',
    '*🎮🧸*',
    '******'
  ]
  */
 console.log(wrapGifts(["📷"]))
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/