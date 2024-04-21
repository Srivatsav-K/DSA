function findSumOfNumbers(num) {
  let sum = 0;

  for (let i = num; i > 0; i = Math.floor(i / 10)) {
    sum += i % 10;
  }

  return sum;
}

console.log(findSumOfNumbers(2134));
