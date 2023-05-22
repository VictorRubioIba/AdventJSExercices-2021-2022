 
 
 
 
 
 function contarOvejas(ovejas) {
    // filtramos con el metodo filter por color igual a rojo y los nombre que incluyan la a y la n
    let result = ovejas.filter(i => i.color==="rojo" && (i.name.toLowerCase().includes("a")&& i.name.toLowerCase().includes("n")))
    return result;
}
    
    const ovejas = [
      { name: 'Noa', color: 'azul' },
      { name: 'Euge', color: 'rojo' },
      { name: 'Navidad', color: 'rojo' },
      { name: 'Ki Na Ma', color: 'rojo'},
      { name: 'AAAAAaaaaa', color: 'rojo' },
      { name: 'Nnnnnnnn', color: 'rojo'}
    ]
    
    const ovejasFiltradas = contarOvejas(ovejas)
    
    console.log(ovejasFiltradas)