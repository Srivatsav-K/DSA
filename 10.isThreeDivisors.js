/* 
  Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.

  An integer m is a divisor of n if there exists an integer k such that n = k * m.

  Example 1:

  Input: n = 2 
  Output: false
  Explanation:  2 has only two divisors: 1 and 2.

  Example 2:

  Input: n = 4 
  Output: true
  Explanation: 4 has three divisors: 1, 2, and 4.
*/
function isThree(n) {
  // Any number can be represented as a pair (product of 2 numbers).
  // A number has min 2 divisors : 1 and itself.
  // A third divisor must be a perfect square and a prime number.
  return isPerfectSquare(n) && isPrime(Math.sqrt(n));
}

function isPerfectSquare(n) {
  const squareRoot = Math.sqrt(n);

  return Math.floor(squareRoot) === squareRoot;
}

function isPrime(n) {
  if (n <= 1) return false;

  const flooredSqrt = Math.floor(Math.sqrt(n));

  for (let i = 2; i <= flooredSqrt; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isThree(4));
