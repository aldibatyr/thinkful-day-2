// /* eslint-disable strict */
// eslint-disable-next-line strict
let moves = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]
const filtered = moves.filter((move) => {
  if (move[0] >= 0 && move[1] >= 0) {
    return true;
  } else return false;
});

const mapped = filtered.map((steps) => {
  return steps[0] + steps[1];
});

const forEached = mapped.forEach((finalSteps, index) => {
  console.log(`Movement #${index + 1}: ${finalSteps} steps.`)
});

