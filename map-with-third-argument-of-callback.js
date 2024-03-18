const numbers = [1, -2, 2, -1, 3, 4, 5];

const mappedNumbers = numbers.filter(number => number % 2 === 0).map((number, idx, array) => {
  const prev = array[idx - 1];
  const next = array[idx + 1];

  let total = number;
  let count = 1;

  if (prev !== undefined) {
    count++;
    total += prev;
  }

  if (next !== undefined) {
    count++;
    total += next;
  }

  const average = total / count;
  return Math.round(average * 100) / 100;
});

console.log(mappedNumbers);
