const _ = require('underscore');

console.log(_.reject([1, 2, 3, 4, 5, 6], _.isNumber)); // 1
console.log(_.reject(['a', 'b', 3, 'd'], _.isNumber)); // a b d

// 裏ではcomplement関数が動いている
// 真偽値を逆にして処理する高階関数
function complement(pred) {
  return function() {
    return !pred.apply(null, _.toArray(arguments))
  }
}

console.log(_.filter(['a', 'b', 3, 'd' ], complement(_.isNumber))); // a b d
