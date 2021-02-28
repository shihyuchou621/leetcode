var missingNumber = function(nums) {
  var arr = [...Array(nums.length + 1).keys()];
  for( i = 0; i <= nums.length; i++) {
    if( arr[i] !== nums[i]) return arr[i];
  }
};
missingNumber([0]);
