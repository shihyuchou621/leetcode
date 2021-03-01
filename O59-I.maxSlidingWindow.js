var maxSlidingWindow = function(nums, k) {
  var result = [];
  if(!nums.length) return [];
  for(i = 0; i <= nums.length - k; i++) {
    result.push(Math.max(...nums.slice(i, i + k)));
  }
  return result;
};

maxSlidingWindow([1,3,-1,-3,5,3,6,7]);