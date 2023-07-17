function getGiftsToRefill(a1, a2, a3) {
let newArr=[]

for(let str of a1){

if(!a2.includes(str) && !a3.includes(str))
newArr.push(str)
}
for(let str of a2){
  if(!a1.includes(str) && !a3.includes(str))
  newArr.push(str)
}
for(let str of a3){
if(!a1.includes(str) && !a2.includes(str))
newArr.push(str)
}

/**
 * let newArr=[]

  return [...new Set(newArr.concat(a1.filter(ele=>!a2.includes(ele) && !a3.includes(ele)))
    .concat(a2.filter(ele=>!a1.includes(ele) && !a3.includes(ele)))
    .concat(a3.filter(ele=>!a1.includes(ele) && !a2.includes(ele))))]
 */
  return [...new Set(newArr)]
}
const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

/* El almacén a1 tiene "bici" y "coche".
El almacén a2 tiene "coche", "bici" y "muñeca".
El almacén a3 tiene "bici" y "pc".

El regalo "muñeca" y "pc" sólo están en los almacenes a2 y a3 respectivamente.
*/

const gifts = getGiftsToRefill(a1, a2, a3)
console.log(gifts) // ['muñeca', 'pc']