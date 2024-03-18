const strings = ['1', '2', '3', '4', '5'];

// const mappedToIntegers = strings.map(parseInt);

// console.log(mappedToIntegers);

const mappedToIntegers = strings.map(string => parseInt(string, 10));

console.log(mappedToIntegers);