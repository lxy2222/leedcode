/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    let a = points[0]
    let b = points[1]
    let c = points[2]
    return !((b[1]- a[1]) * (c[0] - b[0]) === (b[0] - a[0]) * (c[1] - b[1]))
};
let points = [[1,1],[2,2],[3,3]];
console.log(isBoomerang(points))