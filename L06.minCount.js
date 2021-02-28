var minCount = function(coins) {
  var sum = 0;
  for( i = 0; i < coins.length; i++) {
    sum += Math.ceil(coins[i]/2);
  }
  return sum;
};
minCount([4,4,1]);


var minCount2 = function(coins) {
  return coins.reduce((sum, v) =>
    sum + Math.ceil(v/2)
  ,0);
};