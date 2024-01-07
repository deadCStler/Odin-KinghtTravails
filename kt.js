const knightValid = [
  [1, 2],
  [2, 1],
  [-1, 2],
  [1, -2],
  [-1, -2],
  [-2, 1],
  [2, -1],
  [-2, -1],
];

const isValidMove = (x, y) => x >= 0 && y >= 0 && x < 8 && y < 8;

const knightMoves = (startArr, endArr) => {
  if (startArr.length !== 2 || endArr.length !== 2) {
    return "invalid";
  }

  if (
    startArr[0] >= 8 ||
    startArr[1] >= 8 ||
    endArr[0] >= 8 ||
    endArr[1] >= 8
  ) {
    return "invalid";
  }

  const queue = [[...startArr, [startArr]]];
  while (queue.length > 0) {
    const [x, y, path] = queue.shift();

    if (x === endArr[0] && y === endArr[1]) {
      return path;
    }

    for (const [dx, dy] of knightValid) {
      const newX = x + dx;
      const newY = y + dy;

      if (isValidMove(newX, newY)) {
        const newPath = [...path, [newX, newY]];
        queue.push([newX, newY, newPath]);
      }
    }
  }

  return "no valid path";
};

const result = knightMoves([3, 3], [4, 3]);
console.log(result);
