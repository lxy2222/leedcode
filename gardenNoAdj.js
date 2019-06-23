var gardenNoAdj = function (N, paths) {
  let res = new Array(N).fill(1)
  let stop = false
  while (!stop) {
    stop = true
    for (let edge of paths) {
      let u = Math.min(edge[0], edge[1])
      let v = Math.max(edge[0], edge[1])
      if (res[u - 1] === res[v - 1]) {
        stop = false
        res[v - 1] = res[v - 1] === 4 ? 1 : res[u - 1] + 1
      }
    }
  }
  return res
};
let arr = [[1,2],[2,3],[3,4],[4,1],[1,3],[2,4]]
console.log(gardenNoAdj(4, arr))