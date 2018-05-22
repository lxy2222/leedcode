var intToRoman = function(num) {
    var I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
    var X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
    var C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
    var M = ["", "M", "MM", "MMM"]
        // console.log(num / 1000)
    var thousand = parseInt(num / 1000)
    var hundred = parseInt((num / 100) % 10)
    var ten = parseInt((num / 10) % 10)
    var ge = parseInt(num % 10)
    return M[thousand] + C[hundred] + X[ten] + I[ge]
}
console.log(intToRoman(1994))