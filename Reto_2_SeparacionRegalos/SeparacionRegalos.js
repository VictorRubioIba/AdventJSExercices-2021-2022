
/*
Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)
Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation, que significa que está tachado y no se tiene que contar.
Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece.
*/
function listGifts(letter) {
  
    //creamos el objeto a devolver
    let obj = new Object();
    //separamos el string por medio de espacios y con trim eliminamos los espacios de los lados
    let filterLetter = letter.trim().split(" ");
    //eliminamos las palabra que empiezen por _
    let newLetter = filterLetter.filter( i => i.charAt(0)!="_")

for(let i =0;i<newLetter.length;i++){

//recorremos el array que habiamos creado y en cada iteraccion llamamos a una funcion findWordReapeted
//esta funcion nos devolvera el numero y lo añadiremos al objeto
let numRep =  findWordReapeted(newLetter[i],newLetter)
 
  obj[newLetter[i]]= numRep; 
}
//funcion de repeticion en la que comparamos el dato que le pasamos dentro del array que le pasamos
 
        function findWordReapeted(date,array){
        let num =0;
        for(let j=0;j<array.length;j++)
        {
            if(date===array[j]){num++}
        } 
        return num;       
        }
   

//opcion refactorizada


 //newLetter.forEach(element => {obj[element] = obj[element]+1 || 1})

 
    return obj
   }

const carta = 'bici coche balón _playstation bici coche peluche'
const regalos = listGifts(carta)

console.log(regalos)
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/