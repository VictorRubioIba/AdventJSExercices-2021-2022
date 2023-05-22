/*
El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱
Las cartas son una cadena de texto que incluyen regalos y paréntesis ().
Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.
¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...
*/


function isValid(letter) {

    const regex = /^\([a-zA-ZÀ-ÿ\u00f1\u00d1]+\)$/;
    let newLetter = letter.split(" ")
    /*let newLetter = letter.split(" ").forEach(element => {
        return regex.test(element)
    });*/

    for(let i=0;i<newLetter.length;i++){
        console.log(regex.test(newLetter[i]))
    }

   //return /^[^\{\[\(\)]*\([^\{\[\(\)]+\)+.*/g.test(letter);
   }

isValid("bici coche (balón) bici coche peluche") // -> ✅
isValid("(muñeca) consola bici") // ✅

isValid("bici coche (balón bici coche") // -> ❌
isValid("peluche (bici [coche) bici coche balón") // -> ❌
isValid("(peluche {) bici") // -> ❌
isValid("() bici") // ❌