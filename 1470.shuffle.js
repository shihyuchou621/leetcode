var shuffle = function(nums, n) {
  var arr = [];
  for(i = 0; i < nums.length / 2; i++) {
    arr.push(nums[i], nums[n + i]);
  }
  return arr;
};

shuffle([1,2,3,4,4,3,2,1], 4);
