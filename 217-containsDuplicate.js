function compareNumber(a,b){
    return a - b
}

var containsDuplicate = function(nums) {
    nums.sort(compareNumber);
    for (let i = 0;i<nums.length; i++){
            if (nums[i]===nums[i+1]){
                return true;
            }
    }
    return false    
};


nums = [1,2,3,1]

console.log(containsDuplicate(nums))