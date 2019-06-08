let drivers = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
  let res = [...drivers]
  res.push(name)
  return res
}

function prependDriver(name) {
  let res = [...drivers]
  res.unshift(name)
  return res
}

function removeLastDriver() {
  let res = [...drivers]
  res.pop()
  return res
}

function removeFirstDriver() {
  let res = [...drivers]
  res.shift()
  return res
}
