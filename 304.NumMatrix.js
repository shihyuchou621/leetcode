var NumMatrix = function(matrix) {
  this.matrix = matrix;
};

NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  return this.matrix
    .slice(row1,row2+1)
    .map(arr => arr.slice(col1,col2+1))
    .map(arr => arr.reduce((a,b) => a + b))
    .reduce((a,b) => a + b);
};

const a = new NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]);
a.sumRegion(2, 1, 4, 3);