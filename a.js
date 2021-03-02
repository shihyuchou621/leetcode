function a(x) {
  if(x <= 100) return true;
  return false;
}

function a2(x) {
  if(!(x > 100)) return true;
  return false;
}

var b;

a(NaN); // false
a(null); // true
a(b); // false

a2(NaN); // true
a2(null); // true
a2(b); // true

+null;
