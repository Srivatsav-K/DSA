/* 
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:

Input: nums = [2,2,1] 
Output: 1
Explanation: 
Example 2:

Input: nums = [4,1,2,1,2] 
Output: 4
Explanation: 
Example 3:

Input: nums = [1] 
Output: 1
Explanation: 
Constraints:

1 <= nums.length <=
3
∗
1
0
4
3∗10 
4
 
-
3
∗
1
0
4
3∗10 
4
  <= nums[i] <= 
3
∗
1
0
4
3∗10 
4
 
Each element in the array appears twice except for one element which appears only once.
*/
function singleNumber(nums) {
  const frequencyMap = {};

  for (let ele of nums) {
    if (ele in frequencyMap) {
      frequencyMap[ele]++;
    } else {
      frequencyMap[ele] = 1;
    }
  }

  for (let num in frequencyMap) {
    if (frequencyMap[num] === 1) return num;
  }
}
