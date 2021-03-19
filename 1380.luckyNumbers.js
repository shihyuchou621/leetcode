var luckyNumbers  = function(matrix) {
  for(i=0; i<matrix.length; i++) {
    const min = Math.min(...matrix[i]);
    const max = Math.max(...matrix.map( arr => arr[matrix[i].indexOf(min)]));
    if(min === max) return [min];
  }
  return [];
};
console.log(luckyNumbers([[36376,85652,21002,4510],[68246,64237,42962,9974],[32768,97721,47338,5841],[55103,18179,79062,46542]]));