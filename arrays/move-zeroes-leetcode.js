var moveZeroes = function(nums) {
    let i = nums.length;
    while(i >= 0 ) {
       if( nums[i] === 0)  {
           nums.splice(i,1);
           nums.push(0);
       }
       i--;
    }
    return nums
}