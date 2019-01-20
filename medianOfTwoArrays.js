var findMedianSortedArrays = function(nums1, nums2) {
    let len1 = nums1.length
    let len2 = nums2.length
    let i = 0
    let j = 0
    let k = 0
    let result = []
    while ( i < len1 && j < len2) {
      if (nums1[i] <= nums2[j]) {
        result[k] = nums1[i]
        i ++
      } else {
        result[k] = nums2[j]
        j ++
      }
      k++
    }
    while(i < len1) {
      result[k ++] = nums1[i ++]
    }
    while (j < len2) {
      result[k ++] = nums2[j ++]
    }
    if (result.length % 2 !== 0) {
      return result[(result.length - 1)/2]
    } else {
      let totalLength = result.length
      let mid1 = totalLength / 2
      let mid2 = totalLength / 2 - 1
      return (result[mid1] + result[mid2]) / 2
    }
};
let left = [1, 2]
let right = [3, 4]
console.log(findMedianSortedArrays)