import { data } from './input';

const nums = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9']);

let total = 0;

for (const line of data) {
  const values = line.split('');
  let num = '';
  for (let i = 0; i < values.length; i++) {
    if (nums.has(values[i])) {
      num += values[i];
      break;
    }
  }
  for (let i = values.length - 1; i >= 0; i--) {
    if (nums.has(values[i])) {
      num += values[i];
      break;
    }
  }
  total += Number(num)
}
console.log(total)