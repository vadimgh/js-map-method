const fruits = [{ name: 'banana' }, { name: 'grape' }, { name: 'orange ' }];

fruits.map(fruit => {
  fruit.price = 10;
});

fruits.forEach(fruit => {
  fruit.price = 10;
});
