let numSquares = function (n) {
  if (n === 1) return 1
  let queue = []
  let sqr_nums = []
  let maker = '*' // 每一次减法过后的数字
  queue.push(n)
  queue.push(maker)
  let visited = new Set()
  // 构建需要遍历的数组
  for (let i = 1; i < Math.sqrt(n) + 1; i ++) {
    sqr_nums.push(i * i)
  }
  sqr_nums.reverse()
  let lever = 0
  while(queue.length) {
    // let len = queue.length
    // lever ++
    let cur = queue.shift()
    if (cur === 0) {
      return lever
    }
    if (lever > 4) {
      continue
    }
    let maker = queue.shift()
    if (cur === maker) {
      queue.push(maker)
      lever ++
    } else {
      for (let i = 0; i < sqr_nums.length; i ++) {
       if (cur - sqr_nums[i] >= 0 && !visited.has(sqr_nums[i])) {
          queue.push(cur - sqr_nums[i])
          visited.add(cur - sqr_nums[i])
        }
      }
    }
    
  }
}
console.log(numSquares(1))