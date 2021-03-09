var minOperations = function(boxes) {
  boxes = boxes.split("");
  var times = [];
  for(var i = 0; i < boxes.length; i++) {
    var count = 0;
    for(var j = 0; j < boxes.length; j++) {
      count += boxes[j] === "1" && i !== j ? Math.abs(j - i) : 0;
    }
    times.push(count);
  }
  return times;
};

minOperations("001011");