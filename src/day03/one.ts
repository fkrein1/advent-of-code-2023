import { data } from './data';

const matrix: string[][] = [];

for (let i = 0; i < data.length; i++) {
  matrix.push(data[i].split(''));
}

const nums = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);
const invalid = new Set([
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '.',
]);

let total = 0;

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (nums.has(matrix[i][j])) {
      if (hasAdjacentSymbol(matrix, i, j)) {
        const { partNumber, jump } = getPartNumber(matrix[i], j);
        total += Number(partNumber);
        j += jump
      }
    }
  }
}

function getPartNumber(line: string[], j: number) {
  let partNumber = line[j];
  let k = j;
  let i = j;

  while (true) {
    if (nums.has(line[k + 1])) {
      partNumber += line[k + 1];
    } else {
      break;
    }
    k++;
  }
  while (true) {
    if (nums.has(line[i - 1])) {
      partNumber = line[i - 1] + partNumber;
    } else {
      break;
    }
    i--;
  }
  return { partNumber, jump: k - j };
}

function hasAdjacentSymbol(matrix: string[][], i: number, j: number) {
  const isValidIndex = (row: number, col: number) =>
    row >= 0 && row < matrix.length && col >= 0 && col < matrix[0].length;

  const isAdjacentSymbol = (row: number, col: number) =>
    isValidIndex(row, col) && !invalid.has(matrix[row][col]);

  return (
    isAdjacentSymbol(i, j + 1) ||
    isAdjacentSymbol(i, j - 1) ||
    isAdjacentSymbol(i + 1, j + 1) ||
    isAdjacentSymbol(i + 1, j - 1) ||
    isAdjacentSymbol(i + 1, j) ||
    isAdjacentSymbol(i - 1, j + 1) ||
    isAdjacentSymbol(i - 1, j - 1) ||
    isAdjacentSymbol(i - 1, j)
  );
}

console.log(total)