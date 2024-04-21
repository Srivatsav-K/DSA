function findDivisors(number) {
  const divisors = [];

  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      divisors.push(i);
      if (i !== number / i) divisors.push(number / i);
    }
  }

  console.log(Math.sqrt(12));

  return divisors.sort((a, b) => a - b);
}

console.log(findDivisors(16));
