var mergeAlternately = function(word1, word2) {
  var word = "";
  var max = word1.length === Math.max(word1.length, word2.length) ? word1 : word2;
  var min = max === word1 ? word2 : word1
  for(var i = 0; i < min.length; i++) {
      word += word1[i] + word2[i];
  }
  word += max.slice(min.length, max.length)
  return word;
};

mergeAlternately("abcdefg", "pqr");