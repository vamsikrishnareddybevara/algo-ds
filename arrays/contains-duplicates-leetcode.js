var containsDuplicate = function(nums) {
    let i = nums.length-1;
    let mySet = new Set();
    while( i >= 0) {
        if(mySet.has(nums[i])) return true;
        else mySet.add(nums[i]);
        i--;
    }
    return false;
};