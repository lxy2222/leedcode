var myPow = function(x, n) {
  let temp
  if (n === 0) return 1
  temp = myPow(x, parseInt(n / 2))
  if (n % 2 === 0) {
     return temp * temp
  } else {
      if (n > 0) {
          return x * temp * temp
      } else {
          return (temp * temp) / x
      }
  }
};
console.error(myPow(2, 10))