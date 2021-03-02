var wordPattern = function(pattern, s) {
  var obj = {};
  setP = [...new Set(pattern.split(""))];
  setS = [...new Set(s.split(" "))];
  for(i = 0; i < setP.length; i++) {
    obj[setP[i]] = setS[i];
  }
  pattern = pattern.split("").map(p => obj[p]).join(" ");
  return pattern === s;
};

wordPattern("abba", "dog cat cat dog")
