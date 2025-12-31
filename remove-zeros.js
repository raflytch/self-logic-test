/**
 * @param {number[]} nums
 * @return {number[]}
 */
var removeZeros = function (nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      result.push(nums[i]);
    } else {
      continue;
    }
  }

  return result;
};
