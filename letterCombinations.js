/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
   let output = [];
   if (digits.length === 0) return '';
   const digitsMap = {
     2: 'abc',
     3: 'def',
     4: 'ghi',
     5: 'jkl',
     6: 'mno',
     7: 'pqrs',
     8: 'tuv',
     9: 'wxyz'
   };
   let backtracing = function (combination, next_collection) {
     if (next_collection.length === 0) {
       output.push(combination);
     } else {
       let digit = next_collection.substr(0, 1);
       let letters = digitsMap[digit];
       for (let i = 0; i < letters.length; i++) {
         letter = letters.charAt(i);
         backtracing(combination + letter, next_collection.substr(1))
       }
     }
   }
   backtracing('', digits);
   return output;
  }
  console.log(letterCombinations('23'))