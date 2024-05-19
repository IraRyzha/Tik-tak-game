import { STEP_ORDER } from "./constants";

export function getNextStep(currentStep, playersCount) {
  const slicedStepOrder = STEP_ORDER.slice(0, playersCount);
  const nextStep = slicedStepOrder.indexOf(currentStep) + 1;
  return slicedStepOrder[nextStep] ?? slicedStepOrder[0];
}

/*

  0
  1 * 19 + 1
  2 * 19 + 2

  x + y * 19

*/

export function computeWinner(cells, sequenceSize = 5, fieldSize = 19) {
  const gap = Math.floor(sequenceSize / 2);

  function compareElements(indexes) {
    let result = true;

    for (let i = 1; i < indexes.length; i++) {
      result &&= !!cells[indexes[i - 1]];
      result &&= cells[indexes[i - 1]] === cells[indexes[i]];
    }

    return result;
  }

  function getSequenceIndexes(i) {
    const res = [
      [], // -
      [], // \
      [], // /
      [], // |
    ];

    for (let j = 0; j < sequenceSize; j++) {
      res[0].push(j - gap + i);
      res[1].push(fieldSize * (j - gap) + (j - gap) + i);
      res[2].push(-fieldSize * (j - gap) + (j - gap) + i);
      res[3].push(fieldSize * (j - gap) + i);
    }

    return res;
  }

  for (let i = 0; i < cells.length; i++) {
    if (cells[i]) {
      const indexRows = getSequenceIndexes(i);
      const winnerIndexes = indexRows.find((row) => compareElements(row));

      if (winnerIndexes) {
        return winnerIndexes;
      }
    }
  }
  return undefined;
}
