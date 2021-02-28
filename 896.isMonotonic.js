var isMonotonic = function(A) {
  if(A[A.length-1] > A[0]) {
      for(i = 1; i < A.length; i++) {
          if (A[i] < A[i-1]) return false;
      }
  }
  if(A[A.length-1] < A[0]) {
      for(i = 1; i < A.length; i++) {
          if (A[i] > A[i-1]) return false;
      }
  }
  if(A[A.length-1] === A[0]) {
      for(i = 1; i < A.length; i++) {
          if (A[i] !== A[i-1]) return false;
      }
  }
  return true;
};
isMonotonic([6,5,4,4])