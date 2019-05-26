var floodFill = function (image, sr, sc, newColor) {
  let rows = image.length
  let columns = image[0].length
  let startPixel = image[sr][sc]
  // image[sr][sc] = newColor
  // console.log(rows, columns, startPixel)
  var dfs = function (row, column) {
    if (row < 0 || row > rows - 1 || column < 0 || column > columns - 1 || image[row][column] === newColor || image[row][column] !== startPixel) {
      return
    }
    image[row][column] = newColor
    dfs(row - 1, column)
    dfs(row + 1, column)
    dfs(row, column - 1)
    dfs(row, column + 1)
  }
  dfs(sr, sc)
  return image
}
let image =[[0,0,0],[0,1,0]]

let sr = 1
let sc = 1
let newColor = 2
console.log(floodFill(image, sr, sc, 2))