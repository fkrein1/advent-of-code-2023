import { data } from './data';

const dict = {
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const nums = Object.keys(dict) as Array<keyof typeof dict>;

let total = 0;

for (let i = 0; i < data.length; i++) {
  const min_values = [];
  for (let num of nums) {
    min_values.push(data[i].indexOf(num));
  }
  let min = data[i].length;
  let min_index = 0;
  for (let i = 0; i < min_values.length; i++) {
    if (min_values[i] < min && min_values[i] >= 0) {
      min = min_values[i];
      min_index = i;
    }
  }

  const max_values = [];
  for (let num of nums) {
    max_values.push(data[i].lastIndexOf(num));
  }
  let max = -1;
  let max_index = 0;
  for (let i = 0; i < max_values.length; i++) {
    if (max_values[i] > max) {
      max = max_values[i];
      max_index = i;
    }
  }

  total += dict[nums[min_index]] * 10 + dict[nums[max_index]];
}

console.log(total);
