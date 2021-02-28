var isStraight = function(nums) {
  nums = nums.filter(n => n !== 0);
  if(nums.join("") !== [...new Set(nums)].join("")) return false;
  nums.sort((a,b) => a-b);
  if(nums[nums.length-1] - nums[0] < 5) return true;
  return false;
};

isStraight([8,7,11,0,9]);