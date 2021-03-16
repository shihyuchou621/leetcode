var sumOfUnique = function(nums) {
  const numsSet = [...new Set(nums)];
  var newNums = [];
  for(i=0; i<numsSet.length; i++) {
    if(nums.indexOf(numsSet[i]) === nums.lastIndexOf(numsSet[i])) {
      newNums.push(numsSet[i]);
    }
  }
  return newNums.length > 0 ? newNums.reduce((a,b) => a+b) : 0;
};

console.log(sumOfUnique([1,2,3,1]));