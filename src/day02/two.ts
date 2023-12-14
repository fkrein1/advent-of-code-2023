import { data } from './data';

let total = 0;

for (let line of data) {
  const [, cubes] = line.split(':');
  const gameDraw = cubes.split(';');
  const dict_game: { [key: string]: number } = {};
  for (let draw of gameDraw) {
    const cubes_list = draw.split(',');
    for (let cube of cubes_list) {
      const [qty, color] = cube.trim().split(' ');
      if (color in dict_game) {
        dict_game[color] =
          dict_game[color] > Number(qty) ? dict_game[color] : Number(qty);
      } else {
        dict_game[color] = Number(qty);
      }
    }
  }
  total +=
    (dict_game['red'] ?? 0) *
    (dict_game['green'] ?? 0) *
    (dict_game['blue'] ?? 0);
}

console.log(total);
