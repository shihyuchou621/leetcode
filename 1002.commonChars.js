var commonChars = function(A) {
  const len = A[0].length;
  var result = [];
  for(i=0; i<len; i++) {
    var mapA = A.map(str => str.indexOf(A[0][i]));
    if(mapA.indexOf(-1) === -1) {
      result.push(A[0][i]);
    }
    A = A.map(str => str.replace(A[0][i],"0"));
  }
  return result;
};

console.log(commonChars(["bella","label","roller"]));