var islandPerimeter = function(grid) {
  let sum = 0;
  for(i=0; i<grid.length; i++) {
    for(j=0; j<grid[0].length; j++) {
      if(grid[i][j] === 1) 
      sum += 4
      - (grid[i-1]?.[j] || 0)
      - (grid[i+1]?.[j] || 0)
      - (grid[i][j-1] || 0)
      - (grid[i][j+1] || 0)
    }
  }
  return sum;
};

console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]));