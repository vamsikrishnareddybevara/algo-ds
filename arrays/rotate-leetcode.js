var rotate = function(nums, k) {
    let array = nums.splice(nums.length-k);
    return  array.concat(nums);
};