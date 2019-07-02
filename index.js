var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

destructivelyAppendKitten('Eloise');

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

destructivelyPrependKitten('Eloise');

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

destructivelyRemoveLastKitten()

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

destructivelyRemoveFirstKitten()

function appendKitten(name) {
  var newKittens = [...kittens, name];
  return newKittens;
}

appendKitten(Johnny);
