function sortToys(toys, positions) {

return toys
  .map((name, index) => ({name, index}))
  .sort((a, b) => positions[a.index] - positions[b.index])
  .map(toy => toy.name)
}

const toys = ['ball', 'doll', 'car', 'puzzle']
const positions = [2, 3, 1, 0]

sortToys(toys, positions)
// ['puzzle', 'car', 'ball', 'doll']

const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo']
const morePositions = [8, 6, 5, 7, 9]

sortToys(moreToys, morePositions)
// ['ps4', 'xbox', 'switch', 'pc', 'nintendo']
sortToys(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l'], [])
