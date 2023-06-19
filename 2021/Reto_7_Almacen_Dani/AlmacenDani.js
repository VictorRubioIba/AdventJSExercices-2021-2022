function contains(store, product) {
   let newStr = JSON.stringify(store);
   let newArr = newStr.split('"')
   if(newArr.indexOf(product)!=-1){return true}
    return false
  }
  const almacen = {
    'estanteria1': {
      'cajon1': {
        'producto1': 'coca-cola',
        'producto2': 'fanta',
        'producto3': 'sprite'
      }
    },
    'estanteria2': {
      'cajon1': 'vacio',
      'cajon2': {
        'producto1': 'pantalones',
        'producto2': 'camiseta' // <- ¡Está aquí!
      }
    }
  }
              
  console.log(contains(almacen, 'camiseta')) // true
  
  const otroAlmacen = {
    'baul': {
      'fondo': {
        'objeto': 'cd-rom',
        'otro-objeto': 'disquette',
        'otra-cosa': 'mando'
      }
    }
  }
    
  console.log(contains(otroAlmacen, 'gameboy')) // false