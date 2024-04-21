/* 
  Given an array A[] of size N containing non-negative integers. You have to move all 0's to the end of array while maintaining the relative order of the non-zero elements.

  Note: You must do this in-place without making a copy of the array. Minimize the total number of operations.

  Example 1:
  Input: nums = [0,1,0,3,12] 
  Output: [1,3,12,0,0]
  Explanation:

  Constraints:
  1 <= N <= 10^5 , 1 <= A[i] <= 10^5
*/

Array.prototype.swap = function (i, j) {
  const temp = this[i];
  this[i] = this[j];
  this[j] = temp;
};

function moveZeros(nums) {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      console.log("nums before swap: ", nums);
      nums.swap(i, j);
      console.log("nums after swap: ", nums);
      j++;
      console.log("j", j);
    }
  }
  return nums;
}

console.log(moveZeros([0, 1, 0, 3, 12]));
console.log(moveZeros([9, 2, 4, 5]));
