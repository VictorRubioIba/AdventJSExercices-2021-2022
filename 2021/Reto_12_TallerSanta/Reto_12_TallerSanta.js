function getMinJump(obstacles) {
    // ¡No olvides compartir tu solución en redes!

        //obstacles.sort((a,b)=>b-a)
        let value=0;
        let newArr=[1,2,3,4,5,6,7,8,9,10]



        value = newArr.find(ele=>obstacles.indexOf(ele)==-1&&obstacles.indexOf(ele*2)==-1&&obstacles.indexOf(ele*3)==-1)
       
        
       


            
        

        //console.log(obstacles)
    return value
  }
const obstacles = [9,5,1]
console.log(getMinJump(obstacles)) // -> 4
const obstacles1 = [2, 4, 6, 8, 10]
console.log(getMinJump(obstacles1)) // -> 7
const obstacles2 = [5, 3, 6, 7, 9]
console.log(getMinJump(obstacles2))