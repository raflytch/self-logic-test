/**
 * @param {number[]} nums
 * @return {number[]}
 */
var reverseArray = function (nums) {
  let left = 0;

  let right = nums.length - 1;

  while (left < right) {
    let temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
    left++;
    right--;
  }
  return nums;
};
