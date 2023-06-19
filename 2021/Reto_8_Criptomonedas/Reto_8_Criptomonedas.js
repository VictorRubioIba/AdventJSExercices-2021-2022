function maxProfit(prices) {
    // ¡Y no olvides compartir tu solución en redes!
  let rest =-1;
  for(let i=0;i<prices.length;i++){
    for(let j=i+1;j<prices.length;j++){
        if(prices[j]>prices[i]&&((prices[j]-prices[i])>rest)){
            rest=prices[j]-prices[i];
        }
    }
  }
    return rest
  }

  const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
console.log(maxProfit(pricesBtc)) // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
console.log(maxProfit(pricesEth)) // -> 60 (compra a 10, vende a 70)
  