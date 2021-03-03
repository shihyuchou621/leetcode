var arr = [];
var test = function(obj) {
  arr.push(obj.name);
  for(var i = 0; i < obj.children.length; i++) {
      test(obj.children[i]);
    }
  return arr;
}

test({ 
  name:'A', 
  children: [
    { name: 'B' , children:[]}, 
    { name: 'C' , children:[]}
  ]
});