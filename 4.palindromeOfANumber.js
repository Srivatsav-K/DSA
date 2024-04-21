function palindrome(num) {
  let numInReverse = 0;

  for (let i = num; i > 0; i = Math.floor(i / 10)) {
    const digit = i % 10;
    numInReverse = numInReverse * 10 + digit;
  }

  return num === numInReverse;
}

console.log(palindrome(1221));
console.log(palindrome(1231));
