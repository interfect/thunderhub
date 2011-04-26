// To run:
// batmbp:thunderhub bat$ node
// > var fizzbuzz = require('./');
// > fizzbuzz();
// (prints output...)
module.exports = function(n) {
  n = n || 100;
  var a = [];
  for (var i=0; i < n; i++) {
    if (i % 3 == 0) a.push("Fizz");
    else if (i % 5 == 0) a.push("Buzz");
    else if (i % 3 == 0 && i % 5 == 0) a.push("FizzBuzz");
    else a.push(i);
  }
  console.log(a.join("\n"));
};
