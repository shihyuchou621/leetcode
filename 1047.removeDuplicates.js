var removeDuplicates = function(S) {
  var S1 = S;
  var index = 0;
  while (index < S1.length) {
    var S2 = S1.replace(new RegExp(`${S[index]}{2}`, 'g'), '');
    if (S2 === S1) {
      index++;
    } else { 
      S1 = S2;
      index = 0;
    }
  }
  return S2;
};

removeDuplicates("aaa");

// 超SMART官方寫法
var removeDuplicates2 = function(S) {
  const stk = [];
  for (const ch of S) {
      if (stk.length && stk[stk.length - 1] === ch) {
          stk.pop();
      } else {
          stk.push(ch);
      }
  }
  return stk.join('');
};

removeDuplicates2("aaa");

// var removeDuplicates = function(S) {
//   var S1 = S;
//   var index = 0;
//   while (index < S1.length) {
//     var S2 = S1.replace(new RegExp(`${S[index]}{2,}`, 'g'), '');
//     if (S2 === S1) {
//       index++;
//     } else { 
//       S1 = S2;
//       index = 0;
//     }
//   }
//   return S2;
// };