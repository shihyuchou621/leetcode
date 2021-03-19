var titleToNumber = function(columnTitle) {
  const title = columnTitle.split("").reverse();
  let result = 0;
  for(i=0; i<title.length; i++) {
    result += (title[i].charCodeAt()-64)*Math.pow(26, i);
  }
  return result;
};

console.log(titleToNumber("BAA"));