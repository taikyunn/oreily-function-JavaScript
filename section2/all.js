const _ = require('underscore');

console.log(_.all([1, 2, 3, 4, 5, 6], _.isNumber)); // true
console.log(_.all([1, 2, 3, 4, 5, 6], _.isString)); // false
console.log(_.all(['a', 'b', 3, 'd'], _.isNumber)); // false
console.log(_.all(['a', 'b', 3, 'd'], _.isString)); // false
