/**
 * @param {number[]} nums
 * @return {number}
 */
var firstOddNumber = function (nums) {
  // tulis jawaban kamu di sini
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      return nums[i];
    } else {
      continue;
    }
  }

  return -1;
};
