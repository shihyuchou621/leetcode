var firstUniqChar = function(s) {
  var s2 = s.split("");
  s2.sort();
  s2 = s2.join("");
  for(i = 1; i < s2.length; i++) {
    if(s2[i] === s2[i-1]) {
      s = s.replace(RegExp(s2[i], "g"), "");
    }
  }
  return s? s.slice(0,1) : " "
};
firstUniqChar("abbaccddeeff");


var firstUniqChar2 = function(s) {
  for (let i = 0; i < s.length; i++) {
    if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) return s[i];
  }
  return ' ';
};
firstUniqChar2("abbaccddeeff");