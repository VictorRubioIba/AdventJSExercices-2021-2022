function shouldBuyFidelity(times) {
    // ¡No olvides compartir tu solución en redes!
    let descuento = 0.75;
    let precioBillete = 0;
    let gastoTotal=0;
    let gastoNormal=times*12;
    let tarjetavalue =250;

for(let i=0;i<times;i++){
    precioBillete=12*descuento;
    gastoTotal+=precioBillete
    descuento*=0.75;

}


if((tarjetavalue+gastoTotal)<gastoNormal){return true}else{return false}
}
  console.log(shouldBuyFidelity(1)) // false -> Mejor comprar tickets de un sólo uso
console.log(shouldBuyFidelity(100)) // true -> Mejor comprar tarjeta fidelidad
console.log(shouldBuyFidelity(20))