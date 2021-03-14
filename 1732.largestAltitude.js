var largestAltitude = function(gain) {
  gain.unshift(0);
  return Math.max(...gain.map( (i, index) => gain.slice(0, index+1).reduce((a,b) => a+b)));
};

console.log(largestAltitude([-5,1,5,0,-7]));


