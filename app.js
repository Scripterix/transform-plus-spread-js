function sum(x, y, z, c) {
  return x + y + z + c;
}

const numbers = [1, 2, 3, 4];

console.log(sum(...numbers));
// expected output: 10

console.log(sum.apply(null, numbers));
// expected output: 10

const showCircle = document.querySelector('.demo');

showCircle.innerHTML = numbers + ' = ' + (sum.apply(null, numbers));

console.log(numbers);