
var longestConsecutive = function (nums) {
    if (nums.length === 0)
        return 0;

    nums.sort((a, b) => a - b)
    console.log(nums)

    let count = 1;
    let maxi = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1]) {
            if (nums[i] === nums[i - 1] + 1)
                count += 1
        } else if (nums[i] === 0 && nums[i - 1] === -1) {
            count += 1
        } else if (nums[i] === 1 && nums[i - 1] === 0) {
            count += 1
        }
        else {
            maxi = Math.max(maxi, count);
            count = 1
        }
    }

    return Math.max(maxi, count)
};
nums = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]
console.log(longestConsecutive(nums))