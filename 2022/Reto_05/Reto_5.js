function getMaxGifts(giftsCities, maxGifts, maxCities) {

    giftsCities.sort((a,b)=>b-a)
    if(maxGifts<Math.max(giftsCities)){ return 0}

        let quantityGifts = giftsCities.reduce((a,b)=>{
    
        if((a+b) <= maxGifts){
            return a+b
        }else{
            return a
        }
        })
    

  console.log(quantityGifts)
  return quantityGifts
}

const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3

// la suma más alta de regalos a repartir
// visitando un máximo de 3 ciudades
// es de 20: [12, 3, 5]

// la suma más alta sería [12, 7, 11]
// pero excede el límite de 20 regalos y tendría
// que dejar alguna ciudad a medias.

getMaxGifts(giftsCities, maxGifts, maxCities) // 20

getMaxGifts([12, 3, 11, 5, 7], 20, 3) // 20
console.log(getMaxGifts([50], 15, 1) )// 0
getMaxGifts([50], 100, 1) // 50

getMaxGifts([50, 70], 100, 1) // 70
getMaxGifts([50, 70, 30], 100, 2) // 100
getMaxGifts([50, 70, 30], 100, 3) // 100
getMaxGifts([50, 70, 30], 100, 4) // 100
