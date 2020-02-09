/**
 * @param {character[][]} board
 * @return {boolean}
 */
// let board =[
//   ["8","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
var isValidSudoku = function(board) {
  let isValidRow = row => {
    let set = new Set();
    for (let i = 0; i < 9; i++) {
      if (set.has(board[row][i])) return false;
      if (board[row][i] !== '.') {
        set.add(board[row][i])
      }
    }
    return true;
  }
  let isValidColumn = column => {
    let set = new Set();
    for (let i = 0; i < 9; i++) {
      if (set.has(board[i][column])) return false;
      if (board[i][column] !== '.') {
        set.add(board[i][column])
      }
    }
    return true
  }
  let isValidBox = (startRow, startColumn) => {
    let set = new Set();
    for (let row = 0; row < 3; row++)
      for (let column = 0; column < 3; column++) {
        let cur = board[startRow + row][startColumn + column];
        if (set.has(cur)) return false;
        if ( cur !== '.') {
          set.add(cur)
        }
      }
    return true;
  }
  let isValid = (row, col) => {
    return isValidRow(row) && isValidColumn(col) && isValidBox(row - row % 3, col - col % 3)
  }
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if(!isValid(i, j)) {
        return false
      }
    }
  }
  return true;
};
// console.log(isValidSudoku(board))