var deckRevealedIncreasing = function(deck) {
  deck = deck.sort((a,b) => b-a);
  let result = [];
  for(i=0; i<deck.length-1; i++) {
    result.unshift(deck[i]);
    result.unshift(result[result.length-1])
    result.pop();
  }
  result.unshift(deck[deck.length-1]);
  return result;
};

console.log(deckRevealedIncreasing([17,13,11,2,3,5,7]));
