const _ = require('underscore');

console.log(_.find([1, 2, 3, 4, 5, 6], _.isNumber)); // 1
console.log(_.find(['a', 'b', 3, 'd'], _.isNumber)); // 3
