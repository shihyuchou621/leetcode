var xorOperation = function(n, start) {
  var arr = [start];
  for(var i = 1; i < n; i++) {
    arr.push(start + i*2);
  }
  return arr.reduce((a, b) => a ^ b);
};

xorOperation(4,3);