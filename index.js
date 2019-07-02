var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(array, name) {
  array.push(name);
  return array;
}

destructivelyAppendKitten(kittens, 'Eloise');
