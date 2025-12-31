/**
 * @param {number[]} nums
 * @return {number}
 */
var countPositiveNumbers = function (nums) {
  // tulis jawaban kamu di sini
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    nums[i] > 0 ? count++ : null;
  }

  return count;
};
