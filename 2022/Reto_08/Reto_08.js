function checkPart(part) {


const isPalindrome = ( word) =>
    word === [...word].reverse().join('')

  if (isPalindrome(part)) return true

  return [...part].some((_, index) =>
    isPalindrome(part.substring(0, index) + part.substring(index + 1))
  )

}

console.log(checkPart("uwu")) // true
// "uwu" es un palíndromo sin eliminar ningún carácter

console.log(checkPart("miidim"))// true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

console.log(checkPart("midu")) // false
// "midu" no puede ser un palíndromo después de eliminar un carácter