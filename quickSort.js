/**
 * @param {number} n
 * @return {number}
 */
let numSquares = function (n) {
    if (n === 1) return 1
    let queue = []
    let sqr_nums = []
    queue.push(n)
    let visited = new Set()
    // 构建需要遍历的数组
    for (let i = 1; i < Math.sqrt(n) + 1; i ++) {
      sqr_nums.push(i * i)
    }
    sqr_nums.reverse()
    // console.log(sqr_nums.reverse())
    let lever = 0
    while(queue.length) {
      let len = queue.length
      lever ++
      
      for (let depth = 0; depth < len; depth ++) {
        let cur = queue.shift()
        for (let i = 0; i < sqr_nums.length; i ++) {
          if (cur - sqr_nums[i] === 0) {
            return lever
          } else if (cur - sqr_nums[i] < 0) {
            continue;
          } else if (!visited.has(sqr_nums[i])) {
            queue.push(cur - sqr_nums[i])
            visited.add(cur - sqr_nums[i])
          }
        }
      }
    }
  };
  console.log(numSquares(15))