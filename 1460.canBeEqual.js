var canBeEqual = function(target, arr) {
  return target.sort((a,b) => a-b).join(",") === arr.sort((a,b) => a-b).join(",");
};

console.log(canBeEqual([1,2,3,4], [2,4,1,3]));