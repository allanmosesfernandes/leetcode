const { twoSumOptimized } = require('../arrays/twoSum-1');

describe('Two Sum Problem', () => {

    test('should find indicies when target exists', () => {
        const nums = [2, 7, 11, 15];
        const target = 9;
        // ACT: Call the function
        const result = twoSumOptimized(nums, target);
        // ASSERT: Check if result matches expectation
        expect(result).toEqual([0, 1]);
    })
        test('should find indices when target exists - case 2', () => {
        const nums = [3, 2, 4];
        const target = 6;
        const result = twoSumOptimized(nums, target);
        expect(result).toEqual([1, 2]);
    });

    test('should handle duplicate numbers', () => {
        const nums = [3, 3];
        const target = 6;
        const result = twoSumOptimized(nums, target);
        expect(result).toEqual([0, 1]);
    });
});
