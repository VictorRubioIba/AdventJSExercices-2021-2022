function createCube(size) {

let newString=""
 
for(let i=0;i<size*2;i++){

    if(i<size){
    newString+= " ".repeat(size-1-i)+"/\\".repeat(i+1)+"\_\\".repeat(size)+"\n"
    }else{
    newString+= " ".repeat(i-size)+"\\/".repeat(size*2-i)+"\_/".repeat(size)+"\n"
    }
}

return newString.trimEnd()
  }

  const cube = createCube(3)



  /**
   * 
   * 
  /\_\_\_\
 /\/\_\_\_\
/\/\/\_\_\_\
\/\/\/_/_/_/
 \/\/_/_/_/
  \/_/_/_/
   * 
   */