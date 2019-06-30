var maxSubArray = function(nums) {
  let cur = nums[0];
  let res = nums[0];
  for(let i = 1; i < nums.length; i ++){
    if(cur < 0){
      cur = nums[i];
    }
    else {
      cur += nums[i];
    }
    res = Math.max(res, cur);
  }
  return res;
}