const merge = (arr) => {
    // console.log(arr)
    var len = arr.length
    if (len > 1) {
        var midIndex = Math.floor(arr.length / 2)
            // console.log(midIndex)
        var leftArr = arr.slice(0, midIndex)
        var rightArr = arr.slice(midIndex)

        return mergeSortedArrays(merge(leftArr), merge(rightArr))
    } else {
        return arr
    }

}
const mergeSortedArrays = (leftArr, rightArr) => {
    var res = []
    while (leftArr.length && rightArr.length) {
        // var min
        if (leftArr[0] <= rightArr[0]) {
            res.push(leftArr.shift())
        } else {
            res.push(rightArr.shift())
        }
        // res.push[min]
    }
    while (leftArr.length) {
        res.push(leftArr.shift())
    }
    while (rightArr.length) {
        res.push(rightArr.shift())
    }
    return res
}
var arr = [6, 10, 1, 9, 4, 8, 2, 7, 3, 5]
console.log(merge(arr))