var twoSum = function (nums, target) {
  let newSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in newSet) {
      return [newSet[nums[i]], i]
    } else {
      newSet[target - nums[i]] = i;
    }
  }
}