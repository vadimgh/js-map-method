const sparseArray = [1, , , 4, , 6];

const mappedSparseArray = sparseArray.map(number => {
  console.log(`called on ${number}`);
  return number;
});

console.log(mappedSparseArray);