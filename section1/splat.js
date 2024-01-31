// unserscore.jsをrequire
const _ = require('underscore');

// スプレット構文
function splat(f) {
  return function(array) {
    // applyは第一引数に関数を、第二引数に配列を受け取る
    return f.apply(null, array)
  }
}

var addArrayElements = splat(function(x, y) { return x + y })
console.log(addArrayElements([1, 2]));

function unsplat(fun) {
  return function() {
    return fun.call(null, _.toArray(arguments))
  }
}

var joinElements = unsplat(function(array) { return array.join(' ') });
console.log(joinElements(1, 2));
console.log(joinElements('-', '$', '/', '!', ':'));
