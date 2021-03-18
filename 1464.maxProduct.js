var maxProduct = function(nums) {
  numsSet = nums.sort((a,b) => b-a)
  return (numsSet[0]-1) * (numsSet[1]-1)
};
console.log(
  maxProduct([3,4,5,2])
);