const _ = require('underscore');

var albums = [
  {title: 'Sabbath Bloody Sabbath', genre: 'Metal'},
  {title: 'Scientist', genre: 'Dub'},
  {title: 'Undertow', genre: 'Metal'}
];

console.log(_.countBy(albums, function(a) { return a.genre; }));
