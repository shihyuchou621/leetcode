var numberOfMatches = function(n) {
  var sum = 0;
  while ( n > 1) {
    sum += Math.floor(n / 2);;
    n = Math.ceil(n / 2);
  }
  return sum;
};

numberOfMatches(17);