export const removeDuplicate = (directions: string[]) => {
  let x = 0;
  let y = 0;
  const coordinatesWithCaptures = new Map();
  const newCoordinates = []
  
  for (const direction of directions) {
      if (direction === 'v') {
          newCoordinates.push(direction)
          y++;
          
      } else if (direction === '^') {
          newCoordinates.push(direction)
          y--;
      } else if (direction === '>') {
          newCoordinates.push(direction)
          x++;
      } else if (direction === '<') {
          newCoordinates.push(direction)
          x--;
      }else if(direction === 'x'){
        const currentCoordinates = `${x},${y}`;
        if(!coordinatesWithCaptures.has(currentCoordinates)){
          coordinatesWithCaptures.set(currentCoordinates, true);
          newCoordinates.push(direction)
        }
      }
  }
  return newCoordinates;
};

