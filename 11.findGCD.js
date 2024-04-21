/* 
  Given an integer array nums, return**** the greatest common divisor of the smallest number and largest number in nums.

  The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

  Example 1:

  Input: nums = [2,5,6,9,10] 
  Output: 2
  Explanation: The smallest number in nums is 2.

  The largest number in nums is 10.

  The greatest common divisor of 2 and 10 is 2.
  Example 2:

  Input: nums = [7,5,6,8,3] 
  Output: 1
  Explanation: The smallest number in nums is 3.

  The largest number in nums is 8.


  The greatest common divisor of 3 and 8 is 1.

  Constraints:

  2 <= nums.length <= 1000
  1 <= nums[i] <= 1000
*/

//? Can be done with Euclidean Algorithm.
function findGCD(nums) {
  const smallestNum = Math.min(...nums);
  const largestNum = Math.max(...nums);

  let gcd = 1;

  for (let i = 1; i <= smallestNum; i++) {
    if (smallestNum % i === 0 && largestNum % i === 0) {
      gcd = i;
    }
  }

  return gcd;
}

console.log(findGCD([2, 5, 6, 9, 10]));
console.log(findGCD([7, 5, 6, 8, 3]));
