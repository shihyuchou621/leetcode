var kidsWithCandies = function(candies, extraCandies) {
  var max = Math.max(...candies);
  return candies.map( c => c + extraCandies >= max ? true : false);
};

kidsWithCandies([2,3,5,1,3], 3);