const _ = require('underscore');

var people = [{name: 'Rick', age: 30}, {name: 'Jaka', age: 24}];

console.log(_.sortBy(people, function(p) { return p.age; }));
