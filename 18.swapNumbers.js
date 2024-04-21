function swapNumbers(a, b) {
  a += b;
  console.log(a);
  b = a - b;
  console.log(b);
  a = a - b;
  console.log(a);
  return [a, b];
}

console.log(swapNumbers(4, 5));
