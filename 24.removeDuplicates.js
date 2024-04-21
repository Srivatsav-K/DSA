/* 
  Given an integer array nums sorted in non-decreasing order, remove the duplicates  such that each unique element appears only once and return the new array.

  Example 1:

  Input: nums = [1,1,2] 
  Output: [1,2]
  Explanation: Array after removing duplicates are [1,2]

  Constraints:
  1 <= nums.length <= 3∗10^4
  -100 <= nums[i] <= 100
  nums is sorted in non-decreasing order.
*/
function removeDuplicates(nums) {
  const deduplicatedArr = [];

  let j;

  for (const element of nums) {
    if (element !== j) {
      deduplicatedArr.push(element);
      j = element;
    }
  }

  return deduplicatedArr;
}

console.log(removeDuplicates([1, 1, 2]));
