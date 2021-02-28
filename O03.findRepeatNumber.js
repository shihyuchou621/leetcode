var findRepeatNumber = function(nums) {
  nums.sort();
  for(i = 1; i < nums.length; i++) {
    if(nums[i] === nums[i-1]) return nums[i];
  }
};
findRepeatNumber([2, 3, 1, 0, 2, 5, 3]);