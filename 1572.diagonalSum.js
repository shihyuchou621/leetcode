var diagonalSum = function(mat) {
  var sum = 0;
  for(var i=0; i<mat.length; i++) {
    sum += mat[i][i];
    sum += mat[i][mat.length-1-i];
  }
  if(mat.length % 2 === 1) {
    sum -= mat[(mat.length - 1)/2][(mat.length - 1)/2];
  }
  return sum;
};

diagonalSum([[1,2,3],[4,5,6],[7,8,9]]);