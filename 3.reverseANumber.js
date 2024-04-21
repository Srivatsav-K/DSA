function reverseANumber(num) {
  let result = 0;

  for (let i = num; i > 0; i = Math.floor(i / 10)) {
    const digit = i % 10;
    result = result * 10 + digit;
  }

  return result;
}

console.log(reverseANumber(1234));
