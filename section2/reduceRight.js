const _ = require('underscore');

var num = [100, 2, 25];

function div(x, y) { return x / y }

console.log(_.reduce(num, div)); // 2

console.log(_.reduceRight(num, div)); // 0.125

function allOf() {
  return _.reduceRight(arguments, function(truth, f) {
    return truth && f();
  }, true);
}

function anyOf() {
  return _.reduceRight(arguments, function(truth, f) {
    return truth || f();
  }, false);
}

function T() { return true }
function F() { return false }

console.log(allOf(T)); // true
console.log(allOf(T,T)); // true
console.log(allOf(T,T,T)); // true
console.log(allOf(T,T,F)); // false
console.log(allOf(T, T, T, T)); // true
console.log(allOf(T, T, F, T)); // false

console.log(anyOf()); // true
console.log(anyOf(T,T,F)); // false
console.log(anyOf(F,F,F,F)); // false
