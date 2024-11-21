var productExceptSelf = function(nums) {
    const n = nums.length;
    let result = new Array(n).fill(1);
    //console.log(result)
    let liftProduct = 1;
    for (let i = 0; i < n; i++){
        result[i] *= liftProduct;
        liftProduct*=nums[i]
        // console.log(liftProduct)
    }
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
        // console.log(rightProduct)
    }

    return result
    
};
nums = [1,2,3,4]
console.log(productExceptSelf(nums))