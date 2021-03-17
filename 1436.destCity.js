var destCity = function(paths) {
  var setPaths = paths.reduce((a,b) => a.concat(b));
  for(i=0; i<paths.length; i++) {
    if(setPaths.indexOf(paths[i][1]) === setPaths.lastIndexOf(paths[i][1]) )
    return paths[i][1];
  }
};

console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]));
