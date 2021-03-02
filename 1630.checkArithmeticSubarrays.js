var checkArithmeticSubarrays = function(nums, l, r) {
  var arr = [];
  for(var i = 0; i < l.length; i++) {
      arr[i] = nums.slice(l[i], r[i]+1)
  }
  for(var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].sort((a,b) => a-b)
    for(var j = 0; j < arr[i].length - 2; j++) {
      if(arr[i][j+1] - arr[i][j] !== arr[i][j+2] - arr[i][j+1]) {
        arr[i] = false;
      }
    }
    arr[i] = arr[i]? true: false;
  }
  
  return arr;
};

checkArithmeticSubarrays([4,6,5,9,3,7], [0,0,2], [2,3,5])