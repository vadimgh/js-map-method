const numbers = [4, 9, 16, 25, 36];

const mappedNumbers = numbers.map(number => Math.sqrt(number));

console.log(mappedNumbers);

const words = ['one', 'two', 'three'];

words.map((word, idx, array) => {
  console.log(word);
  console.log(idx);
  console.log(array);
  return word;
})