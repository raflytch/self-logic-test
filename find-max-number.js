/**
 * @param {number[]} nums
 * @return {number}
 */
var findMax = function (nums) {
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  return max;
};
