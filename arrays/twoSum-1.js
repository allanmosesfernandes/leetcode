/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Dummy way x Brute force.
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return[i ,j]
            }
        }
    }
};

// Why dummy?
/*
    We're checking every pair twice.For each number we're searching linearly through the array.
*/

// Pro Way - Hash Map with Complement Logic
var twoSumOptimized = function (nums, target) {

    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
};

// Why Pro?
/* How it works step by step:
    Check first: Is the complement already in our map?
    If yes: Return the stored index + current index
    If no: Store current number and keep going
    This gives us O(n) time and O(n) space - much better than the O(n²) brute force! 🚀
/*

/*
    TERMINOLOGY: What is a COMPLEMENT?

    A complement is the "missing piece" that completes something.

    In Two Sum context:
    - If target = 9 and current number = 2
    - Then complement = 9 - 2 = 7
    - We need to find 7 to complete the pair that sums to 9

    Mathematical definition:
    - complement = target - current_number
    - current_number + complement = target

    Real world analogy:
    - If you need $9 total and you have $2
    - Your complement is $7 (the missing amount)
    - $2 + $7 = $9 ✓

    Why this matters:
    Instead of asking "what two numbers sum to target?"
    We ask "I have X, what complement do I need to reach target?"
    This shifts from O(n²) search to O(1) lookup!
*/