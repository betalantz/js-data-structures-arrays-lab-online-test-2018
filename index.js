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
  let res = new Array(drivers)
  res.push(name)
  return res
}

function prependDriver(name) {
  let res = drivers
  return res.unshift(name)
}

function removeLastDriver() {
  let res = drivers
  return res.pop()
}

function removeFirstDriver() {
  let res = drivers
  return res.shift()
}
