import { data } from './data';

let total = 0;

for (let line of data) {
  const [game, cubes] = line.split(':');
  const gameNumber = Number(game.replace('Game ', ''));
  const gameDraw = cubes.split(';');
  let count = 0;
  for (let draw of gameDraw) {
    const dict: { [key: string]: number } = {};
    const cubes_list = draw.split(',');
    for (let cube of cubes_list) {
      const [qty, color] = cube.trim().split(' ');
      dict[color] = Number(qty);
    }
    if (
      (dict['red'] <= 12 || !('red' in dict)) &&
      (dict['green'] <= 13 || !('green' in dict)) &&
      (dict['blue'] <= 14 || !('blue' in dict))
    ) {
      count += 1;
    }
    if (count === gameDraw.length) {
      total += gameNumber;
    }
  }
}

console.log(total);
