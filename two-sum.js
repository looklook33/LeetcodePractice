var twoSum = function(nums, target) {
    let result = []
    for (let i = 0; i < nums.length-1; i++){
        for (let j = i+1; j < nums.length; j++)
            if (nums[i]+nums[j] === target)
                 result.push(i, j)
                
    }
    return result;
    
};

nums = [2,5,5,11], target = 10
console.log(twoSum(nums, target))