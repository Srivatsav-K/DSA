/* 
  Given an array of integer nums . Find the second smallest element from an array.

  Example 1:
  Input: nums = [1,2,1,4,6] 
  Output: 2
  Explanation: 2 is the second smallest element from an array.

  Constraints:
  1<=n<=10^5
  10^6<=nums[i] <= 10^6
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function secondSmallest(nums) {
  let small1 = Number.MAX_SAFE_INTEGER;
  let small2 = Number.MAX_SAFE_INTEGER;

  for (const ele of nums) {
    if (ele < small1) {
      small2 = small1;
      small1 = ele;
    } else if (ele < small2 && ele !== small1) {
      small2 = ele;
    }
  }

  return small2;
}

console.log(secondSmallest([1, 2, 1, 4, 6]));
