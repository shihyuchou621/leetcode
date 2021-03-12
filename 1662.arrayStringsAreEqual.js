var arrayStringsAreEqual = function(word1, word2) {
  return word1.join("") === word2.join("");
};

arrayStringsAreEqual(["a", "cb"],["ab", "c"]);