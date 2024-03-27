const _ = require('underscore');

// 作用的な関数ではない(引数に関数を取ることができない)
function cat () {
  var head = _.first(arguments);
  if (existy(head)) {
    return head.concat.apply(head, _.rest(arguments));
  } else {
    return [];
  }
}

function existy (x) { return x != null; }

console.log(cat([1, 2, 3], [4, 5], [6, 7, 8]));

// 作用的な関数ではない(引数に関数を取ることができない)
function construct (head, tail) {
  return cat([head], _.toArray(tail));
}

console.log(construct(42, [1, 2, 3]));

// 作用的な関数(引数に関数を取ることができる)
function mapcat (fun, coll) {
  return cat.apply(null, _.map(coll, fun));
}

console.log(mapcat(function (e) {
  return construct(e, [',']);
}
, [1, 2, 3]));

function butLast (coll) {
  return _.toArray(coll).slice(0, -1);
}

function interpose (inter, coll) {
  return butLast(mapcat(function (e) {
    return construct(e, [inter]);
  }, coll));
}

console.log(interpose(',', [1, 2, 3]));
