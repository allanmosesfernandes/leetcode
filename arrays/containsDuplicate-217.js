/*
    Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
    Input: nums = [1,2,3,1]

    Output: true

    Explanation:

    The element 1 occurs at the indices 0 and 3.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const counter = new Map();
    for (const num of nums) {
        const count = counter.get(num) ?? 0;
        if (count !== 0) {
            return true
        } else {
            counter.set(num, count + 1);
        }
    }
    return false
};

console.log(containsDuplicate([1,2,3,4]))