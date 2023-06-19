function pangram(letter) {
    // ¡No olvides compartir tu solución en redes!
    let reg = /[a-zñ]/g
    let valueReturned = true

    let newArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"]
    let newStr = letter.toLowerCase().match(reg)


    for(let i=0;i<newArr.length;i++){
        if(newStr.indexOf(newArr[i])==-1){valueReturned= false}
    }
   return valueReturned
   }


console.log(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')) // true
console.log(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')) // true

console.log(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')) // false
console.log(pangram('De la a a la z, nos faltan letras')) // false