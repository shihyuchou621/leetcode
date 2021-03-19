var uniqueOccurrences = function(arr) {
  const setArr = [...new Set(arr)];
  const result = setArr.map(uni => arr.filter( num => num === uni).length);
  return result.length === [...new Set(result)].length;
};

console.log(uniqueOccurrences([1,2,2,1,1,3]));