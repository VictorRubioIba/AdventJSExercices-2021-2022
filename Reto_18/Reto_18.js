 function fixFiles(files) {
    // ¡No olvides compartir tu solución en redes!

    let newArr=[...files]

    const findDuplicates = newArr => newArr.filter((item, index) => newArr.indexOf(item) !== index)
    const duplicates = findDuplicates(newArr);


    duplicates.forEach(element => {
        let num=0
    for(let i in files){
        if(element===i){
            if(num>0){
                files[i]=files[i]+`(${num})`
            }
            num++
        }
        }
    });
  
  

    console.log(files)
     return files
   }
const files = ['photo', 'postcard', 'photo', 'photo', 'video']
fixFiles(files) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ['file', 'file', 'file', 'game', 'game']
fixFiles(files2)  //['file', 'file(1)', 'file(2)', 'game', 'game(1)']

// ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
fixFiles(files3) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']