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

