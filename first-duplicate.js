/**
 * @param {number[]} nums
 * @return {number}
 */
var firstDuplicate = function (nums) {
  const seen = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      return nums[i];
    } else {
      seen.add(nums[i]);
    }
  }

  return -1;
};
