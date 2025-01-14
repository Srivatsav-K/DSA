/* 
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

Example 1:

Input: nums = [2,0,2,1,1,0] 
Output: [0,0,1,1,2,2]
Explanation: 
Example 2:

Input: nums = [2,0,1] 
Output: [0,1,2]
Explanation: 
Constraints:

n == nums.length
1 <= n <= 300
nums[i] is either 0, 1, or 2.
*/

Array.prototype.swap = function (i, j) {
  const temp = this[i];
  this[i] = this[j];
  this[j] = temp;
};

function sortColors(nums) {
  //bubble sort --> bubble the largest element to the end of the array\
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        nums.swap(i, j);
      }
    }
  }
  return nums;
}

console.log(sortColors([2, 0, 2, 1, 1, 0]));
