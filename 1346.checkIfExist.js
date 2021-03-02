var checkIfExist = function(arr) {
  if(arr.filter(i => i === 0).length >= 2) return true;
  arr = arr.filter(i => i !== 0);
  var arrDiv = arr.map( i => i/2);
  for(i = 0; i < arr.length; i++) {
    if(arrDiv.indexOf(arr[i]) >= 0) return true;
  }
  return false;
};

checkIfExist([0,0]);