 function countPackages(carriers, carrierID) {
    // ¡No olvides compartir tu solución en redes!
let numPaquetes=0
let newArr=[]

for(let i=0;i<carriers.length;i++){
        if(carriers[i][0]===carrierID || newArr.indexOf(carriers[i][0])!=-1 && carriers[i][2].length>0){
            numPaquetes+=carriers[i][1]
            newArr=[...carriers[i][2]] 
        }

    

if(newArr.indexOf(carriers[i][0])!=-1){
    numPaquetes+=carriers[i][1]
}

}

     return numPaquetes

     /*
     SOLUCIÓN BUENA, LA ANTERIOR NO PASA LOS TESTS
     const carrier = carriers.find(c => c[0] === carrierID); let result = carrier[1]
	carrier[2].forEach(c => result += countPackages(carriers, c))
	return result
    */
   }
   const carriers = [
    ['dapelu', 5, ['midu', 'jelowing']],
    ['midu', 2, []],
    ['jelowing', 2, []]
  ]
  
  console.log(countPackages(carriers, 'dapelu')) // 9
  // 5 de dapelu, 2 de midu y 2 de jelowing = 9
  
  const carriers2 = [
    ['lolivier', 8, ['camila', 'jesuspoleo']],
    ['camila', 5, ['sergiomartinez', 'conchaasensio']],
    ['jesuspoleo', 4, []],
    ['sergiomartinez', 4, []],
    ['conchaasensio', 3, ['facundocapua', 'faviola']],
    ['facundocapua', 2, []],
    ['faviola', 1, []]
  ]
  
  console.log(countPackages(carriers2, 'camila') )// 15
  // 5 de camila, 4 de sergiomartinez, 3 de conchaasensio, 2 de facundocapua y 1 de faviola = 15
  