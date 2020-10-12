/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
let board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
var solveSudoku = function(board) {
  let isSafe = (row, col, num) => {
    let len = board.length;
    for (let i = 0; i < len; i++) {
      if (board[row][i] === num) {
        return false;
      }
    }
    for (let i = 0; i < len; i++) {
      if (board[i][col] === num) return false;
    }
    let rowStart = row - row % 3;
    let colStart = col - col % 3;
    for (let r = rowStart; r < rowStart + 3; r++) {
      for (let c = colStart; c < colStart + 3; c++) {
        let cur = board[r][c];
        if (cur === num) return false;
      }
    }
    return true;
  }
  // 
  let isSudoku = n => {
    let row = -1;
    let col = -1;
    let isEmpty = true;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] === '.') {
          row = i;
          col = j;
          isEmpty = false;
          break;
        }
      }
      if (!isEmpty) break;
    }
    if (isEmpty) return true;
    for (let num = 1; num <= 9; num++) {
      if(isSafe(row, col, num)) {
        board[row][col] = num
        if(isSudoku(n)) {
          return true;
        }
      } else {
        board[row][col] = '.'
      }
    }
    return false;
  }
  if (isSudoku(9)) {
    return board;
  } else {
    return []
  }
};
console.log(solveSudoku(board))