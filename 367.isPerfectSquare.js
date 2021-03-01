var isPerfectSquare = function(num) {
  for(i = 1; i * i <= num; i++) {
    if((i * i) === num) return true;
  }
  return false;
};
isPerfectSquare(1);


var isPerfectSquare2 = function(num) {
  let i = 0;
  while(i*i < num) {
    i++;
  }
  return i*i === num;
};
