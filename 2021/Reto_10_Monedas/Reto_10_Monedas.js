 function getCoins(change) {
    // ¡No olvides compartir tu solución en redes!
    
    do{
    switch (true){
        case (change>=50):
            coins[5]+=1;
            change-=50
            break;
        case change>=20:
            coins[4]+=1
            change-=20
            break;
        case change>=10:
            coins[3]+=1
            change-=10
            break;
        case change>=5:
            coins[2]+=1
            change-=5
            break;
        case change>=2:
            coins[1]+=1
            change-=2
            break;
        case change>=1:
            coins[0]+=1
            change-=1
            break;
        case change<0:
            change=0
            break;
    }

}while(change>0)

  }

console.log(getCoins(51)) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
console.log(getCoins(3)) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
console.log(getCoins(5)) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
console.log(getCoins(16)) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
console.log(getCoins(100)) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
/*do{
    switch (true){
        case (change>=50):
            coins[5]+=1;
            change-=50
            break;
        case change>=20:
            coins[4]+=1
            change-=20
            break;
        case change>=10:
            coins[3]+=1
            change-=10
            break;
        case change>=5:
            coins[2]+=1
            change-=5
            break;
        case change>=2:
            coins[1]+=1
            change-=2
            break;
        case change>=1:
            coins[0]+=1
            change-=1
            break;
        case change<0:
            change=0
            break;
    }

}while(change>0)*/
