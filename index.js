const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];


function destructivelyAppendKitten(name) { //mutation add newKittenName onto END of kittens
  return kittens.push(name)
}

function destructivelyPrependKitten(name) { //mutation add newKittenName onto Beginning of kittens
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() { //mutation remove lastKittenName off end of kittens
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() { //mutation remove lastKittenName off Beginning of kittens
  return kittens.shift();
}

function appendKitten(name) { //add newKittenName to End and give newKittensArray (no mutation)
  var newKittens = [...kittens, name]
  return newKittens;
}

function prependKitten(name) { //add newKittenName to Beginning and give newKittensArray
  var newKittens = [name, ...kittens]
  return newKittens;
}

function 