function fraction(n){
  if (n === 0) return 1;
  return n * fraction(n-1);
};

fraction(4);

var numIdenticalPairs = function(nums) {
  var numsSet = [...new Set(nums)];
  if(numsSet.length === nums.length) return 0;
  var numSum = numsSet
    .map(i => nums.filter(j => j === i).length)
      .filter(i => i !== 1)
  return numSum
    .map(k => fraction(k)/(fraction(2)*fraction(k-2)))
      .reduce((a, b) => a + b );
};

numIdenticalPairs([1,2,3]);
