/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0
   for (let i = 0; i < grid.length; i ++) 
    for (let j = 0; j < grid[0].length; j ++) {
      if (grid[i][j] === '1') {
        dfs(grid, i, j)
        count ++
      }
    }
  return count
};
var dfs = function (grid, x, y) {
  if (x < 0 || y >= grid[0].length || y < 0 || x >= grid.length || grid[x][y] !== '1')
    return
  grid[x][y] = '#'
  dfs(grid, x + 1, y)
  dfs(grid, x - 1, y)
  dfs(grid, x, y - 1)
  dfs(grid, x, y + 1)
}
let islands = ['11000', '11000', '00100', '00011']
let test = []
for (let i = 0; i < islands.length; i++) {
  test.push(islands[i].split(''))
}
console.log(numIslands(test))