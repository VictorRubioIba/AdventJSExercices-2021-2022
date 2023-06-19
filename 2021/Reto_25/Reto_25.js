function canMouseEat(direction, game) {
    // ¡Gracias por jugar a AdventJS 2021! 🤗
    // ¡Nos vemos el año que viene! 👋
    // Por favor, comparte en las redes qué te ha parecido! 🚀

    let valueReturned;

    for(let i=0;i<game.length;i++){
        for(let j=0;j<game[i].length;j++){
            if(game[i][j]==="m"){
                valueReturned = checkPosition(i,j,direction)
            }
        }
    }

    function checkPosition(x,y,direction){
        switch(direction){
            case "up":
                return game[x-1][y]==="*" ? true :false
            case "down":
             return game[x+1][y]==="*" ? true :false
            case "right":
                return game[x][y+1]==="*" ? true :false
            case "left":
                return game[x][y-1]==="*" ? true :false
        }
    }


    return valueReturned
  }

  const room = [
    [' ', ' ', ' '],
    [' ', ' ', 'm'],
    [' ', ' ', '*']
  ]
  
  canMouseEat('up',    room)   // false
  canMouseEat('down',  room)   // true
  canMouseEat('right', room)   // false
  canMouseEat('left',  room)   // false
  
  const room2 = [
    ['*', ' ', ' ', ' '],
    [' ', 'm', '*', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', '*']
  ]
  
  canMouseEat('up',    room2)   // false
  canMouseEat('down',  room2)   // false
  canMouseEat('right', room2)   // true
  canMouseEat('left',  room2)   // false