var fib = {};
var numWays = function(n) {
  if(n < 2) return 1;
  fib[n] = fib[n] || (numWays(n - 1) + numWays(n - 2));
  return fib[n];
};
numWays(45);
