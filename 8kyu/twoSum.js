const twoSum = function (nums, target) {
  for (const num of nums) {
    compliment = target - num;
    spliced = nums.splice(nums.indexOf(compliment));
  }
};
