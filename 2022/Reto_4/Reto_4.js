function fitsInOneBox(boxes) {

let newObject ={
    l: 0, w: 0, h: 0
}
let valueReturned=true;

boxes.sort((a,b)=>a.l-b.l).forEach(element => {
 

if(valueReturned==true){
if(element.l>newObject.l&&element.w>newObject.w&&element.h>newObject.h){
    newObject=element
    valueReturned=true
}else{
    valueReturned=false
}
}
});

    return valueReturned
  }

  fitsInOneBox([
    { l: 1, w: 1, h: 10 },
    { l: 3, w: 3, h: 12 },
    { l: 2, w: 2, h: 1 },
  ]) // true

  const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
  ]
  
  fitsInOneBox(boxes) // false

  const boxes1 = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
  ]
  
  fitsInOneBox(boxes1) // true

  
  