/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = -1e9;
  let currSum = 0;

  nums.forEach((number) => {
    currSum = currSum + number;
    if (currSum > maxSum) maxSum = currSum;
    if (currSum < 0) currSum = 0;
  });
  return maxSum;
};
