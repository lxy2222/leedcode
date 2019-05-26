var updateMatrix = function(matrix) {
  if (matrix === null) return matrix
  let rows = matrix.length
  let columns = matrix[0].length
  let result = []
  
  var getNeighbors = function (r, c) {
    var neighbors = []
    var addToNeighbors = function(r, c) {
      if (r < 0 || r >= rows || c < 0 || c >= columns) {
        return
      }
      else {
        neighbors.push({r: r, c: c})
      }
    }
    addToNeighbors(r - 1, c)
    addToNeighbors(r + 1, c)
    addToNeighbors(r, c - 1)
    addToNeighbors(r, c + 1)
    return neighbors
  }
  var bfs = function (r, c) {
    // let count  = 0
    let queue = []
    let visited = new Set()
    queue.push({value: matrix[r][c], count: 0, r: r, c: c})
    while (queue.length != 0) {
      let cur = queue.shift()
      visited.add(cur.r * columns + cur.c)
      if (cur.value === 0) {
        return cur.count
      } else {
        var neighbors = getNeighbors(cur.r, cur.c)
        neighbors.forEach((item) => {
          let r = item.r
          let c = item.c
          if (!visited.has(r * columns + c)) {
            queue.push({value: matrix[r][c], r: r, c: c, count: cur.count + 1})
          }
        })
      }
    }
  }
  for (var i = 0; i < rows; i ++) {
    result[i] = []
    for (var j = 0; j < columns; j++ ) {
      result[i][j] = bfs(i, j)
    }
  }
  return result
};
let arr = [[0,0,0], [0,1,0], [1,0,1]]
console.log(updateMatrix(arr))