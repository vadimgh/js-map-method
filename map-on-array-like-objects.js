const arrayLikeObject = {
  length: 3,
  0: 1,
  1: 2,
  2: 3
};

const mappedArrayLikeObject = Array.prototype.map.call(arrayLikeObject, number => number ** 2);

console.log(mappedArrayLikeObject);

