function decodeNumber(symbols) {
    let punto =1
    let coma = 5
    let dosPuntos=10
    let puntComa=50
    let exclamacion=100
    let num=0
    let num2=0

let newArr= symbols.split("")
let newArr2=[]
for(let i=0;i<newArr.length;i++){
newArr2[i]=Number(newArr[i].replace(".",1).replace(",",5).replace(":",10).replace(";",50).replace("!",100))
}
for(let j=0;j<newArr2.length-1;j++){
    if(newArr2[j]>=newArr2[j+1]){
        num=newArr2[j]+newArr2[j+1]
    }else{
        num=newArr2[j+1]-newArr2[j]
    }
    num2+=num
}

console.log(num)
     return false
   }

 decodeNumber('...') // 3
decodeNumber('.,') // 4 (5 - 1)
decodeNumber(',.') // 6 (5 + 1)
decodeNumber(',...') // 8 (5 + 3)
decodeNumber('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumber('.;') // 49 (50 - 1)
decodeNumber('..,') // 5 (-1 + 1 + 5)
decodeNumber('..,!') // 95 (1 - 1 - 5 + 100)
decodeNumber('.;!') // 49 (-1 -50 + 100)
decodeNumber('!!!') // 300
decodeNumber(';!') // 50
decodeNumber(';.W') // NaN