/* 
  Given an integer num, return the number of digits in num that divide num.

  An integer val divides nums if nums % val == 0

  Example 1:

  Input: num = 121 
  Output: 2
  Explanation: 121 is divisible by 1, but not 2. Since 1 occurs twice as a digit, we return 2.

  Example 2:

  Input: num = 1248 
  Output: 4
  Explanation: 1248 is divisible by all of its digits, hence the answer is 4.
*/

function countDigits(num) {
  let count = 0;
  let numCpy = num;

  while (numCpy > 0) {
    const digit = numCpy % 10;
    if (num % digit === 0) {
      count++;
    }
    numCpy = Math.floor(numCpy / 10);
  }

  return count;
}

console.log(countDigits(121));
console.log(countDigits(1248));
