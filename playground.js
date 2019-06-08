function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [1];
  element = "foo";
  array.unshift(element);
  return array;
}

console.log(destructivelyAddElementToBeginningOfArray())
