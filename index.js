var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(array, name) {
  array.push(name);
  return array;
}

destructivelyAppendKitten(kittens, 'Eloise');

function destructivelyPrependKitten(name) {
  kittens = unshift(name);
  return kittens
}

destructivelyPrependKitten(Eloise)

function destructivelyRemoveLastKitten() {
  pop(kittens);
  return kittens;
}

destructivelyRemoveLastKitten()

function destructivelyRemoveFirstKitten() {
  kittens = shift ();
  return kittens;
}

destructivelyRemoveFirstKitten()