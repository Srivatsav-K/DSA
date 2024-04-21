/* 
  You are given a positive integer num consisting of exactly four digits. Split num into two new integers new1 and new2 by using the digits found in num. Leading zeros are allowed in new1 and new2, and all the digits found in num must be used.

  For example, given num = 2932, you have the following digits: two 2's, one 9 and one 3. Some of the possible pairs [new1, new2] are [22, 93], [23, 92], [223, 9] and [2, 329].
  Return the minimum possible sum of new1 and new2

  Input: num = 2932 
  Output: 52
  Explanation: Some possible pairs [new1, new2] are [29, 23], [223, 9], etc.

  The minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52.  
*/
function minimumSum(num) {
  const arr = [];

  while (num > 0) {
    const digit = num % 10;
    arr.push(digit);
    num = Math.floor(num / 10);
  }

  arr.sort((a, b) => a - b);

  const pair1 = arr[0] * 10 + arr[2];
  const pair2 = arr[1] * 10 + arr[3];

  return pair1 + pair2;
}

console.log(minimumSum(2932));
