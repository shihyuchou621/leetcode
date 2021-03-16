var sumOddLengthSubarrays = function(arr) {
  const len = arr.length;
  var sum = 0;
  for(i=0; i<len; i++) {
    for(j=0; j<Math.ceil(len/2); j++) {
      var arr2 = arr.slice(i, i + (j * 2 + 1));
      sum += i + (j * 2 + 1) > len ? 0 : arr2.reduce((a,b) => a+b);
      console.log(arr2, sum, i, i + (j * 2 + 1));
    }
  }
  return sum;
};

console.log(sumOddLengthSubarrays([1,4,2,5,3]));