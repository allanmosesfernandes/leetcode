/*
    Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

    Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.
    Input: arr = [1,0,2,3,0,4,5,0]
    Output: [1,0,0,2,3,0,0,4]
    Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
*/
const input = [1, 0, 2, 3, 0, 4, 5, 0];

var duplicateZeros = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            // We found a zero! Now move backwards until this index.
            for (let j = arr.length - 1; j > i; j--) {
                // Shift the elements.
                arr[j] = arr[j - 1];
            }
            // Duplicate the zero.
            if (i + 1 < arr.length) {
                arr[i + 1] = 0;
            }
            i++; // Skip the next index because it is 0 now.
        }
    }
}

console.log(duplicateZeros(input));
console.log(input)