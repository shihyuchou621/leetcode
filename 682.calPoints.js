var calPoints = function(ops) {
  let result = [];
  for(let i=0; i<ops.length; i++) {
    ops[i] === "C" ? result.pop(ops[i-1]) :
      ops[i] === "D" ? result.push(result[result.length-1] * 2) :
        ops[i] === "+" ? result.push(result[result.length-1] + result[result.length-2]) :
          result.push(+ops[i]);
  }
  return result.reduce((a,b) => a+b);
};

console.log(calPoints(["5","-2","4","C","D","9","+","+"]));